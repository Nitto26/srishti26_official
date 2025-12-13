import { SrishtiFestLogo } from './SrishtiFestLogo';
import { ChevronDown } from 'lucide-react';

type IntroProps = {
  opacity: number;
};

export function Intro({ opacity }: IntroProps) {
  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity }}
      aria-hidden={opacity < 0.1}
    >
      <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-1000">
        <SrishtiFestLogo className="w-64 h-64 md:w-96 md:h-96" />
        <p className="text-lg md:text-xl text-foreground/80 animate-in fade-in-0 delay-500 duration-1000 fill-mode-both">
          The Annual Cultural & Technical Fest
        </p>
      </div>
      <div className="absolute bottom-8 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-foreground/50" />
      </div>
    </div>
  );
}
