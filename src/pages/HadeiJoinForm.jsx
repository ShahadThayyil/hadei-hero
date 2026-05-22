import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

export default function HadeiJoinForm() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[100dvh] w-full bg-[#F5F216] text-black font-sans overflow-hidden flex items-center justify-center selection:bg-black selection:text-[#F5F216] p-3 md:p-6 box-border">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:5vw_5vw] md:bg-[size:3vw_3vw] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white opacity-40 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* ── MAIN CONTENT: STRICT LOCKED DOSSIER ── */}
      {/* Removed h-full on mobile (using h-auto) so it shrink-wraps and kills white space. Kept md:h-full for desktop */}
      <main className="relative z-10 w-full h-auto md:h-full max-h-[95dvh] md:max-h-[85dvh] max-w-5xl flex flex-col md:flex-row bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Left Column: Branding & Logo */}
        {/* Tightened mobile padding (py-3 px-4) to compress vertical height */}
        <div className="w-full md:w-[45%] bg-black text-[#F5F216] py-3 px-4 md:p-10 flex flex-row md:flex-col justify-between items-center md:items-start border-b-[3px] md:border-b-0 md:border-r-[3px] border-black relative shrink-0 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(#F5F216_1px,transparent_1px)] bg-[size:15px_15px] opacity-[0.03] pointer-events-none"></div>

          {/* Logo */}
          <div onClick={() => navigate('/')} className="relative z-10 flex items-center cursor-pointer group w-fit shrink-0">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#F5F216] transition-transform duration-300 group-hover:scale-105">
              hade<span className="inline-block transform rotate-180 origin-center text-[0.8em]">e</span>i.
            </span>
          </div>

          {/* Branding Typography */}
          <div className="relative z-10 flex flex-col items-end md:items-start md:mt-auto md:justify-center flex-1 w-full ml-4 md:ml-0">
            {/* Removed mobile rotation and adjusted leading so it sits perfectly inline with the logo */}
            <h1 className="font-zxx text-[5.5vw] md:text-[5.5vw] leading-[1] md:leading-[0.85] tracking-tighter uppercase drop-shadow-lg transform md:-rotate-[6deg] tracking-[-0.05em] transition-transform duration-700 hover:-rotate-[2deg] cursor-default text-right md:text-left">
              Join <span className="hidden md:inline"><br /></span>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #F5F216' }}>The</span> <span className="hidden md:inline"><br /></span>
              Team.
            </h1>
            
            <p className="text-white/70 text-xs font-medium leading-relaxed max-w-xs mt-4 hidden md:block">
              We are always looking for passionate creatives to collaborate on premium, verified projects.
            </p>
          </div>
        </div>

        {/* Right Column: The Non-Scrollable Form */}
        <div className="w-full md:w-[55%] md:flex-1 bg-white py-5 px-5 md:p-10 flex flex-col justify-center overflow-hidden relative z-10 min-h-0">
          
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-5 border-b-2 border-black pb-2 text-black/80 shrink-0">
            Application Form
          </h2>

          {/* Removed flex-1 on mobile form to prevent stretching and white gaps */}
          <form className="flex flex-col gap-3 md:gap-5 justify-center min-h-0">
            
            {/* Input Group: Name */}
            <div className="relative flex flex-col shrink-0">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-0.5">
                Full Name
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b-2 border-black/20 py-1.5 md:py-2 text-sm md:text-lg font-bold tracking-tight transition-all duration-300 rounded-none focus:outline-none focus:bg-[#F5F216] focus:border-black focus:px-3 focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-0.5 focus:-translate-x-0.5"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Input Group: Email */}
            <div className="relative flex flex-col shrink-0">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-0.5">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b-2 border-black/20 py-1.5 md:py-2 text-sm md:text-lg font-bold tracking-tight transition-all duration-300 rounded-none focus:outline-none focus:bg-[#F5F216] focus:border-black focus:px-3 focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-0.5 focus:-translate-x-0.5"
                placeholder="hello@example.com"
                required
              />
            </div>

            {/* Input Group: Portfolio */}
            <div className="relative flex flex-col shrink-0">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-0.5">
                Portfolio Link
              </label>
              <input 
                type="url" 
                className="w-full bg-transparent border-b-2 border-black/20 py-1.5 md:py-2 text-sm md:text-lg font-bold tracking-tight transition-all duration-300 rounded-none focus:outline-none focus:bg-[#F5F216] focus:border-black focus:px-3 focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-0.5 focus:-translate-x-0.5"
                placeholder="https://yourwork.com"
                required
              />
            </div>

            {/* Select Group: Discipline */}
            <div className="relative flex flex-col shrink-0">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black/60 mb-0.5">
                Select Your Role
              </label>
              <select 
                className="w-full bg-transparent border-b-2 border-black/20 py-1.5 md:py-2 text-sm md:text-base font-bold tracking-tight transition-all duration-300 rounded-none appearance-none cursor-pointer focus:outline-none focus:bg-[#F5F216] focus:border-black focus:px-3 focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:-translate-y-0.5 focus:-translate-x-0.5"
                required
                defaultValue=""
              >
                <option value="" disabled>Choose a discipline...</option>
                <option value="graphic_design">Graphic Designer</option>
                <option value="content_creation">Content Creator</option>
                <option value="telecalling">Telecaller / Sales</option>
                <option value="other">Other Creative</option>
              </select>
              <div className="absolute right-2 bottom-2 pointer-events-none text-sm md:text-lg font-black text-black/60">↓</div>
            </div>

            {/* ── BUTTON ROW: RETURN & SUBMIT ── */}
            <div className="mt-2 md:mt-4 flex flex-row gap-2 md:gap-4 shrink-0">
              
              {/* Return Button */}
              <button 
                type="button" 
                onClick={() => navigate('/')}
                className="group flex-[1] flex items-center justify-center bg-transparent text-black px-2 py-2.5 md:py-3 border-[2.5px] md:border-[3px] border-black transition-all duration-300 hover:bg-black hover:text-[#F5F216] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
              >
                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest">
                  Back
                </span>
              </button>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group flex-[2.5] flex items-center justify-between bg-black text-[#F5F216] px-3 md:px-5 py-2.5 md:py-3 border-[2.5px] md:border-[3px] border-black transition-all duration-300 hover:bg-[#F5F216] hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
              >
                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest">
                  Apply Now
                </span>
                <LiaLongArrowAltRightSolid className="h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

            </div>

          </form>
        </div>

      </main>
    </div>
  );
}