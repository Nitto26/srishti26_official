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
  const [introScale, setIntroScale] = useState(1);
  const [introBlur, setIntroBlur] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutDistance = window.innerHeight * 0.8;
      
      const opacity = Math.max(0, 1 - scrollY / fadeOutDistance);
      setIntroOpacity(opacity);

      const scale = Math.max(0.8, 1 - scrollY / (fadeOutDistance * 2));
      setIntroScale(scale);

      const blur = Math.min(8, scrollY / 100);
      setIntroBlur(blur);
      
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
      <Intro opacity={introOpacity} scale={introScale} blur={introBlur} />
      <Header show={showHeader} />
      <div className="relative z-20">
        <div style={{ height: '100vh' }} aria-hidden="true"></div>
        <div className="bg-[#000814]">
        </div>
        <Timeline />
        <Sponsors />
        <PhotoGallery />
        <ImageGallery />
        <PromoVideo />
        <About />
        <Contact />
      </div>
       <footer className="text-center p-8 relative z-20">
          <a href="https://www.instagram.com/srishti__2.6/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-foreground/50 hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span>Srishti 2.6</span>
          </a>
       </footer>
    </main>
  );
}
