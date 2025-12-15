'use client';

import { SrishtiFestLogo } from './SrishtiFestLogo';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

type IntroProps = {
  opacity: number;
  transform: number;
};

export function Intro({ opacity, transform }: IntroProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 2000); // Video appears after 2 seconds

    return () => {
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-background transition-opacity duration-1000"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${showVideo ? 'opacity-50' : 'opacity-0'}`}
        src="/hero.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/30" />

      <div 
        className="relative z-10 flex flex-col items-start gap-4 will-change-transform transition-opacity duration-1000 w-full max-w-6xl px-8 md:px-16"
        style={{ 
          transform: `translateY(${transform}px)`,
          opacity: showVideo ? 1 : 0,
        }}
      >
        <SrishtiFestLogo className="w-48 h-48 md:w-64 md:h-64" />
        <Button asChild size="lg" style={{
            backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
            borderColor: 'hsl(var(--accent))'
          }}
          className="border hover:scale-105 transition-transform"
          >
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
      </div>
      <div className="absolute bottom-8 animate-bounce z-10" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>
    </div>
  );
}
