import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from 'react-icons/lia';

export default function HadeiContactPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#0a0d0a] text-white font-meiro flex flex-col items-center justify-center selection:bg-[#F5F216] selection:text-black overflow-x-hidden py-24 md:py-28">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen pointer-events-none fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Centered Neon Glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#F5F216] opacity-[0.07] blur-[120px] rounded-full pointer-events-none z-0 fixed"></div>

      {/* ── ABSOLUTE HEADER ── */}
      <header className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-5 py-4 md:px-12 md:py-">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center justify-center bg-[#F5F216] px-4 md:px-5 py-1 rounded-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:bg-[#fffb29] shadow-[0_0_15px_rgba(245,242,22,0.15)] hover:shadow-[0_0_25px_rgba(245,242,22,0.3)] w-fit"
        >
          <img 
            src="https://res.cloudinary.com/dmtzmgbkj/image/upload/v1780479006/WhatsApp_Image_2026-05-22_at_2.18.05_PM__1_-removebg-preview_befo5g.png" 
            alt="Hadei Logo" 
            className="h-5 md:h-8 w-auto object-contain" 
          />
        </div>
      </header>

      {/* ── CENTERED CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-2xl px-5">
        
        {/* Typography Heading */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-8 gap-2 md:gap-3">
          <h1 className="text-[9vw] sm:text-[6vw] md:text-[3.5rem] leading-[0.9] font-black uppercase tracking-tighter text-white">
            LET'S START <br className="md:hidden" /> A <span className="text-[#F5F216] drop-shadow-[0_0_15px_rgba(245,242,22,0.2)]">CONVERSATION</span>
          </h1>
          
          <p className="mt-1 md:mt-2 text-[11px] md:text-sm font-medium tracking-wide text-white/70 max-w-sm md:max-w-md leading-relaxed">
            Ready to secure your workflow and establish bulletproof agreements? Partner with Hadei today.
          </p>
        </div>

        {/* Floating Glassmorphic Form Card */}
        <div className="w-full bg-[#080a08]/80 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Subtle top inner glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <form className="flex flex-col gap-4 md:gap-5">
            
            {/* ── BACK BUTTON (Moved to the top of the form) ── */}
            <div className="flex justify-start mb-1">
              <button 
                type="button" 
                onClick={() => navigate(-1)} 
                className="group/btn flex items-center justify-center gap-2 bg-transparent border border-white/10 py-2 px-3 rounded-lg transition-all hover:bg-white/5 hover:border-white/30"
              >
                <LiaLongArrowAltLeftSolid className="h-4 w-4 text-white transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">
                  Back
                </span>
              </button>
            </div>
            
            {/* 2-Column Grid on Desktop to save vertical space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              
              {/* Input Group: Name */}
              <div className="flex flex-col group">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 transition-colors group-focus-within:text-[#F5F216]">
                  Your Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-xs md:text-sm font-medium focus:outline-none focus:border-[#F5F216] focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Input Group: Phone Number */}
              <div className="flex flex-col group">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 transition-colors group-focus-within:text-[#F5F216]">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-xs md:text-sm font-medium focus:outline-none focus:border-[#F5F216] focus:bg-white/10 transition-all"
                  placeholder="+1 (234) 567-890"
                  required
                />
              </div>
            </div>

            {/* Input Group: Email (Full Width) */}
            <div className="flex flex-col group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 transition-colors group-focus-within:text-[#F5F216]">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-xs md:text-sm font-medium focus:outline-none focus:border-[#F5F216] focus:bg-white/10 transition-all"
                placeholder="hello@example.com"
                required
              />
            </div>

            {/* Input Group: Message (Full Width) */}
            <div className="flex flex-col group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 transition-colors group-focus-within:text-[#F5F216]">
                Message
              </label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-xs md:text-sm font-medium focus:outline-none focus:border-[#F5F216] focus:bg-white/10 transition-all resize-none"
                placeholder="How can we help you?"
                rows={4}
                required
              />
            </div>

            {/* ── BUTTON ROW: SUBMIT (Full Width) ── */}
            <div className="mt-1 md:mt-2">
              <button 
                type="submit" 
                className="group/btn w-full flex items-center justify-center gap-3 bg-[#F5F216] py-3.5 px-4 rounded-lg transition-all hover:bg-[#fffb29] hover:scale-[1.02] shadow-[0_0_15px_rgba(245,242,22,0.15)] hover:shadow-[0_0_25px_rgba(245,242,22,0.3)]"
              >
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-black">
                  Send Message
                </span>
                <LiaLongArrowAltRightSolid className="h-4 w-4 text-black transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  );
}