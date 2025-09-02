"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import { TextGenerateEffectDemo } from "./Subheading";
 
export function LampDemo() {
  return (
    <div>
       
      <LampContainer>
         
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
        >
           
          BhaktiWaani 
        </motion.h1> 
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
        >           
          Voice Of Devotion 
        </motion.h1> 
        <TypewriterEffectSmoothDemo/>
                
      </LampContainer> 
    
    </div>
  );
}
