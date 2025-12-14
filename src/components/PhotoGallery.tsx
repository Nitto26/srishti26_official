
import Image from 'next/image';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const galleryImages = [
  { id: 'gallery-1', src: 'https://picsum.photos/seed/gallery1/400/300', alt: 'Event photo 1', hint: 'event crowd', rotation: 'transform -rotate-6' },
  { id: 'gallery-2', src: 'https://picsum.photos/seed/gallery2/400/300', alt: 'Event photo 2', hint: 'stage lights', rotation: 'transform rotate-2' },
  { id: 'gallery-3', src: 'https://picsum.photos/seed/gallery3/400/300', alt: 'Event photo 3', hint: 'people dancing', rotation: 'transform rotate-8' },
];

export function PhotoGallery() {
  return (
    <section id="photos" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 md:h-96">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute w-48 sm:w-64 md:w-72 aspect-[4/3] rounded-lg overflow-hidden border-4 border-card shadow-2xl shadow-primary/20 hover:scale-105 hover:z-10 transition-transform duration-300 ${image.rotation}`}
                style={{
                  top: `${10 + index * 20}%`,
                  left: `calc(50% - ${100 + index * 30}px)`,
                }}
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
              <a href="#" download>
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
