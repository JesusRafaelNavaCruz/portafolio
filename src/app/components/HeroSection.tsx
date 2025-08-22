"use client";
import React, { useEffect, useState } from "react";
import Typewritter from "./Typewritter";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
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
            <Typewritter words={["lorem", "lorem", "lorem"]} />
          </h1>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              debitis atque officiis magni quibusdam eius aspernatur
              exercitationem similique voluptate harum!
            </p>
          </div>
        </div>
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#22D3EE]/25"
            >
              <span className="relative z-10">Ver proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#121212] hover:scale-105"
            >
              Contactame
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-[#22D3EE] hover:border-[#22D3EE] hover:shadow-lg hover:shadow-[#22D3EE]/25 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
         {/* Scroll Indicator */}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 hover:text-[#22D3EE] transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
