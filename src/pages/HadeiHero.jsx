import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaLongArrowAltRightSolid, LiaHandshakeSolid } from 'react-icons/lia';
import { FiUserCheck, FiShield } from 'react-icons/fi';

export default function HadeiHero() {
  const navigate = useNavigate();

  const qualities = [
    { 
      title: "Guaranteed Payments", 
      icon: <FiShield className="w-4 h-4 md:w-5 md:h-5 text-black mb-1.5 transition-transform duration-300 group-hover:-translate-y-1" /> 
    },
    { 
      title: "Verified Profiles", 
      icon: <LiaHandshakeSolid className="w-5 h-5 md:w-6 md:h-6 text-black mb-1.5 transition-transform duration-300 group-hover:-translate-y-1" /> 
    },
    { 
      title: "Verified Clients", 
      icon: <FiUserCheck className="w-4 h-4 md:w-5 md:h-5 text-black mb-1.5 transition-transform duration-300 group-hover:-translate-y-1" /> 
    }
  ];

  return (
    <div className="relative h-[100dvh] w-full bg-[#0a0d0a] text-white font-meiro overflow-hidden flex flex-col selection:bg-[#F5F216] selection:text-black box-border">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen pointer-events-none fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#F5F216] opacity-10 blur-[120px] rounded-full pointer-events-none z-0 fixed"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#1a2e1a] opacity-30 blur-[150px] rounded-full pointer-events-none z-0 fixed"></div>

      {/* ── FIXED QUALITIES TABS (Left Bottom Anchor) ── */}
      <div className="fixed bottom-0 left-4 md:left-6 lg:left-12 z-50 flex items-end gap-2 lg:gap-3">
        {qualities.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-center bg-[#F5F216] w-[4.5rem] md:w-[5.2rem] lg:w-24 h-[5rem] md:h-[5.5rem] lg:h-[6.5rem] px-2 rounded-t-lg shadow-[0_-5px_15px_rgba(245,242,22,0.15)] group cursor-default transition-all duration-300 hover:h-[5.5rem] md:hover:h-[6rem] lg:hover:h-[7rem]"
          >
            {item.icon}
            <h4 className="text-[8px] md:text-[8.5px] lg:text-[9.5px] font-black text-black uppercase tracking-wider text-center leading-tight">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      {/* ── COMING SOON TAB WITH ANIMATED GLOWING BORDER (Right Bottom Anchor) ── */}
      <div className="fixed bottom-0 right-4 md:right-6 lg:right-12 z-50 flex items-end">
        <div className="relative w-[4.5rem] md:w-[5.2rem] lg:w-24 h-[5rem] md:h-[5.5rem] lg:h-[6.5rem] p-[1.5px] rounded-t-lg overflow-hidden shadow-[0_-5px_20px_rgba(245,242,22,0.25)] cursor-default transition-all duration-300 hover:h-[5.5rem] md:hover:h-[6rem] lg:hover:h-[7rem] group">
          
          {/* Moving Conic Gradients for Border */}
          <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0%,transparent_70%,#F5F216_100%)] z-0"></div>
          <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_270deg,transparent_0%,transparent_70%,#F5F216_100%)] z-0"></div>
          
          {/* Inner Dark Tab */}
          <div className="relative w-full h-full bg-[#0a0d0a] rounded-t-[6px] flex flex-col items-center justify-center z-10 px-1 group-hover:bg-[#0f140f] transition-colors duration-300">
            <span className="text-[8px] md:text-[8.5px] lg:text-[9.5px] font-black uppercase tracking-wider text-[#F5F216] text-center leading-tight drop-shadow-[0_0_8px_rgba(245,242,22,0.6)] group-hover:scale-105 transition-transform duration-300">
              Coming<br />Soon
            </span>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-40 flex items-center justify-between px-5 py-3 md:px-8 lg:px-12 md:py-4 w-full shrink-0">
        
        {/* Image Logo Section */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center justify-center bg-[#F5F216] px-4 md:px-5 py-1 rounded-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:bg-[#fffb29] shadow-[0_0_15px_rgba(245,242,22,0.15)] hover:shadow-[0_0_25px_rgba(245,242,22,0.3)]"
        >
          <img 
            src="https://res.cloudinary.com/dmtzmgbkj/image/upload/v1780479006/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png" 
            alt="Hadei Logo" 
            className="h-5 md:h-8 w-auto object-contain" 
          />
        </div>

        {/* Navigation Action Group */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Contact Button - Hidden on Mobile */}
          <button 
            onClick={() => navigate('/contact')}
            className="hidden md:flex group items-center justify-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 bg-[#F5F216] rounded-md text-[10px] md:text-[11px] font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#fffb29] shadow-md"
          >
            <span className="text-black/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">/</span>
            Contact
            <span className="text-black/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">/</span>
          </button>
          
          {/* Join Hadei Button - Arrow Removed */}
          <button 
            onClick={() => navigate('/apply')}
            className="group flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 rounded-md bg-[#F5F216] transition-all duration-300 hover:bg-[#fffb29] shadow-[0_0_15px_rgba(245,242,22,0.2)] hover:shadow-[0_0_20px_rgba(245,242,22,0.4)]"
          >
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-black transition-colors">
              Join Hadei
            </span>
          </button>
        </div>
      </header>

      {/* ── CENTER PIECE (The Core) ── */}
      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 min-h-0">
        
        <div className="flex flex-col items-center w-full max-w-5xl gap-3 md:gap-5 min-h-0">
          
          {/* Typography - Added mb-6 on mobile to push the card down slightly */}
          <div className="flex flex-col items-center text-center shrink-0 mb-6 md:mb-0">
            <h1 className="text-[clamp(3rem,8vw,4rem)] md:text-[clamp(3.5rem,6.5vw,5.5rem)] leading-[0.85] font-black uppercase tracking-tighter text-[#F5F216] drop-shadow-[0_0_40px_rgba(245,242,22,0.2)]">
              UNTRUSTED
              <br />
              CLIENTS?
            </h1>
            <p className="mt-1.5 md:mt-3 text-xs sm:text-sm md:text-base font-medium tracking-wide text-white/80 max-w-[90%] md:max-w-2xl leading-snug">
              Tired of chasing. Hadei is a secure workspace platform with unrivaled client management.
            </p>
          </div>

          {/* 3D Problem/Solution Card with Animated Border */}
          <div className="relative w-full max-w-[92vw] sm:max-w-md lg:max-w-lg perspective-[1200px] group cursor-default shrink-0">
            
            {/* 3D Transform Wrapper & Animated Border Container */}
            <div className="relative w-full rounded-3xl p-[1.5px] md:p-[2px] transition-transform duration-700 ease-out transform rotate-x-6 md:rotate-x-12 -rotate-y-6 md:-rotate-y-12 rotate-z-2 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0 shadow-[0_20px_50px_-15px_rgba(245,242,22,0.25)] overflow-hidden">
              
              {/* Moving Conic Gradients */}
              <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_0%,transparent_70%,#F5F216_100%)] z-0"></div>
              <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_270deg,transparent_0%,transparent_70%,#F5F216_100%)] z-0"></div>
              
              {/* Inner Card Content */}
              <div className="w-full h-full rounded-[22px] md:rounded-[22px] bg-[#080a08]/95 overflow-hidden relative flex flex-col p-4 md:p-6 gap-3 md:gap-4 backdrop-blur-xl z-10">
                
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    The Problem
                  </span>
                  <h3 className="text-[15px] sm:text-lg md:text-xl font-black text-white leading-tight">
                    Ghosted by clients? <br className="hidden sm:block" />
                    Invoices ignored?
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex flex-col gap-1 md:gap-1.5">
                    <span className="text-[#F5F216] text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5F216]"></div>
                      The Solution
                    </span>
                    <p className="text-white/70 text-[10.5px] sm:text-xs md:text-sm font-medium leading-relaxed">
                      Lock down your workflow. Establish bulletproof agreements and secure guaranteed escrow payments before you ever write a line of code.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <button 
                      onClick={() => navigate('/apply')}
                      className="group/btn flex-1 flex items-center justify-center gap-2 bg-[#F5F216] py-2.5 px-4 rounded-lg transition-all hover:bg-[#fffb29] hover:scale-[1.02]"
                    >
                      <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-black">
                        Notify Me
                      </span>
                      <LiaLongArrowAltRightSolid className="h-4 w-4 text-black transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button 
                      onClick={() => navigate('/contact')}
                      className="group/btn flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-2.5 px-4 rounded-lg transition-all hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                    >
                      <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white">
                        Get In Touch
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}