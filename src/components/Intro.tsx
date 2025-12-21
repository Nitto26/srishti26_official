'use client';

import { ChevronDown, Info, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Countdown } from './Countdown';
import { SrishtiFestLogo } from './SrishtiFestLogo';

type IntroProps = {
  opacity: number;
};

export function Intro({ opacity }: IntroProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1000); // Video appears after 1 second

    return () => {
      clearTimeout(videoTimer);
    };
  }, []);

  const eventDate = "2026-01-20T00:00:00";

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-background transition-opacity duration-1000"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <div className="hero-section-base">
        <video
          className={`hero-video-frame transition-opacity duration-1000 ${showVideo ? 'opacity-40' : 'opacity-0'}`}
          src="/hero.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

        <div 
          className="relative z-10 flex flex-col items-start gap-4 md:gap-6 will-change-transform transition-opacity duration-1000 w-full max-w-6xl px-8 md:px-16 mb-20"
          style={{ 
            opacity: showVideo ? 1 : 0,
          }}
        >
          <SrishtiFestLogo className="w-full md:w-2/3 lg:w-1/2" />
          <p className="text-base md:text-lg text-white/90 max-w-lg leading-relaxed shadow-black/50 [text-shadow:0_2px_8px_var(--tw-shadow-color)]">
            Srishti 2.6 is the annual techno-cultural festival, a vibrant celebration of creativity, innovation, and talent. Join us for an unforgettable experience filled with learning, competition, and entertainment.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-bold">
              <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" />
                Register Now
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
               <a href="#about">
                <Info className="mr-2 h-5 w-5" />
                Learn More
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10">
          <Countdown targetDate={eventDate} />
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
          <ChevronDown className="w-8 h-8 text-foreground/50" />
        </div>
      </div>
    </div>
  );
}
