"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipTextProps {
  words: string[];
  interval?: number; // tiempo entre cada palabra
}

export default function FlipText({ words, interval = 6000 }: FlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="relative py-10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute font-bold bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
