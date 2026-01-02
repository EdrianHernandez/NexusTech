
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Schedule', href: '#schedule' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4`}
    >
      <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled ? 'glass-card py-3 px-6 shadow-2xl translate-y-2 border-slate-700/50' : 'bg-transparent py-5 px-4'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-black italic text-white">N</div>
            <span className="text-xl font-black tracking-tighter text-white">NEXUS<span className="text-brand-primary">TECH</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-800 mx-4"></div>
            <a href="#tickets" className="px-6 py-2.5 bg-brand-primary hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all active:scale-95">
              Register
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800 space-y-4 pb-4 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-lg font-bold text-slate-300 hover:text-brand-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#tickets" className="block w-full py-4 bg-brand-primary text-center text-white font-bold rounded-xl">
              Buy Tickets
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
