"use client";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import React from "react";


export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-slate-950  w-full">
      <TextRevealCard
        text="You know the Chant"
        revealText="AI know its Pronounciation "
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
