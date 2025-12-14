'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Event } from '@/lib/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

type EventCardProps = {
  event: Event;
  orientation: 'left' | 'right';
};

export function EventCard({ event, orientation }: EventCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const desktopCardRef = useRef<HTMLDivElement>(null);
  const mobileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktopObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          desktopObserver.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      }
    );

    const mobileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          mobileObserver.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      }
    );

    if (desktopCardRef.current) {
      desktopObserver.observe(desktopCardRef.current);
    }
    if (mobileCardRef.current) {
      mobileObserver.observe(mobileCardRef.current);
    }

    return () => {
      if (desktopCardRef.current) {
        desktopObserver.unobserve(desktopCardRef.current);
      }
      if (mobileCardRef.current) {
        mobileObserver.unobserve(mobileCardRef.current);
      }
    };
  }, []);

  const animationClass = isVisible
    ? orientation === 'left'
      ? 'opacity-100 translate-x-0'
      : 'opacity-100 translate-x-0'
    : orientation === 'left'
      ? 'opacity-0 -translate-x-12'
      : 'opacity-0 translate-x-12';
  
  const mobileAnimationClass = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';

  return (
    <>
      <div 
        ref={desktopCardRef} 
        className={`transition-all duration-700 ease-out md:transform ${animationClass} md:block hidden`}
      >
        <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-accent transition-colors duration-300 shadow-lg shadow-primary/10">
          <div className="relative h-32 w-full">
            <Image
              src={event.image.url}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={event.image.hint}
            />
          </div>
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="font-headline text-lg sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-3 pt-0 sm:p-6 sm:pt-0">
            <p className="text-xs sm:text-sm text-foreground/80">{event.description}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-accent">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div 
        ref={mobileCardRef} 
        className={`transition-all duration-700 ease-out transform md:hidden ${mobileAnimationClass}`}
      >
         <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-accent transition-colors duration-300 shadow-lg shadow-primary/10">
          <div className="relative h-32 w-full">
            <Image
              src={event.image.url}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={event.image.hint}
            />
          </div>
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="font-headline text-lg sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-3 pt-0 sm:p-6 sm:pt-0">
            <p className="text-xs sm:text-sm text-foreground/80">{event.description}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-accent">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
