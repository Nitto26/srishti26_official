"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Instagram } from "lucide-react";

export default function Home() {
  const [introOpacity, setIntroOpacity] = useState(1);
  const [showHeader, setShowHeader] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutDistance = window.innerHeight * 0.75;
      
      const opacity = Math.max(0, 1 - scrollY / fadeOutDistance);
      setIntroOpacity(opacity);

      setShowHeader(scrollY > fadeOutDistance);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <main>
      <Intro opacity={introOpacity} />
      <Header show={showHeader} />
      <div className="relative z-10">
        <div style={{ height: '100vh' }} aria-hidden="true"></div>
        <Timeline />
        <Contact />
      </div>
       <footer className="text-center p-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-foreground/50 hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span>Srishti 2.6</span>
          </a>
       </footer>
    </main>
  );
}
