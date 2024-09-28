"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
// import { AuroraBackground } from "../ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-center text-3xl font-bold dark:text-white md:text-7xl">
          Welcome to HostPro
        </div>
        <div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
          Innovative hosting solutions for your digital success
        </div>
        <button className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
          Get Started
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
