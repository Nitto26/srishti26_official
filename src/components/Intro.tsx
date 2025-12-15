
'use client';

import { SrishtiFestLogo } from './SrishtiFestLogo';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

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
        src="/dj.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/30" />

      <div 
        className="relative z-10 flex flex-col items-center gap-2 will-change-transform transition-opacity duration-1000"
        style={{ 
          transform: `translateY(${transform}px)`,
          opacity: showVideo ? 0 : 1, // Fade out logo when video appears
        }}
      >
        <SrishtiFestLogo className="w-64 h-64 md:w-96 md:h-96" />
        <h1 className="text-2xl md:text-4xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          SRISHTI 2.6
        </h1>
      </div>
      <div className="absolute bottom-8 animate-bounce z-10" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>
    </div>
  );
}
