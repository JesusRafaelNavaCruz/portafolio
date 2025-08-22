"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section id="aboutme" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
              Sobre me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-64 h-64 md:w-full md:h-[550px]">
                  <Image
                    src="/assets/profile-photo.png"
                    alt="Jesus Nava"
                    fill
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Soy un apasionadodesarrollador Frontend con experiencia en la
                  creación de interfaces modernas y funcionales. Trabajo con
                  JavaScript, React, Vue, Nuxt.js, Tailwind CSS y Node.js,
                  aplicando buenas prácticas para lograr proyectos escalables y
                  de alto rendimiento.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Puedo ayudarte a llevar tus ideas digitales a la realidad, ya
                  sea que busques un sitio web atractivo y responsivo, una
                  interfaz escalable para tu producto o una experiencia que
                  mejore la interacción con tus usuarios. Mi enfoque está en
                  crear soluciones funcionales y visualmente consistentes,
                  aportando valor tanto a equipos de desarrollo como a clientes
                  que necesitan resultados confiables y de calidad.
                </p>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-[#22D3EE] mb-4">
                    Habilidades y Técnologías
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all duration-300 hover:scale-105 cursor-default ${
                          isVisible ? "animate-fade-in-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
