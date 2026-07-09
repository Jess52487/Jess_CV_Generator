"use client";

import Header from "../components/layout/Header";
import SideNav from "../components/layout/SideNav";
import Footer from "../components/layout/Footer";
import { useCVContext } from "../context/CVContext";
import { useRef } from "react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

export default function ExportClipboard() {
  const { data } = useCVContext();
  const targetRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    generatePDF(targetRef, {
      filename: `${data.fullName.replace(/\s+/g, '_')}_CV.pdf`,
      resolution: Resolution.HIGH,
      page: {
        margin: Margin.MEDIUM,
        format: 'a4',
      }
    });
  };

  return (
    <>
      <Header />
      <SideNav />

      {/* Main Content Canvas (The Desk Surface) */}
      <main className="pt-24 pb-20 px-4 md:pl-32 md:pr-12 min-h-screen flex items-center justify-center">
        {/* Clipboard Live Preview Container */}
        <div className="relative max-w-4xl w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
          
          {/* The Wood Clipboard */}
          <div className="clipboard-tilt relative wood-texture p-6 md:p-10 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-[#3d2b1f] w-full max-w-[650px] transition-transform hover:rotate-0 duration-500">
            {/* Metal Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-16 metal-clip rounded-t-lg z-20 flex items-center justify-center border-b-2 border-[var(--color-outline-variant)]">
              <div className="w-12 h-2 bg-[var(--color-outline-variant)] rounded-full opacity-30"></div>
            </div>
            
            {/* CV Paper Document (Target for PDF) */}
            <div ref={targetRef} className="paper-stack bg-white aspect-[210/297] w-full p-[var(--spacing-document-padding)] relative overflow-hidden flex flex-col gap-6">
              {/* Subtle Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
              
              {/* CV Content Header */}
              <div className="border-b-2 border-on-surface-variant/10 pb-4">
                <h1 className="font-[family-name:var(--font-headline-lg)] text-[40px] text-[var(--color-on-surface)] mb-2">
                  {data.fullName || "Your Name Here"}
                </h1>
                <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] uppercase">
                  {data.jobTitle || "Your Professional Title"}
                </p>
              </div>
              
              {/* CV Content Body */}
              <div className="flex flex-col gap-8">
                <section>
                  <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2 border-b border-on-surface-variant/5">Executive Summary</h2>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] italic whitespace-pre-wrap">
                    {data.summary || "Your professional summary will appear here."}
                  </p>
                </section>
                <div className="perforated-line"></div>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Core Competencies</h2>
                    <ul className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] space-y-1">
                      <li>• Strategic Leadership</li>
                      <li>• System Architecture</li>
                      <li>• Design Thinking</li>
                      <li>• Executive Execution</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Selected Template</h2>
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)]">
                      <strong>{data.selectedTemplate}</strong><br />
                      <span className="text-[12px] font-[family-name:var(--font-label-embossed)]">Active Layout</span>
                    </p>
                  </div>
                </section>
                <div className="perforated-line"></div>
                <section>
                  <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Work History</h2>
                  <div className="space-y-4">
                    {data.experiences.length > 0 ? data.experiences.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-[family-name:var(--font-body-lg)] text-[18px] font-bold">{exp.title}</h3>
                          <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">{exp.startDate} — {exp.endDate}</span>
                        </div>
                        <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)]">{exp.company}</p>
                      </div>
                    )) : (
                      <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] italic">No experience records added.</p>
                    )}
                  </div>
                </section>
              </div>
              
              {/* Footer Stamp Placeholder */}
              <div className="mt-auto flex justify-end opacity-20 rotate-12">
                <div className="border-4 border-[var(--color-primary)] rounded-full p-4 font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)]">
                  VERIFIED
                </div>
              </div>
            </div>
          </div>

          {/* Export Module Tool Panel */}
          <div className="flex-1 w-full lg:max-w-sm flex flex-col gap-6">
            {/* Export Card */}
            <div className="bg-[var(--color-surface-container-low)] p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
              <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-surface)] mb-2">Ready to Finalize?</h2>
              <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] mb-8">
                Your professional dossier is ready for physical production. Review the layout on the desk before applying the final stamp.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                  <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">Format: PDF (Print-ready)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                  <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">Quality: High Resolution</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                  <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">Margin: Standard A4</span>
                </div>
              </div>
              
              {/* THE RUBBER STAMP BUTTON */}
              <button 
                onClick={handleExport}
                className="rubber-stamp w-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] py-6 px-4 rounded-sm flex flex-col items-center justify-center gap-2 group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                <span className="font-[family-name:var(--font-label-stamp)] text-[18px] tracking-widest uppercase">Export PDF</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] opacity-60">Final Ink Transfer</span>
              </button>
            </div>
            
            {/* Tool Tray */}
            <div className="flex gap-4">
              <button onClick={() => { window.location.href='/notepad' }} className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">edit</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Edit</span>
              </button>
              <button onClick={() => { alert('Preview Mode: Document is ready to print!') }} className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">visibility</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Preview</span>
              </button>
              <button onClick={() => { window.location.href='/templates' }} className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">settings</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Set</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Decorative Office Elements (Desk Clutter) */}
      <div className="fixed bottom-12 right-12 w-48 h-64 -rotate-6 pointer-events-none opacity-40 hidden xl:block">
        <div className="bg-[var(--color-secondary-container)] h-full w-full rounded-r shadow-lg border-l-8 border-[var(--color-secondary-fixed)] flex items-center justify-center">
          <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-secondary-container)] -rotate-90">REFERENCE_FILES</div>
        </div>
      </div>
    </>
  );
}
