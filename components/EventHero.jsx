import React, { useState, useEffect } from 'react';
import { EVENT_DATE } from '../constants';

const EventHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center px-2 md:px-6">
      <span className="text-4xl md:text-6xl font-black font-mono tracking-tighter text-brand-primary">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-slate-500 mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/5 text-brand-primary text-sm font-semibold tracking-wide mb-4">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          OCTOBER 24-26, 2025 • SAN FRANCISCO & ONLINE
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-white">
          CODE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">FUTURE</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join 5,000+ developers, architects, and visionaries for 3 days of deep-tech insights, 
          hands-on workshops, and unparalleled networking.
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-center py-8 glass-card rounded-2xl md:divide-x divide-slate-800/50 max-w-2xl mx-auto w-full">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="#tickets" className="px-8 py-4 bg-brand-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95 w-full sm:w-auto">
            Register Now
          </a>
          <a href="#schedule" className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all hover:bg-white/5 w-full sm:w-auto">
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
