"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a digital artist, featuring smooth animations and an immersive gallery experience.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Framer Motion", "Three.js", "Sanity"],
      github: "#",
      live: "#",
    },
    {
      title: "Learning Platform",
      description:
        "Interactive learning platform with video courses, progress tracking, and community features for developers.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Prisma", "Supabase", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard for SaaS applications with customizable charts and data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Chart.js", "Express", "Redis"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-60" : "opacity-0"
                    }`}
                  ></div>

                  {/* Project Links */}
                  <div
                    className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                      hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                  >
                    <a
                      href={project.github}
                      className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-[#22D3EE] transition-colors duration-200"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-[#8B5CF6] transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

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

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-full font-semibold hover:bg-[#22D3EE] hover:text-[#121212] transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
