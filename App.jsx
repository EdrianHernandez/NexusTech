import React from 'react';
import Header from './components/Header';
import EventHero from './components/EventHero';
import ScheduleTimeline from './components/ScheduleTimeline';
import TicketTiers from './components/TicketTiers';
import SponsorWall from './components/SponsorWall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <Header />
      
      <main>
        <EventHero />
        
        {/* Statistics Bar */}
        <section className="bg-slate-950 py-12 border-y border-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'ATTENDEES', value: '5,000+' },
              { label: 'SESSIONS', value: '45+' },
              { label: 'SPEAKERS', value: '30+' },
              { label: 'COUNTRIES', value: '12' }
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-5xl font-black text-white group-hover:text-brand-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-500 tracking-[0.3em] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ScheduleTimeline />
        <TicketTiers />
        <SponsorWall />

        {/* Call to Action Banner */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">READY TO BUILD THE NEXT BIG THING?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Don't miss the largest tech gathering of the year. Secure your spot before prices increase.
            </p>
            <a href="#tickets" className="inline-block px-12 py-5 bg-white text-slate-950 text-lg font-black rounded-2xl hover:bg-brand-primary hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
              GET YOUR PASS NOW
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
