
import React from 'react';

const Footer: React.FC = () => {
  const footerNav = [
    { name: 'Home', href: '#' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue', href: '#' },
  ];

  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-black italic text-white">N</div>
              <span className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-brand-primary">TECH</span></span>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed mb-8">
              The premier global gathering for technical leaders, software engineers, and digital innovators. 
              Bridging the gap between theory and practical engineering excellence since 2018.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'YouTube', 'Discord'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-4">
              {footerNav.map(item => (
                <li key={item.name}><a href={item.href} className="text-slate-500 hover:text-brand-primary transition-colors text-sm font-medium">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4">
              {['Code of Conduct', 'Privacy Policy', 'Terms of Service', 'Press Kit', 'Volunteer', 'FAQ'].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand-primary transition-colors text-sm font-medium">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <p>© 2025 NEXUS TECHNOLOGY SUMMIT. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-slate-400 transition-colors">ACCESSIBILITY</a>
            <a href="#" className="hover:text-slate-400 transition-colors">SECURITY</a>
            <a href="#" className="hover:text-slate-400 transition-colors">COOKIE SETTINGS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
