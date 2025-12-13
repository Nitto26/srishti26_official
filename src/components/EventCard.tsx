'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Event } from '@/lib/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type EventCardProps = {
  event: Event;
  orientation: 'left' | 'right';
};

export function EventCard({ event, orientation }: EventCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // isMobile can be undefined on first render, so we check for it
    if (isMobile === undefined) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: isMobile ? '-50px' : '-150px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isMobile]);

  let animationClass = 'opacity-0';
  if (isVisible) {
    if (isMobile) {
      animationClass = 'animate-in slide-in-from-left-8 fade-in duration-700 fill-mode-forwards';
    } else {
      animationClass = orientation === 'left' 
        ? 'animate-in slide-in-from-left-12 fade-in duration-700 fill-mode-forwards'
        : 'animate-in slide-in-from-right-12 fade-in duration-700 fill-mode-forwards';
    }
  }

  return (
    <div ref={cardRef} className={`ml-8 md:ml-0 ${animationClass}`}>
       <div className="absolute -left-4 top-2 h-5 w-5 rounded-full bg-background border-2 border-primary md:hidden" />
      <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-accent transition-colors duration-300 shadow-lg shadow-primary/10">
        <div className="relative h-48 w-full">
          <Image
            src={event.image.url}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            data-ai-hint={event.image.hint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <p className="text-foreground/80">{event.description}</p>
          <div className="flex items-center gap-4 text-sm text-accent">
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
  );
}
