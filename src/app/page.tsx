'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  },[])

  return (
    <div className={`min-h-screen bg-[#121212] text-[#e0e0e0] transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
