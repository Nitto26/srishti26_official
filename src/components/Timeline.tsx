'use client';

import { events } from '@/lib/events';
import { EventCard } from './EventCard';
import { useEffect, useRef, useState } from 'react';

export function Timeline() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [trackerY, setTrackerY] = useState(-100);

  useEffect(() => {
    eventRefs.current = eventRefs.current.slice(0, events.length);

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { rootMargin: '0px 0px -150px 0px' }
    );
    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    
    return () => headerObserver.disconnect();

  }, []);

  useEffect(() => {
    if (!headerVisible) return;

    const handleScroll = () => {
      const timelineRect = timelineRef.current?.getBoundingClientRect();
      if (!timelineRect) return;
    
      const viewportCenter = window.innerHeight / 2;
      let closestEventIndex = -1;
      let minDistance = Infinity;
    
      // Find the event card closest to the center of the viewport
      eventRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
    
        if (distance < minDistance) {
          minDistance = distance;
          closestEventIndex = index;
        }
      });
    
      // Once the last event is active, keep it active as we scroll past.
      // This prevents the tracker from moving up again.
      setActiveEvent(prevActiveEvent => {
        if (closestEventIndex === events.length - 1) {
            return events.length - 1;
        }
        if (prevActiveEvent === events.length - 1 && closestEventIndex < events.length -1) {
             const lastEventRef = eventRefs.current[events.length - 1];
             if(lastEventRef) {
                const lastEventRect = lastEventRef.getBoundingClientRect();
                // if last event is still in view (from top), keep it active
                if(lastEventRect.top > 0) {
                    return closestEventIndex;
                }
             }
             return prevActiveEvent;
        }
        
        return closestEventIndex !== -1 ? closestEventIndex : prevActiveEvent;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerVisible]);

  useEffect(() => {
    if (activeEvent === null || !timelineRef.current) return;
    
    const activeRef = eventRefs.current[activeEvent];
    const timelineRect = timelineRef.current.getBoundingClientRect();
    
    if (activeRef) {
       const eventCardRect = activeRef.getBoundingClientRect();
       // Position the tracker exactly in the middle of the active event card
       const newTrackerY = (eventCardRect.top - timelineRect.top) + (eventCardRect.height / 2);
       setTrackerY(newTrackerY);
    }
  }, [activeEvent]);

  return (
    <div className="py-24" id="timeline" ref={timelineRef}>
      <div className="container mx-auto px-4">
        <h2
          ref={headerRef}
          className={`text-4xl md:text-5xl font-bold text-center mb-20 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Event Timeline
        </h2>
        {headerVisible && (
          <div className="relative">
             <div
              className="absolute left-4 md:left-1/2 top-0 w-0.5 md:-translate-x-1/2 bg-accent/20 transition-all duration-300 ease-out"
              aria-hidden="true"
              style={{ height: `${trackerY}px` }}
            />

            <div 
              className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background transition-all duration-300 ease-out will-change-transform -translate-x-1/2 -translate-y-1/2" 
              style={{ top: `${trackerY}px` }}
              />

            <div className="space-y-8">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  ref={el => eventRefs.current[index] = el}
                  className="relative md:grid md:grid-cols-2 md:gap-x-12 items-center"
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'
                    }`}
                  >
                    <EventCard
                      event={event}
                      orientation={index % 2 === 0 ? 'right' : 'left'}
                      isActive={activeEvent === index}
                    />
                  </div>
                  <div className={`absolute top-1/2 h-5 w-5 rounded-full bg-background border-2 border-primary -translate-x-1/2 left-4 md:left-1/2 -translate-y-1/2`} />
                  <div className={`${ index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
