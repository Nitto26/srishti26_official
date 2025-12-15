"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Instagram } from "lucide-react";
import { PromoVideo } from "@/components/PromoVideo";
import { Sponsors } from "@/components/Sponsors";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  const [introOpacity, setIntroOpacity] = useState(1);
  const [introTransform, setIntroTransform] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutDistance = window.innerHeight * 0.5;
      
      const opacity = Math.max(0, 1 - scrollY / fadeOutDistance);
      setIntroOpacity(opacity);

      const transform = -scrollY * 0.5;
      setIntroTransform(transform);

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
      <Intro opacity={introOpacity} transform={introTransform} />
      <Header show={showHeader} />
      <div className="relative z-20">
        <div style={{ height: '100vh' }} aria-hidden="true"></div>
        <Timeline />
        <PromoVideo />
        <Sponsors />
        <PhotoGallery />
        <ImageGallery />
        <About />
        <Contact />
      </div>
       <footer className="text-center p-8 relative z-20">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-foreground/50 hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span>Srishti 2.6</span>
          </a>
       </footer>
    </main>
  );
}
