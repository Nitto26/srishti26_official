import { SrishtiFestLogo } from './SrishtiFestLogo';
import { ChevronDown } from 'lucide-react';

type IntroProps = {
  opacity: number;
  transform: number;
};

export function Intro({ opacity, transform }: IntroProps) {
  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-background transition-opacity duration-1000 animate-in fade-in"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <div 
        className="flex flex-col items-center gap-4 will-change-transform"
        style={{ transform: `translateY(${transform}px)` }}
      >
        <SrishtiFestLogo className="w-64 h-64 md:w-96 md:h-96" />
        <h1 className="text-2xl md:text-4xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          SRISHTI 2.6
        </h1>
      </div>
      <div className="absolute bottom-8 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>
    </div>
  );
}
