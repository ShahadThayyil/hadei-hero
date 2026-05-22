import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

export default function HadeiHero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[100dvh] w-full bg-[#F5F216] text-black font-sans overflow-hidden flex items-center justify-center selection:bg-black selection:text-[#F5F216]">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:5vw_5vw] md:bg-[size:3vw_3vw] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white opacity-40 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* ── 4-CORNER PINNED UI (The Frame) ── */}
      
      {/* 1. Top Left - Logo */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <div className="flex items-center cursor-pointer group">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-black transition-transform duration-300 group-hover:scale-105">
            hade<span className="inline-block transform rotate-180 origin-center text-[0.8em]">e</span>i.
          </span>
        </div>
      </div>

      {/* ── Top Center - Coming Soon Badge ── */}
      {/* Mobile: Plain text (no bg/border, black text). Desktop: Black card with yellow text */}
      <div className="absolute top-20 md:top-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 md:gap-2.5 border-0  border-black bg-transparent  px-0 md:px-6 py-0 md:py-2 md:rounded-full shadow-none  hover:scale-105 transition-transform duration-300 cursor-default">
        {/* <div className="h-1.5 w-1.5 md:h-2 w-2 rounded-full bg-black md:bg-[#F5F216] animate-pulse"></div> */}
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-black  mt-[1px]">
          Coming Soon...
        </span>
      </div>

      {/* 2. Top Right - CTA */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        {/* Added onClick navigate for React Router */}
        <button 
          onClick={() => navigate('/apply')}
          className="group relative overflow-hidden rounded-full border-2 border-black bg-transparent px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-[#F5F216]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get In Touch
            <LiaLongArrowAltRightSolid className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* 3. Bottom Left - Telemetry / Copyright */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-50 hidden md:flex flex-col gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">
        <span>EST. 2026 // SYST_01</span>
        <span>All Rights Reserved</span>
        <span className="text-black">© Hadei Workspace</span>
      </div>

      {/* 4. Bottom Right - Social */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#F5F216] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          aria-label="Instagram"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
      </div>

      {/* ── CENTER PIECE (The Core) ── */}
      <main className="relative z-10 flex w-full flex-col items-center justify-center text-center px-4 mt-12 md:mt-0 mb-16 md:mb-16">
        
        {/* Massive Sloped Typography Stack */}
        {/* Removed px-8 and adjusted max-width to prevent horizontal scroll bars */}
        <h1 className="relative flex flex-col items-center justify-center font-black uppercase tracking-tighter w-full max-w-[100vw] transform -rotate-[6deg] md:-rotate-[8deg] transition-transform duration-700 hover:-rotate-[4deg] cursor-default">
          
          <span className="text-[3.5vw] md:text-[2vw] font-medium tracking-[0.5em] text-black/80 mb-2 md:mb-[-1vw] z-10 md:whitespace-nowrap">
            Tired of chasing
          </span>
          
          {/* Layer 1: Solid Black (Fixed padding by removing whitespace-nowrap on mobile and lowering vw) */}
          <span className="text-[13.5vw] md:text-[13vw] leading-[0.85] md:leading-[0.8] text-black z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 md:whitespace-nowrap break-words">
            UNTRUSTED
          </span>
          
          {/* Layer 2: Outlined Hollow Text (Fixed padding by removing whitespace-nowrap on mobile and lowering vw) */}
          <span className="text-[13.5vw] md:text-[13vw] leading-[0.85] md:leading-[0.8] text-transparent z-10 hover:scale-[1.02] transition-transform duration-500 md:whitespace-nowrap break-words" style={{ WebkitTextStroke: '2px black' }}>
            CLIENTS?
          </span>
          
        </h1>

      </main>

      {/* ── Bottom Centered CTA Badge ── */}
      <div className="absolute bottom-16 md:bottom-16 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
        <button 
          onClick={() => navigate('/apply')}
          className="group flex items-center p-1.5 md:p-2 bg-white/30 backdrop-blur-md border border-black/20 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:bg-black hover:scale-105 hover:border-black"
        >
          <div className="flex items-center gap-4 px-5 md:px-7">
            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-black group-hover:text-white transition-colors duration-300">
              Enter Hadei
            </span>
          </div>
          
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black text-[#F5F216] transition-all duration-500 group-hover:bg-[#F5F216] group-hover:text-black shadow-inner">
            <LiaLongArrowAltRightSolid className="h-5 w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-500" />
          </div>
        </button>
      </div>

      {/* Mobile-only Bottom copyright */}
      <div className="absolute bottom-6 left-6 z-50 md:hidden flex text-[9px] font-bold uppercase tracking-[0.2em] text-black/60">
        © 2026 Hadei.
      </div>

    </div>
  );
}