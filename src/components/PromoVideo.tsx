import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export function PromoVideo() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden flex flex-col items-center justify-center text-center curved-bottom bg-background">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/dj.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white p-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-headline text-white animate-in fade-in slide-in-from-bottom-12 duration-1000">
          DJ Concert
        </h2>
        <Button asChild size="lg" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
          borderColor: 'hsl(var(--accent))'
        }}
        className="border hover:scale-105 transition-transform animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300"
        >
          <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
            Get Free Ticket
          </a>
        </Button>
      </div>
      <div className="absolute bottom-4 left-4 z-10 text-white flex items-center gap-2 text-lg font-bold bg-black/30 p-2 rounded-md">
        <Calendar className="w-5 h-5" />
        <span>20 Jan 2026</span>
      </div>
      <div className="absolute top-4 right-4 z-10 text-white flex items-center gap-2 text-lg font-bold bg-black/30 p-2 rounded-md">
        <Clock className="w-5 h-5" />
        <span>2 PM</span>
      </div>
    </section>
  );
}
