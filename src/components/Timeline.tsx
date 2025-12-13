import { events } from '@/lib/events';
import { EventCard } from './EventCard';

export function Timeline() {
  return (
    <div className="py-24" id="timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Event Timeline
        </h2>
        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-0.5 bg-accent/20 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative pl-12 before:absolute before:left-4 before:top-2 before:h-5 before:w-5 before:rounded-full before:bg-background before:border-2 before:border-primary md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:pl-0 before:md:left-1/2 before:md:-translate-x-1/2 before:md:top-1/2 before:md:-translate-y-1/2"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                    <EventCard event={event} orientation="right" />
                  </>
                ) : (
                  <>
                    <EventCard event={event} orientation="left" />
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
