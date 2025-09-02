"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";


const content = [
  {
    title: "Multi-Language Chant Mode",
    description:
      "Switch seamlessly between Sanskrit, Hindi, English, or other regional languages. BhaktiVaani helps devotees worldwide connect to chants in their own tongue, without losing the purity of the original recitation.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="./multi-language.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Pronunciation"
        />
      </div>
    ),
  },
  {
    title: "Text-to-Pronunciation Converter",
    description:
      "Simply paste or upload any hymn text and BhaktiVaani will instantly convert it into phonetic pronunciation that is easy to follow. No need to guess how ancient scripts are pronounced — our system bridges the gap between sacred texts and modern understanding.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="./speechtotext.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Text to Pronunciation"
        />
      </div>
    ),
  },
  {
    title: "Accurate Translations",
    description:
      "Chanting is more meaningful when you understand it. BhaktiVaani provides accurate translations of every hymn into your preferred language, so you not only recite the words but also connect with their essence and spiritual wisdom.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="./translate.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Translation"
        />
      </div>
    ),
  },
  {
    title: "Personal Chant Library",
    description:
      "Build your own sacred collection. Save your favorite hymns, mantras, and chants in one place. Whether it’s a short daily mantra or an elaborate hymn, you’ll always have quick access to what uplifts you the most.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/library.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Library"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-0 ">
      <StickyScroll content={content} />
    </div>
  );
}
