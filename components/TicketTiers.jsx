import React from 'react';
import { TICKETS } from '../constants';

const TicketTiers = () => {
  return (
    <section id="tickets" className="py-24 px-4 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">GET YOUR PASS</h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose the tier that best fits your learning goals. Early bird pricing ends September 1st.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TICKETS.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                tier.isPopular 
                ? 'bg-slate-800 ring-4 ring-brand-primary shadow-[0_20px_50px_rgba(59,130,246,0.2)] scale-105 z-10' 
                : 'glass-card hover:bg-slate-800/80'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-black text-white tracking-tighter">${tier.price}</span>
                <span className="text-slate-500 font-bold ml-2">USD</span>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                disabled={tier.status === 'sold_out'}
                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                  tier.status === 'sold_out'
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : tier.isPopular
                    ? 'bg-brand-primary hover:bg-blue-600 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {tier.status === 'sold_out' ? 'Sold Out' : `Select ${tier.name}`}
              </button>
              
              {tier.status === 'limited' && (
                <p className="text-center text-xs font-bold text-orange-500 mt-4 uppercase tracking-tighter animate-pulse">
                  Only 14 tickets remaining!
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm max-w-xl mx-auto">
          Need a group discount for 10+ attendees? <br />
          Contact <a href="mailto:corporate@nexustech.io" className="text-brand-primary hover:underline font-bold">corporate@nexustech.io</a> for custom packages.
        </div>
      </div>
    </section>
  );
};

export default TicketTiers;
