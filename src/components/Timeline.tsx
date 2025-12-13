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
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-accent/20"
            aria-hidden="true"
          />
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative grid grid-cols-2 gap-x-8 md:gap-x-12 items-center"
              >
                <div
                  className={`pr-4 md:pr-8 ${
                    index % 2 === 0 ? 'order-2 pl-4 md:pl-8 md:pr-0' : ''
                  }`}
                >
                  <EventCard
                    event={event}
                    orientation={index % 2 === 0 ? 'right' : 'left'}
                  />
                </div>

                <div className={` ${ index % 2 === 0 ? 'order-1' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
