"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header / Logo */}
      <header className={`w-full p-6 md:px-12 flex items-center justify-between transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">CV Generator</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 max-w-7xl mx-auto w-full gap-12 lg:gap-24 py-12">
        
        {/* Text Section */}
        <div className={`flex-1 flex flex-col items-start max-w-2xl transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
            Fast, Easy, and Professional
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-6">
            Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Professional CV</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">
            Build a professional, ATS-friendly CV in just a few minutes with our easy-to-use CV generator.
          </p>
          
          <Link href="/dashboard">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-blue-600/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 text-lg">
                Create My CV
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </Link>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-gray-500 text-xs">person</span></div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-gray-600 text-xs">person</span></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center"><span className="material-symbols-outlined text-gray-700 text-xs">person</span></div>
            </div>
            <p>Join professionals building their career</p>
          </div>
        </div>

        {/* Image Section */}
        <div className={`flex-1 w-full max-w-lg lg:max-w-xl relative transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 bg-gray-50 flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-white/50 opacity-50 z-0"></div>
            
            <Image 
              src="/onboarding-graphic.png" 
              alt="Professional Resume Builder Illustration" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover relative z-10 hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

      </main>

    </div>
  );
}
