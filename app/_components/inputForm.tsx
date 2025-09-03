"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";


export function PlaceholdersAndVanishInputDemo() {
 const placeholders = [
  "What does the Gayatri Mantra truly mean in simple words?",
  "Explain the deeper significance of 'Om Namah Shivaya'.",
  "What is the meaning of the Hanuman Chalisa verses?",
  "Why is the Mahamrityunjaya Mantra considered so powerful?",
  "Translate the hymn 'Vishnu Sahasranama' into English meaning.",
  "What message does the Bhagavad Gita shloka 2.47 convey?",
  "Give me the essence of the mantra 'Om Mani Padme Hum'.",
  "What is the hidden spiritual meaning behind Vedic chants?",
  "Explain the hymn praising Goddess Saraswati and its meaning.",
  "Break down the meaning of 'Asato Ma Sadgamaya' mantra."
];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4  bg-gradient-to-b from-slate-900 to-slate-950 h-screen space--4">
      <h2 className="mb-10 sm:mb-20 text-2xl text-center sm:text-6xl text-gray-300 font-bold">
        Ask BhaktiWaani Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}        
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
