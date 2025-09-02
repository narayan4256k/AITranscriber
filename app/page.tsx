"use client";

import React, { useState } from "react";
import { LampDemo } from "./_components/LampContainer";
import { TextRevealCardPreview } from "./_components/swipe";
import { StickyScrollRevealDemo } from "./_components/Functions";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { NavbarDemo } from "./_components/navbar";
import { TextGenerateEffectDemo } from "./_components/Subheading";
import { FlipWordsDemo } from "./_components/flipword";
import { Footer } from "./_components/footer";

export default function Home() {
  const navItems = [
    { name: "Feature", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="rounded-none bg-slate-950">
      <NavbarDemo/>
      <LampDemo />
      <div id="about-section" className="flex justify-center items-center relative top-10  ">
          <TextGenerateEffectDemo />
        </div>
      <TextRevealCardPreview />
      <FlipWordsDemo/>
      <div id="features">
      <StickyScrollRevealDemo />
      <Footer/>
      </div>
    </div>
  );
}
