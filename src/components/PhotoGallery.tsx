
'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const galleryImages = [
  { id: 'gallery-1', src: 'https://picsum.photos/seed/srishti1/800/600', alt: 'Event photo 1', hint: 'event crowd' },
  { id: 'gallery-2', src: 'https://picsum.photos/seed/srishti2/800/600', alt: 'Event photo 2', hint: 'stage lights' },
  { id: 'gallery-3', src: 'https://picsum.photos/seed/srishti3/800/600', alt: 'Event photo 3', hint: 'people dancing' },
];

export function PhotoGallery() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        const target = document.querySelector('#photo-gallery-container');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

  return (
    <section id="photos" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div id="photo-gallery-container" className="relative h-80 md:h-96">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`photo-card ${isIntersecting ? 'spread' : ''}`}
                style={{ '--index': index } as React.CSSProperties}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 18rem"
                  className="object-cover"
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              Event Photos
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-md mx-auto md:mx-0">
              Relive the best moments from Srishti 2.6. Browse the gallery and download your favorite photos.
            </p>
            <Button asChild size="lg" style={{
              backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
              borderColor: 'hsl(var(--accent))'
            }}
            className="border hover:scale-105 transition-transform"
            >
              <a href="https://drive.google.com/drive/folders/1xqnPYIikYHRfvqEAiUsM3OxEF5RcEdG3?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Get your event photos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
