'use client';

import { events } from '@/lib/events';
import { useEffect } from 'react';
import Image from 'next/image';

export function Timeline() {
  useEffect(() => {
    const progressLine = document.getElementById('progress-line');
    const items = document.querySelectorAll('.timeline-item');
    const wrapper = document.getElementById('main-timeline');

    if (!progressLine || !wrapper) return;

    function updateTimeline() {
        if (!wrapper) return;
        const wrapperRect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let latestActiveMarkerCenter = 0;

        items.forEach((item) => {
            const marker = item.querySelector('.marker') as HTMLElement;
            if (!marker) return;
            const markerRect = marker.getBoundingClientRect();

            // Active trigger point: 75% from top of screen
            if (markerRect.top < windowHeight * 0.75) {
                item.classList.add('active');
                const relativePos = markerRect.top - wrapperRect.top + (markerRect.height / 2);
                if (relativePos > latestActiveMarkerCenter) latestActiveMarkerCenter = relativePos;
            } else {
                item.classList.remove('active');
            }
        });
        if (progressLine) {
            progressLine.style.height = latestActiveMarkerCenter + 'px';
        }
    }

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    updateTimeline();

    return () => {
        window.removeEventListener('scroll', updateTimeline);
        window.removeEventListener('resize', updateTimeline);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-24" id="timeline">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Event Timeline
        </h2>
        <div className="timeline-wrapper" id="main-timeline">
            <div className="line-track"></div>
            <div id="progress-line" className="line-progress"></div>
            <div className="space-y-24 md:space-y-32">
                {events.map((event, index) => (
                    <div key={event.id} className="timeline-item relative md:grid md:grid-cols-2 items-center">
                        <div className="marker"></div>
                        <div className={`reveal-card pl-12 ${index % 2 === 0 ? 'md:col-start-2 md:pl-16' : 'md:pr-16 md:pl-0'}`}>
                            <div className={`glass-card group hover:border-accent/50 transition-all ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                                <div className="relative h-44 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                                    <Image src={event.image.url} alt={event.title} className="object-cover w-full h-full" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className={`text-slate-400 text-sm leading-relaxed mb-4 ${index % 2 !== 0 ? 'text-left md:text-right' : 'text-left'}`}>{event.description}</p>
                                    <div className={`flex gap-4 text-xs font-mono font-bold tracking-widest uppercase ${index % 2 === 0 ? 'text-accent' : 'text-primary'} ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                        <span>{event.date}</span><span>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
