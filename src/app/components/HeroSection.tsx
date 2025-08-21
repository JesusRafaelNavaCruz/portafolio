"use client";
import React, { useEffect, useState } from "react";
import Typewritter from "./Typewritter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-700/20 rounded-full animate-spin-slow-reverse"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-6 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <Typewritter words={["Desarrollo", "Innovación", "Calidad"]}  />
          </h1>
        </div>
      </div>
    </section>
  );
}
