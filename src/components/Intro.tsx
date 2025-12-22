'use client';

import { Info, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Countdown } from './Countdown';
import { SrishtiFestLogo } from './SrishtiFestLogo';

type IntroProps = {
  opacity: number;
  scale: number;
  blur: number;
};

export function Intro({ opacity, scale, blur }: IntroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1000); 

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(videoTimer);
    };
  }, []);

  const eventDate = "2026-01-20T00:00:00";

  return (
    <div
      className="fixed inset-0 z-10 bg-background transition-opacity duration-300"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <div className="hero-section-base" style={{ transform: `scale(${scale})` }}>
        <video
          className="hero-video-background"
          src="/s-v.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: `blur(${blur}px)` }}
        />
        
        {!isMobile && (
           <div className="video-content-container">
            <video
              className="hero-video-frame"
              src="/s-v.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}

        <div className="content-overlay">
          <div className="main-content">
            <SrishtiFestLogo className="w-full md:w-2/3 lg:w-1/2 h-40 md:h-56 mb-4" />
            <div className="flex items-center gap-4 mt-6">
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
          <div className="countdown-container">
            <Countdown targetDate={eventDate} />
          </div>
        </div>
      </div>
    </div>
  );
}
