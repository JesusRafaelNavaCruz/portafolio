'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";

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
      </main>
    </div>
  );
}
