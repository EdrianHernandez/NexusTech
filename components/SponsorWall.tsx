
import React from 'react';
import { SPONSORS } from '../constants';

const SponsorWall: React.FC = () => {
  const platinum = SPONSORS.filter(s => s.tier === 'Platinum');
  const gold = SPONSORS.filter(s => s.tier === 'Gold');
  const silver = SPONSORS.filter(s => s.tier === 'Silver');

  const LogoGrid: React.FC<{ list: typeof SPONSORS; title: string; sizeClass: string }> = ({ list, title, sizeClass }) => (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        <h3 className="px-6 text-xs font-black uppercase tracking-[0.4em] text-slate-500 whitespace-nowrap">{title}</h3>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
        {list.map((sponsor) => (
          <div 
            key={sponsor.id} 
            className={`${sizeClass} glass-card w-full rounded-2xl flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-brand-primary/40 transition-all duration-500 cursor-pointer group`}
          >
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="max-h-full max-w-[80%] object-contain group-hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="sponsors" className="py-24 px-4 bg-slate-950 border-t border-slate-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-[0.2em] text-white">POWERED BY INDUSTRY LEADERS</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Supporting the ecosystem that powers modern engineering.
          </p>
        </div>

        <LogoGrid list={platinum} title="Platinum Partners" sizeClass="h-40 md:h-48" />
        <LogoGrid list={gold} title="Gold Sponsors" sizeClass="h-28 md:h-32" />
        <LogoGrid list={silver} title="Silver Sponsors" sizeClass="h-20 md:h-24" />

        <div className="mt-20 glass-card p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Want to sponsor NexusTech?</h4>
            <p className="text-slate-400">Join our growing list of partners and showcase your product to 5,000+ developers.</p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-slate-950 font-black rounded-xl hover:bg-brand-primary hover:text-white transition-colors uppercase tracking-widest text-xs">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorWall;
