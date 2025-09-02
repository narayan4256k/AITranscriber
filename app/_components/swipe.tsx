"use client";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import React from "react";


export function TextRevealCardPreview() {
  return (
    <div className="w-full flex justify-center bg-slate-950">
      <TextRevealCard
        text="You know the Chant"
        revealText="AI know its Pronounciation"
        className="max-w-2xl min-h-[200px] p-6" // 👈 fixed height + padding
      >
        <TextRevealCardTitle>
          Your AI Devotional Companion
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Perfect your pronunciation and understand the true meaning of every mantra.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}


