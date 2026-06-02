import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from 'react-icons/lia';

export default function HadeiJoinForm() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#0a0d0a] text-white font-meiro flex flex-col md:flex-row selection:bg-[#F5F216] selection:text-black overflow-x-hidden">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.15] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="fixed top-1/4 -left-20 w-[50vw] h-[50vw] bg-[#F5F216] opacity-[0.08] blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[40vw] h-[40vw] bg-[#1a2e1a] opacity-20 blur-[130px] rounded-full pointer-events-none z-0"></div>

      {/* ── LEFT SIDE: IMMERSIVE BRANDING ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-6 md:p-12 lg:p-16 min-h-[45vh] md:min-h-[100dvh]">
        
        {/* Header / Logo */}
        <header className="flex items-center justify-between w-full">
          <div onClick={() => navigate('/')} className="flex items-center cursor-pointer group w-fit">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
              hade<span className="inline-block transform rotate-180 origin-center text-[#F5F216]">e</span>i.
            </span>
          </div>
        </header>

        {/* Hero Typography */}
        <div className="flex flex-col mt-auto mb-4 md:mb-10">
         
          
          <h1 className="text-[16vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter text-white z-20">
            Build
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #F5F216' }}>Beyond</span>
            <br />
            Limits.
          </h1>
          <p className="mt-6 text-sm md:text-base lg:text-lg font-medium tracking-wide text-white/70 max-w-sm md:max-w-md">
            We're recruiting top-tier creatives and closers to collaborate on verified, high-value projects.
          </p>
        </div>
      </div>

      {/* ── RIGHT SIDE: FORM PANEL ── */}
      <div className="relative z-20 w-full md:w-[480px] lg:w-[550px] md:min-h-[100dvh] bg-[#080a08]/80 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center p-6 md:p-10 lg:p-12 shrink-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="w-full max-w-md mx-auto">
          {/* Form Header */}
          <div className="flex flex-col gap-2 mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Submit Profile
            </h2>
            <p className="text-white/50 text-xs md:text-sm font-medium">
              Secure your spot in the Hadei network.
            </p>
          </div>

          {/* Form Elements */}
          <form className="flex flex-col gap-5">
            
            {/* Input Group: Name */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 transition-colors group-focus-within:text-[#F5F216]">
                Full Name
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 text-base md:text-lg font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Input Group: Email */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-2 transition-colors group-focus-within:text-[#F5F216]">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 text-base md:text-lg font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="hello@example.com"
                required
              />
            </div>

            {/* Input Group: Portfolio */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-2 transition-colors group-focus-within:text-[#F5F216]">
                Portfolio / Social Link
              </label>
              <input 
                type="url" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-white/20 text-base md:text-lg font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="https://yourwork.com"
                required
              />
            </div>

            {/* Select Group: Discipline */}
            <div className="relative flex flex-col shrink-0 group">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-2 transition-colors group-focus-within:text-[#F5F216]">
                Primary Discipline
              </label>
              <select 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-base md:text-lg font-medium appearance-none cursor-pointer focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                required
                defaultValue=""
              >
                <option value="" disabled className="bg-[#0a0d0a] text-white/50">Select your expertise...</option>
                <option value="graphic_design" className="bg-[#111]">Graphic Designer</option>
                <option value="content_creation" className="bg-[#111]">Content Creator</option>
                <option value="telecalling" className="bg-[#111]">Telecaller / Sales</option>
                <option value="other" className="bg-[#111]">Other</option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute right-2 bottom-3 pointer-events-none text-white/40 text-xs">
                ▼
              </div>
            </div>

            {/* ── BUTTON ROW: RETURN & SUBMIT ── */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 shrink-0">
              
              {/* Back Button */}
              <button 
                type="button" 
                onClick={() => navigate(-1)} 
                className="group/btn sm:flex-[1] flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3.5 px-4 rounded-xl transition-all hover:bg-white/10 hover:border-white/30"
              >
                <LiaLongArrowAltLeftSolid className="h-4 w-4 text-white transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                <span className="text-[11px] font-black uppercase tracking-widest text-white">
                  Back
                </span>
              </button>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group/btn sm:flex-[2.5] flex items-center justify-center gap-3 bg-[#F5F216] py-3.5 px-6 rounded-xl transition-all hover:bg-[#fffb29] hover:scale-[1.02] shadow-[0_0_20px_rgba(245,242,22,0.15)] hover:shadow-[0_0_30px_rgba(245,242,22,0.3)]"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-black">
                  Submit Application
                </span>
                <LiaLongArrowAltRightSolid className="h-5 w-5 text-black transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </button>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
}