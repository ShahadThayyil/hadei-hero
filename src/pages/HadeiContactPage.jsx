import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from 'react-icons/lia';

export default function HadeiContactPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[100dvh] w-full bg-[#0a0d0a] text-white font-meiro flex flex-col md:flex-row selection:bg-[#F5F216] selection:text-black overflow-hidden">
      
      {/* Strictly enforced h-[100dvh] and overflow-hidden to lock it to one screen */}
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Background Neon Orbs */}
      <div className="absolute top-1/4 -left-20 w-[50vw] h-[50vw] bg-[#F5F216] opacity-[0.08] blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#1a2e1a] opacity-20 blur-[130px] rounded-full pointer-events-none z-0"></div>

      {/* ── LEFT SIDE: IMMERSIVE BRANDING ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-5 md:p-10 lg:p-16 h-[40vh] md:h-full shrink-0">
        
        {/* Header / Logo */}
        <header className="flex items-center justify-between w-full">
          <div onClick={() => navigate('/')} className="flex items-center cursor-pointer group w-fit">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
              hade<span className="inline-block transform rotate-180 origin-center text-[#F5F216]">e</span>i.
            </span>
          </div>
        </header>

        {/* Hero Typography */}
        <div className="flex flex-col mt-auto mb-2 md:mb-10">
          <h1 className="text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter text-white z-20">
            Get
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #F5F216' }}>In</span>
            <br />
            Touch.
          </h1>
          <p className="mt-4 text-xs md:text-sm lg:text-base font-medium tracking-wide text-white/70 max-w-sm">
            Have a project in mind or need technical support? Drop us a line.
          </p>
        </div>
      </div>

      {/* ── RIGHT SIDE: FORM PANEL ── */}
      <div className="relative z-20 w-full md:w-[450px] lg:w-[500px] h-[60vh] md:h-full bg-[#080a08]/80 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center p-6 md:p-8 shrink-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-y-auto">
        
        <div className="w-full max-w-md mx-auto my-auto">
          
          {/* Form Header */}
          <div className="flex flex-col gap-1.5 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
              Send a Message
            </h2>
            <p className="text-white/50 text-[10px] md:text-xs font-medium">
              We typically respond within 24 hours.
            </p>
          </div>

          {/* Form Elements (Compressed gaps for 100vh fit) */}
          <form className="flex flex-col gap-3 md:gap-4">
            
            {/* Input Group: Name */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 transition-colors group-focus-within:text-[#F5F216]">
                Your Name
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 py-1.5 text-white placeholder-white/20 text-sm md:text-base font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Input Group: Email */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 mt-1 transition-colors group-focus-within:text-[#F5F216]">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 py-1.5 text-white placeholder-white/20 text-sm md:text-base font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="hello@example.com"
                required
              />
            </div>

            {/* Input Group: Phone Number */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 mt-1 transition-colors group-focus-within:text-[#F5F216]">
                Phone Number
              </label>
              <input 
                type="tel" 
                className="w-full bg-transparent border-b border-white/20 py-1.5 text-white placeholder-white/20 text-sm md:text-base font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none"
                placeholder="+1 (234) 567-890"
                required
              />
            </div>

            {/* Input Group: Message (Textarea reduced to 3 rows to save vertical space) */}
            <div className="flex flex-col shrink-0 group">
              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5 mt-1 transition-colors group-focus-within:text-[#F5F216]">
                Message
              </label>
              <textarea 
                className="w-full bg-transparent border-b border-white/20 py-1.5 text-white placeholder-white/20 text-sm md:text-base font-medium focus:outline-none focus:border-[#F5F216] transition-all rounded-none resize-none"
                placeholder="How can we help you?"
                rows={3}
                required
              />
            </div>

            {/* ── BUTTON ROW: RETURN & SUBMIT ── */}
            <div className="flex flex-row gap-3 mt-4 md:mt-5 shrink-0">
              
              {/* Back Button */}
              <button 
                type="button" 
                onClick={() => navigate(-1)} 
                className="group/btn flex-[1] flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 px-3 rounded-lg transition-all hover:bg-white/10 hover:border-white/30"
              >
                <LiaLongArrowAltLeftSolid className="h-4 w-4 text-white transform group-hover/btn:-translate-x-1 transition-transform duration-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Back
                </span>
              </button>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group/btn flex-[2.5] flex items-center justify-center gap-3 bg-[#F5F216] py-3 px-4 rounded-lg transition-all hover:bg-[#fffb29] hover:scale-[1.02] shadow-[0_0_15px_rgba(245,242,22,0.15)] hover:shadow-[0_0_25px_rgba(245,242,22,0.3)]"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-black">
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