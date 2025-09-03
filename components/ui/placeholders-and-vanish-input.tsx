"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { TextGenerateEffectDemo } from "@/app/_components/Subheading";
import { TextGenerateEffectDemo1 } from "@/app/_components/meaning";
import { Loader2 } from "lucide-react";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3500);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [animating, setAnimating] = useState(false);

  // ---- DRAW + ANIMATE FOR VANISH ----
  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#AAA";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };
  const [loading, setLoading] = useState(false);
  const [meaning, setMeaning] = useState("");

  const OnClickNext = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/meaning", { value });
      setMeaning(result.data.text); // store response
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const vanish = () => {
    setAnimating(true);
    draw();

    const maxX = newDataRef.current.reduce(
      (prev, current) => (current.x > prev ? current.x : prev),
      0
    );
    animate(maxX);
  };

  // ---- SUBMIT HANDLER ----
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(e); // call external submit
    // ✅ no vanish or clearing on submit
  };

  const vanishMeaning = () => {
    // trigger vanish effect for meaning text
    setMeaning(""); // clear meaning state
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        className={cn(
          "w-full relative flex max-w-2xl gap-2 mx-auto bg-zinc-800 h-12 rounded-full overflow-hidden shadow transition duration-200",
          value && "bg-zinc-800 "
        )}
        onSubmit={handleSubmit}
      >
        <canvas
          className={cn(
            "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
            !animating ? "opacity-0" : "opacity-100"
          )}
          ref={canvasRef}
        />

        {/* Input */}
        <input
          onChange={(e) => {
            if (!animating) {
              setValue(e.target.value);
              onChange && onChange(e); // calls setNote(e.target.value)
            }
          }}
          ref={inputRef}
          value={value}
          type="text"
          className={cn(
            "w-full relative text-sm sm:text-base z-50 border-none bg-transparent text-zinc-400 h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
            animating && "text-transparent dark:text-transparent"
          )}
        />

        {/* Submit Button */}
        <button
          disabled={!value}
          type="submit"
          onClick={() => OnClickNext()}
          className="relative right-2 top-1/2 z-50 -translate-y-1/2 h-8 px-3 rounded-full bg-blue-700 disabled:bg-blue-950 transition duration-200 flex items-center justify-center gap-1"
        >
          <span className="text-gray-300 mb-1 flex">Submit{loading&&<Loader2 className="animate-spin ml-2"/>}</span>
        </button>

        {/* Clear Button */}
        <button
          type="button"
          onClick={() => {
            vanish(); // existing vanish effect for input
            vanishMeaning(); // clear the meaning box
          }}
          disabled={!value && !meaning} // disable only if both are empty
          className="relative right-2 top-1/2 z-50 -translate-y-1/2 h-8 px-3 rounded-full bg-gray-200 disabled:bg-gray-400 transition duration-200 flex items-center justify-center"
        >
          <span className="text-black mb-1">Clear</span>
        </button>

        {/* Placeholders */}
        <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
          <AnimatePresence mode="wait">
            {!value && (
              <motion.p
                initial={{ y: 5, opacity: 0 }}
                key={`current-placeholder-${currentPlaceholder}`}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
              >
                {placeholders[currentPlaceholder]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Meaning Result */}
      <AnimatePresence>
        {meaning && (
          <motion.div
            id="textbox"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-6 w-full max-w-2xl mx-auto text-left text-gray-200 space-y-2 border border-gray-700 rounded-lg p-4 bg-gray-800"
          >
            {meaning
              .split("\n")
              .map((line, i) =>
                line.trim() ? (
                  <TextGenerateEffectDemo1 key={i} words={line.trim()} />
                ) : (
                  <br key={i} />
                )
              )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
