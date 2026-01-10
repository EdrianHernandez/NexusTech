import React from 'react';
import { SCHEDULE } from '../constants';

const ScheduleTimeline = () => {
  return (
    <section id="schedule" className="py-24 px-4 bg-slate-950 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">EVENT SCHEDULE</h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-lg mx-auto italic">
            "Curated deep dives into the technologies shaping the next decade of engineering."
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary before:via-brand-secondary before:to-transparent">
          {SCHEDULE.map((session, index) => (
            <div key={session.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:border-brand-primary group-hover:text-brand-primary z-10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-brand-primary/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-mono text-sm font-bold text-brand-accent tracking-tighter">
                    {session.startTime} — {session.endTime}
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                    session.track === 'Main Stage' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'
                  }`}>
                    {session.track}
                  </span>
                </div>
                <div className="text-xl font-bold text-white mb-2 leading-tight">
                  {session.title}
                </div>
                <div className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {session.description}
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/50">
                  <img src={session.speaker.avatar} alt={session.speaker.name} className="w-10 h-10 rounded-full object-cover border-2 border-slate-800" />
                  <div>
                    <div className="text-sm font-bold text-white leading-none mb-1">{session.speaker.name}</div>
                    <div className="text-xs text-slate-500 font-medium">
                      {session.speaker.role}, <span className="text-slate-400">{session.speaker.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-brand-primary font-bold hover:underline transition-all">
            Download Full PDF Schedule (v1.0.4)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
