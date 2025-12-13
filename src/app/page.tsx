"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  const [introOpacity, setIntroOpacity] = useState(1);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutDistance = window.innerHeight * 0.75;
      
      const opacity = Math.max(0, 1 - scrollY / fadeOutDistance);
      setIntroOpacity(opacity);

      setShowHeader(scrollY > fadeOutDistance);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Intro opacity={introOpacity} />
      <Header show={showHeader} />
      <div className="relative z-10">
        <div style={{ height: '100vh' }} aria-hidden="true"></div>
        <Timeline />
      </div>
       <footer className="text-center p-8 text-foreground/50">
          <p>&copy; {new Date().getFullYear()} SrishtiFest. All rights reserved.</p>
       </footer>
    </main>
  );
}
