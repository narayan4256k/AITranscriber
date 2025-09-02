"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
      className: "text-white",
    },
    {
      text: "Guide",
      className: "text-white",
    },
    {
      text: "To",
      className: "text-white",
    },
    {
      text: "Sacred",
      className: "text-white",
    },
    {
      text: "Pronounciation.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-5  ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-blue-600 hover:bg-blue-800 dark:border-white border-transparent hover:scale-110 transition-all cursor-pointer text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black hover:bg-gray-300 hover:scale-110 transition-all cursor-pointer text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
