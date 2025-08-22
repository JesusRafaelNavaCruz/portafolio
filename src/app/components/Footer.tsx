"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-gray-800 rounded-full border border-gray-700 text-gray-400 hover:text-[#22D3EE] hover:border-[#22D3EE] hover:shadow-lg hover:shadow-[#22D3EE]/25 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Jesus Nava. Todos los derechos reservados.</p>
            <p className="text-gray-500 text-xs mt-2">Creado con NextJS, TailwindCSS y ❤️</p>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"></div>
        </div>
      </div>
    </footer>
  )
}
