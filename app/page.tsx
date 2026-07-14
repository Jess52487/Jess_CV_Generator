"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Onboarding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      if (photoRef.current) {
          photoRef.current.style.transform = `rotate(-2deg) translate(${moveX}px, ${moveY}px)`;
      }
      
      if (docRef.current) {
          docRef.current.style.transform = `perspective(1000px) rotateY(${moveX * 0.2}deg) rotateX(${-moveY * 0.2}deg)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="desk-surface min-h-screen flex items-center justify-center p-[var(--spacing-mobile-margin)] md:p-[var(--spacing-desktop-margin)] relative" ref={containerRef}>
      <div className="wood-grain absolute inset-0 pointer-events-none"></div>
      {/* Ambient Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Decorative Elements on the Desk */}
      {/* Pinned Photo */}
      <div className="hidden lg:block absolute right-12 top-24 z-10" ref={photoRef}>
        <div className="pinned-photo relative w-64 h-80 bg-white">
          <div className="push-pin"></div>
          <div className="w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover grayscale-[0.3]" alt="A professional photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUO1zKExTnh0XiZfsJIt-5v1C-MnhodJQUN24CRCPat9Mq5KjddSgrUEXgJlFSdwqDZBaq-DOBWeMG7KnxCn1D7v3nCPRaGHFk8tWvirfqf_p80U2T9KSKgrHk01-k8WDMJI96NKib4nTdJGFaVI3D0yO9Xg6YVnz82hzACC5Yp7PG5_a5L0b01pk0xJlsRIa190wGvzzAjrgkmOfwVYTBkvHlmS_9X4dXutgSAWO0mI8iNB89jH-lGK__9boXAjIrEi9R970eTIus"/>
          </div>
          <div className="absolute bottom-2 left-4 font-[family-name:var(--font-label-stamp)] text-[10px] text-gray-500 uppercase tracking-widest">Growth Archive 2024</div>
        </div>
      </div>
      
      {/* Fountain Pen Decor */}
      <div className="hidden xl:block absolute left-20 bottom-32 z-10 rotate-45 opacity-80 scale-125">
        <div className="w-4 h-48 bg-black rounded-full shadow-2xl relative">
          <div className="absolute top-0 w-4 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full"></div>
          <div className="absolute bottom-0 w-6 h-1 bg-gray-500 -left-1"></div>
        </div>
      </div>
      
      {/* The Central Document (Stationery Paper) */}
      <div className="document-paper bg-white w-full max-w-4xl aspect-[1/1.414] flex flex-col z-20 overflow-hidden transform md:scale-95 lg:scale-100 transition-transform duration-500" ref={docRef}>
        {/* Clipboard Header */}
        <div className="clipboard-clamp h-16 w-1/3 mx-auto flex items-center justify-center rounded-b-xl mb-8 relative">
          <div className="w-8 h-8 rounded-full border-2 border-gray-500/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
          {/* Binder Clip Metaphor */}
          <div className="absolute -left-6 top-2 w-12 h-4 bg-gray-400/50 rounded-full blur-sm"></div>
        </div>
        
        {/* Content Area */}
        <div className="flex-grow px-[var(--spacing-mobile-margin)] md:px-[var(--spacing-document-padding)] flex flex-col items-center text-center">
          <div className="mb-[var(--spacing-gutter)]">
            <span className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] bg-[var(--color-primary-container)]/20 px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
              VIRTUAL DESK SYSTEM v2.0
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-headline-lg)] text-[30px] md:text-[40px] text-[var(--color-on-background)] mb-[var(--spacing-gutter)] leading-tight font-bold">
            Create Your <span className="italic text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]/30">Professional</span> CV
          </h1>
          <p className="font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface-variant)] max-w-xl mb-12">
            Experience the tactile satisfaction of a physical workspace paired with digital precision. Build a career-defining portfolio that stands out from the noise.
          </p>
          
          {/* Input Indent Mimic */}
          <div className="w-full max-w-md space-y-6 mb-16">
            <div className="text-left">
              <label className="font-[family-name:var(--font-label-stamp)] text-[10px] text-[var(--color-on-surface-variant)] uppercase ml-2 mb-1 block">Full Name Signature</label>
              <div className="indent-effect p-4 rounded-lg flex items-center gap-4 transition-shadow">
                <span className="material-symbols-outlined text-[var(--color-primary)]">edit</span>
                <input className="bg-transparent border-none focus:ring-0 w-full font-[family-name:var(--font-headline-md)] italic text-gray-700 placeholder:text-gray-300 outline-none" placeholder="Johnathan Doe" type="text" 
                  onFocus={(e) => e.currentTarget.parentElement!.style.boxShadow = 'inset 0 4px 6px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,1)'}
                  onBlur={(e) => e.currentTarget.parentElement!.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.8)'}
                />
              </div>
            </div>
          </div>
          
          {/* Features Bento-lite */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)] w-full mb-16">
            <div className="perforated pb-4 text-left">
              <span className="material-symbols-outlined text-[var(--color-primary)] mb-2">history_edu</span>
              <h3 className="font-[family-name:var(--font-label-stamp)] text-[14px] mb-1 font-bold">Authentic Prints</h3>
              <p className="text-[12px] text-[var(--color-on-surface-variant)] leading-relaxed font-[family-name:var(--font-body-md)]">High-fidelity typography that feels pressed onto the paper surface.</p>
            </div>
            <div className="perforated pb-4 text-left">
              <span className="material-symbols-outlined text-[var(--color-primary)] mb-2">verified</span>
              <h3 className="font-[family-name:var(--font-label-stamp)] text-[14px] mb-1 font-bold">ATS Proof</h3>
              <p className="text-[12px] text-[var(--color-on-surface-variant)] leading-relaxed font-[family-name:var(--font-body-md)]">Smart structures hidden beneath the skeuomorphic beauty.</p>
            </div>
            <div className="perforated pb-4 text-left">
              <span className="material-symbols-outlined text-[var(--color-primary)] mb-2">auto_awesome</span>
              <h3 className="font-[family-name:var(--font-label-stamp)] text-[14px] mb-1 font-bold">Instant Layout</h3>
              <p className="text-[12px] text-[var(--color-on-surface-variant)] leading-relaxed font-[family-name:var(--font-body-md)]">Automated formatting that respects traditional design rules.</p>
            </div>
          </div>
          
          {/* Rubber Stamp CTA */}
          <div className="mt-auto mb-12 w-full flex justify-center">
            <Link href="/notepad">
              <button className="stamp-button group bg-[var(--color-primary)] text-[var(--color-on-primary)] px-12 py-6 rounded-lg font-[family-name:var(--font-headline-md)] uppercase tracking-widest flex items-center gap-4 cursor-pointer relative overflow-hidden">
                <span className="material-symbols-outlined text-3xl">ink_highlighter</span>
                Create My CV
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </button>
            </Link>
          </div>
          <div className="mb-8 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
            <span className="font-[family-name:var(--font-label-stamp)] text-[10px] text-gray-400">READY FOR DISPATCH TO EXECUTIVE SUITE</span>
          </div>
        </div>
        
        {/* Bottom Paper Detail */}
        <div className="h-2 w-full bg-gradient-to-t from-gray-200 to-transparent mt-auto"></div>
      </div>
      
      {/* Footer Text on the Wood */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 md:gap-6 opacity-40 w-full text-center">
        <span className="font-[family-name:var(--font-label-stamp)] text-[10px] md:text-[12px] text-white tracking-[0.3em] uppercase">Privacy Protocol</span>
        <div className="h-1 w-1 rounded-full bg-white/50 hidden md:block"></div>
        <span className="font-[family-name:var(--font-label-stamp)] text-[10px] md:text-[12px] text-white tracking-[0.3em] uppercase">Executive Terms</span>
        <div className="h-1 w-1 rounded-full bg-white/50 hidden md:block"></div>
        <span className="font-[family-name:var(--font-label-stamp)] text-[10px] md:text-[12px] text-white tracking-[0.3em] uppercase">Contact Suite</span>
      </div>
    </main>
  );
}
