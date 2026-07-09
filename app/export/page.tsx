export default function ExportClipboard() {
  return (
    <>
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-20 bg-[var(--color-surface-container-high)] shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <div className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-[var(--color-on-surface)] tracking-widest uppercase">
          CV GENERATOR
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors" href="#">Profile</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors" href="#">Templates</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-1 font-bold" href="#">Export</a>
        </nav>
        <button className="rubber-stamp bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-6 py-2 font-[family-name:var(--font-label-stamp)] text-[14px] rounded-sm uppercase tracking-wider">
          Download
        </button>
      </header>

      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-20 flex flex-col items-center py-[var(--spacing-component-gap)] bg-[var(--color-secondary-container)] border-r border-[var(--color-outline-variant)] shadow-[4px_0_8px_rgba(0,0,0,0.2)] rounded-r-xl z-40">
        <div className="mb-8 text-center px-2">
          <div className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-secondary-container)] font-bold opacity-60">Desk</div>
        </div>
        <div className="flex flex-col gap-6">
          <button className="w-12 h-12 flex items-center justify-center text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] rounded-xl transition-all">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] rounded-xl transition-all">
            <span className="material-symbols-outlined">description</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-[var(--color-secondary)] text-[var(--color-on-secondary)] rounded-xl shadow-inner -translate-x-1">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>ios_share</span>
          </button>
        </div>
      </aside>

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
            
            {/* CV Paper Document */}
            <div className="paper-stack bg-white aspect-[210/297] w-full p-[var(--spacing-document-padding)] relative overflow-hidden flex flex-col gap-6">
              {/* Subtle Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
              
              {/* CV Content Header */}
              <div className="border-b-2 border-on-surface-variant/10 pb-4">
                <h1 className="font-[family-name:var(--font-headline-lg)] text-[40px] text-[var(--color-on-surface)] mb-2">Julian Vane</h1>
                <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] uppercase">Executive Creative Director</p>
              </div>
              
              {/* CV Content Body */}
              <div className="flex flex-col gap-8">
                <section>
                  <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2 border-b border-on-surface-variant/5">Executive Summary</h2>
                  <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] italic">
                    Visionary leader with 15+ years of experience in high-end design systems and digital craftsmanship. Specialized in bridging the gap between tactile aesthetics and functional utility.
                  </p>
                </section>
                <div className="perforated-line"></div>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Core Competencies</h2>
                    <ul className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] space-y-1">
                      <li>• Skeuomorphic Interface Design</li>
                      <li>• Brand Identity Architecture</li>
                      <li>• Professional Stationery Craft</li>
                      <li>• Executive Suite UX</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Education</h2>
                    <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)]">
                      <strong>Master of Fine Arts</strong><br />
                      Design Academy Eindhoven<br />
                      <span className="text-[12px] font-[family-name:var(--font-label-embossed)]">Class of 2008</span>
                    </p>
                  </div>
                </section>
                <div className="perforated-line"></div>
                <section>
                  <h2 className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] mb-2">Work History</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-[family-name:var(--font-body-lg)] text-[18px] font-bold">Virtual Desk Studio</h3>
                        <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">2018 — Present</span>
                      </div>
                      <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)]">Principal Systems Designer</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-[family-name:var(--font-body-lg)] text-[18px] font-bold">Paper & Ink Collective</h3>
                        <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">2012 — 2018</span>
                      </div>
                      <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)]">Lead Visual Strategist</p>
                    </div>
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
              <button className="rubber-stamp w-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] py-6 px-4 rounded-sm flex flex-col items-center justify-center gap-2 group relative">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                <span className="font-[family-name:var(--font-label-stamp)] text-[18px] tracking-widest uppercase">Export PDF</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] opacity-60">Final Ink Transfer</span>
              </button>
            </div>
            
            {/* Tool Tray */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">edit</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Edit</span>
              </button>
              <button className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">visibility</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Preview</span>
              </button>
              <button className="flex-1 bg-[var(--color-surface-container-highest)] p-4 rounded shadow-[2px_2px_0_rgba(0,0,0,0.2)] border border-white/20 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">settings</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)]">Set</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Static Anchor */}
      <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-[var(--spacing-desktop-margin)] py-2 h-12 bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-on-secondary-fixed-variant)] shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
        <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] opacity-60">© 2026 VIRTUAL DESK STUDIO</div>
        <div className="flex gap-6">
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
        </div>
      </footer>

      {/* Decorative Office Elements (Desk Clutter) */}
      <div className="fixed bottom-12 right-12 w-48 h-64 -rotate-6 pointer-events-none opacity-40 hidden xl:block">
        <div className="bg-[var(--color-secondary-container)] h-full w-full rounded-r shadow-lg border-l-8 border-[var(--color-secondary-fixed)] flex items-center justify-center">
          <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-secondary-container)] -rotate-90">REFERENCE_FILES</div>
        </div>
      </div>
    </>
  );
}
