import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

export function FlipWordsDemo() {
  const words = ["translates", "transliterates", "and provides real-time pronunciation"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="relative text-center text-4xl mx-auto font-normal text-neutral-300 max-w-5xl">
        Our AI-powered app &nbsp; 
        <FlipWords words={words} /> <br/>
        &nbsp;to help you master ancient prayers and hymns.
      </div>
    </div>
  );
}
