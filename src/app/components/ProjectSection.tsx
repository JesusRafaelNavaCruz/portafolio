"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Icons } from "./Icons";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SUIM",
      description:
        "Plataforma integral desarrollada con Vue.js, SVG.js y Cornerstone para la gestión del Expediente Clínico Electrónico (ECE). Este sistema permite gestionar eficientemente historiales médicos, imágenes diagnósticas, estudios de laboratorio y signos vitales, optimizando el flujo de trabajo en entornos de salud.",
      image: "/assets/suim_bg.png",
      tech: [
        "VueJs",
        "JavaScript",
        "Vuetify",
        "Axios",
        "Git",
        "HTML",
        "CSS",
        "Cornerstone",
        "SVG.js",
      ],
      icons: [Icons.VueIcon, Icons.JavaScriptIcon],
      live: "https://erillamhc.com/",
    },
    {
      title: "Portafolio Personal",
      description:
        "Sitio web moderno y responsivo, creado con Nuxt.js y TailwindCSS, diseñado para exhibir mis proyectos, habilidades y experiencia profesional. Sirve como una herramienta de contacto directa para posibles clientes o colaboradores, destacando mi trabajo en un formato visualmente atractivo.",
      image: "/assets/portfolio_bg.png",
      icons: [Icons.NuxtJsIcon, Icons.TailwindCssIcon],
      tech: [
        "NuxtJs",
        "DaisyUI",
        "TailwindCSS",
        "NuxtJs",
        "Git",
        "HTML",
        "JavaScript",
      ],
      github: "https://github.com/JesusRafaelNavaCruz/portafolio",
      live: "https://jesusrafaelnavacruz.vercel.app/",
    },
    {
      title: "API de Gestión de Inventario",
      description: "API RESTful robusta, construida con NestJS y MongoDB, diseñada para la gestión completa de activos, insumos y licencias. Incluye funcionalidades avanzadas para la creación de reportes detallados, lo que facilita el control y la auditoría de inventarios.",
      image: "/assets/api_bg.png",
      icons: [Icons.NestJsIcon, Icons.MongoDbIcon],
      tech: ["TypeScript", "Mongo DB", "NestJs", "SwaggerUI", "JWT"],
      github:
        "https://github.com/JesusRafaelNavaCruz/inventory-management-backend",
    },
    {
      title: "Slider Nativo UIverse",
      description:
        "Componente de UI interactivo, desarrollado en HTML y CSS, que simula un slider de imágenes sin necesidad de JavaScript. Este proyecto demuestra la capacidad de crear efectos complejos y dinámicos utilizando exclusivamente las capacidades nativas de CSS.",
      image: "/assets/uiverse_bg.png",
      icons: [Icons.HtmlIcon, Icons.CssIcon],
      tech: ["HTML", "CSS"],
      live: "https://uiverse.io/JesusRafaelNavaCruz/soft-cat-28",
    },
    {
      title: "Loaders con Animaciones",
      description:
        "Colección de componentes de carga creados para UIverse.io, utilizando únicamente HTML y CSS con animaciones keyframes. Estos loaders ofrecen una solución simple y elegante para pantallas de espera, demostrando un uso avanzado de CSS para animaciones visualmente fluidas.",
      image: "/assets/uiverse_bg.png",
      icons: [Icons.HtmlIcon, Icons.CssIcon],
      tech: ["HTML", "CSS"],
      live: "https://uiverse.io/JesusRafaelNavaCruz/chilly-vampirebat-53",
    },
    {
      title: "Loaders con Animaciones",
      description:
        "Colección de componentes de carga creados para UIverse.io, utilizando únicamente HTML y CSS con animaciones keyframes. Estos loaders ofrecen una solución simple y elegante para pantallas de espera, demostrando un uso avanzado de CSS para animaciones visualmente fluidas.",
      image: "/assets/uiverse_bg.png",
      icons: [Icons.HtmlIcon, Icons.CssIcon],
      tech: ["HTML", "CSS"],
      live: "https://uiverse.io/JesusRafaelNavaCruz/pretty-yak-93",
    },
    {
      title: "Retos de Botones con TailwindCSS",
      description:
        "Participación en el reto de UIverse.io, desarrollando botones con efectos visuales avanzados utilizando HTML y TailwindCSS, sin recurrir a JavaScript. Estos proyectos demuestran la versatilidad de Tailwind para crear interfaces interactivas y estéticas de manera eficiente.",
      image: "/assets/uiverse_bg.png",
      icons: [Icons.HtmlIcon, Icons.TailwindCssIcon],
      tech: ["HTML", "CSS", "TailwindCss"],
      live: "https://uiverse.io/JesusRafaelNavaCruz/modern-robin-64",
    },
    {
      title: "Retos de Botones con TailwindCSS",
      description:
        "Participación en el reto de UIverse.io, desarrollando botones con efectos visuales avanzados utilizando HTML y TailwindCSS, sin recurrir a JavaScript. Estos proyectos demuestran la versatilidad de Tailwind para crear interfaces interactivas y estéticas de manera eficiente.",
      image: "/assets/uiverse_bg.png",
      icons: [Icons.HtmlIcon, Icons.TailwindCssIcon],
      tech: ["React", "Chart.js", "Express", "Redis"],
      live: "https://uiverse.io/JesusRafaelNavaCruz/grumpy-cougar-86",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
              Mi Portafolio
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Una muestra de mi trabajo. Aquí encontrarás una selección de los
            proyectos más relevantes que he creado.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#22D3EE]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#22D3EE]/10 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/assets/500x300.png"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 blur-sm"
                  />
                  <div className="absolute w-full h-full flex items-center justify-center gap-4 top-0">
                    {project.icons?.map((IconComponent, index) => (
                      <IconComponent key={index} width={80} height={80} />
                    ))}
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-60" : "opacity-0"
                    }`}
                  ></div>

                  {/* Project Links */}
                  <div
                    className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                      hoveredProject === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    {project && project.github ? (
                      <a
                        href={project.github}
                        className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-[#22D3EE] transition-colors duration-200"
                        aria-label="View GitHub repository"
                      >
                        <Github size={16} />
                      </a>
                    ) : null}

                    {project && project.live ? (
                      <a
                        href={project.live}
                        className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-[#8B5CF6] transition-colors duration-200"
                        aria-label="View live project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-full font-semibold hover:bg-[#22D3EE] hover:text-[#121212] transition-all duration-300 hover:scale-105">
              Ver todos los proyectos
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
