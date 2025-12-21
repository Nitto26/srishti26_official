'use client';

import { Info, Play } from 'lucide-react';
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
      className="fixed inset-0 z-10 bg-background transition-opacity duration-1000"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <div className="hero-section-base">
        <video
          className="hero-video-background"
          src="/hero.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="video-content-container">
          <video
            className="hero-video-frame"
            src="/hero.webm"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="content-overlay">
            <SrishtiFestLogo className="w-1/3 mb-4" />
            <p className="text-sm text-white/80 max-w-lg leading-relaxed shadow-black/50 [text-shadow:0_1px_4px_var(--tw-shadow-color)]">
              Srishti 2.6 is the annual techno-cultural festival, a vibrant celebration of creativity, innovation, and talent. Join us for an unforgettable experience.
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
        </div>

        <div className="absolute bottom-8 right-8 z-10">
          <Countdown targetDate={eventDate} />
        </div>
        
      </div>
    </div>
  );
}
