
import React from 'react';
import { LABELS } from './constants';
import StatusCheck from './components/StatusCheck';
import ReportForm from './components/ReportForm';
import PrismaticBackground from './components/PrismaticBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-white/20">
      <PrismaticBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="text-center pt-32 pb-16 px-4">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            SYNCLIFT
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mt-4">
            MAINTENANCE THAT ELEVATES TRUST
          </p>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8 space-y-16 max-w-4xl mx-auto w-full pb-32">
          
          <div className="grid grid-cols-1 gap-12">
            <StatusCheck />
            <ReportForm />
          </div>

          {/* Supported Equipment */}
          <section className="w-full max-w-xl mx-auto p-10 bg-white/[0.02] backdrop-blur-[100px] rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/20 mb-10 text-center">
              {LABELS['supported_eq_title']}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 group">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-out">🛗</div>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block group-hover:text-white/70 transition-colors">{LABELS['eq_type_elevator']}</span>
              </div>
              <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 group">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-out">🪜</div>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block group-hover:text-white/70 transition-colors">{LABELS['eq_type_escalator']}</span>
              </div>
              <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 group">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-out">🚪</div>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block group-hover:text-white/70 transition-colors">{LABELS['eq_type_auto_door']}</span>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center py-16 text-[9px] font-mono uppercase tracking-[0.3em] text-white/10">
          <p>&copy; {new Date().getFullYear()} SyncLift. Direct Database Access.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
