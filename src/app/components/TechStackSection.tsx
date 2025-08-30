"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Icons } from "@/app/components/Icons";

export default function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("techstack");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techStack = [
    // Languages
    { name: "HTML", icon: Icons.HtmlIcon, category: "Language" },
    { name: "CSS", icon: Icons.CssIcon, category: "Language" },
    { name: "SASS", icon: Icons.SassIcon, category: "Language" },
    { name: "JavaScript", icon: Icons.JavaScriptIcon, category: "Language" },
    { name: "TypeScript", icon: Icons.TypeScriptIcon, category: "Language" },

    // Frontend Frameworks & Libraries
    { name: "React", icon: Icons.ReactIcon, category: "Frontend" },
    { name: "Next.js", icon: Icons.NextJsIcon, category: "Frontend" },
    { name: "Vue", icon: Icons.VueIcon, category: "Frontend" },
    { name: "Nuxt.js", icon: Icons.NuxtJsIcon, category: "Frontend" },
    { name: "Tailwind CSS", icon: Icons.TailwindCssIcon, category: "Frontend" },

    // Backend & Runtime
    { name: "Node.js", icon: Icons.NodeJsIcon, category: "Backend" },

    // Email Development
    { name: "MJML", icon: Icons.MjmlIcon, category: "Email Development" },

    // Version Control
    { name: "Git", icon: Icons.GitIcon, category: "Version Control" },
  ];

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Email Development",
    "Tools",
  ];

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
              Stack Tecnológico
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Este es el conjunto de tecnologías que utilizo para dar vida a mis proyectos.
          </p>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-[#22D3EE]/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#22D3EE]/20 cursor-pointer ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex justify-center h-9 mb-3 group-hover:scale-125 transition-transform duration-300">
                    <tech.icon width={36} height={36} />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-[#22D3EE] transition-colors duration-300 mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {tech.category}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/10 to-[#8B5CF6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Category Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category, index) => (
              <span
                key={category}
                className={`px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-full text-sm font-medium text-gray-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-300 cursor-default ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(index + techStack.length) * 50}ms`,
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
