
import React from "react";
import { LampDemo } from "./_components/LampContainer";
import { TextRevealCardPreview } from "./_components/swipe";
import { StickyScrollRevealDemo } from "./_components/Functions";
import { NavbarDemo } from "./_components/navbar";

export default function Home() {
  return (
    <div className="rounded-none bg-slate-950" >
      <NavbarDemo/>
      <LampDemo/>
      <TextRevealCardPreview/>
      <StickyScrollRevealDemo/>
    </div>
  );
}
