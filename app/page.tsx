"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Onboarding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header />
      
      {/* The lamp light effect matches the existing design pattern */}
      <div className="lamp-light"></div>

      {/* Spacing matches the dashboard and existing pages */}
      <main className="pt-32 pb-24 px-[var(--spacing-desktop-margin)] flex justify-center min-h-screen relative z-20">
        
        {/* Instead of a dark leather portfolio, we use a pristine, modern white container to satisfy the blue/white modern requirement, while sitting gracefully on the mahogany desk. */}
        <div className={`w-full max-w-5xl bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16 relative flex flex-col lg:flex-row items-center gap-12 border border-blue-100 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ fontFamily: '"Inter", sans-serif' }}>
          
          {/* Subtle inner border to tie into the skeuomorphic feel but kept modern */}
          <div className="absolute inset-4 border border-blue-50 pointer-events-none rounded"></div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col items-start relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-200 shadow-sm">
              Fast, Easy, and Professional
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Professional CV</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
              Build a professional, ATS-friendly CV in just a few minutes with our easy-to-use CV generator.
            </p>
            
            <Link href="/dashboard">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-[16px] uppercase tracking-widest shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
                Create My CV
              </button>
            </Link>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-semibold">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-blue-600 text-xs">person</span></div>
                <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-blue-700 text-xs">person</span></div>
                <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-blue-800 text-xs">person</span></div>
              </div>
              <p>Join professionals building their career</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative z-10 flex justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white bg-blue-50 flex items-center justify-center rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/onboarding-graphic.png" 
                alt="Professional Resume Builder Illustration" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover relative z-10"
                priority
              />
            </div>
            
            {/* Decorative modern blobs matching the theme */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
