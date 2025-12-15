"use client";

import { useState, useEffect } from 'react';

type CountdownProps = {
  targetDate: string;
};

type TimeUnit = "Days" | "Hours" | "Minutes" | "Seconds";

const TimeCard = ({ value, unit }: { value: number; unit: TimeUnit }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl md:text-5xl font-bold font-headline text-white tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-widest">
      {unit}
    </div>
  </div>
);

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft as { days: number; hours: number; minutes: number; seconds: number };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-primary/20 shadow-lg">
      <div className="flex items-center justify-center gap-4 md:gap-8">
        {timeLeft.days > 0 ? (
          <div className="flex flex-col items-center">
            <div className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-widest mb-1">
              Countdown
            </div>
            <TimeCard value={timeLeft.days} unit="Days" />
          </div>
        ) : (
          <>
            <TimeCard value={timeLeft.hours} unit="Hours" />
            <span className="text-3xl md:text-4xl font-bold text-accent -translate-y-2">:</span>
            <TimeCard value={timeLeft.minutes} unit="Minutes" />
            <span className="text-3xl md:text-4xl font-bold text-accent -translate-y-2">:</span>
            <TimeCard value={timeLeft.seconds} unit="Seconds" />
          </>
        )}
      </div>
    </div>
  );
}
