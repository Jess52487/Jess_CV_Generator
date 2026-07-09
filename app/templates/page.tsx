export default function TemplateGallery() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-20 bg-[var(--color-surface)] shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]">
        <div className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-[var(--color-on-surface)] tracking-widest uppercase">
          CV GENERATOR
        </div>
        <nav className="hidden md:flex gap-[var(--spacing-gutter)]">
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors pb-1" href="#">Profile</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-1 font-bold" href="#">Templates</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors pb-1" href="#">Export</a>
        </nav>
        <button className="stamp-button px-6 py-2 rounded-lg font-[family-name:var(--font-label-stamp)] text-[14px] text-white uppercase tracking-widest">
          Download
        </button>
      </header>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-20 flex flex-col items-center py-[var(--spacing-component-gap)] bg-[var(--color-secondary-container)] rounded-r-xl border-r border-[var(--color-outline-variant)] shadow-[4px_0_8px_rgba(0,0,0,0.2)] z-40">
        <div className="mb-8 flex flex-col items-center">
          <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl">folder_shared</span>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <span className="material-symbols-outlined text-[var(--color-on-secondary-container)] group-hover:text-[var(--color-secondary)]">person</span>
            <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-secondary-container)]">Profile</span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-[var(--color-secondary)] text-[var(--color-on-secondary)] w-full py-4 rounded-l-full shadow-inner -translate-x-1 transition-transform cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            <span className="font-[family-name:var(--font-label-embossed)] text-[12px]">Templates</span>
          </div>
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <span className="material-symbols-outlined text-[var(--color-on-secondary-container)] group-hover:text-[var(--color-secondary)]">ios_share</span>
            <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-secondary-container)]">Export</span>
          </div>
        </div>
      </aside>

      {/* Main Content: The Filing Cabinet Drawer */}
      <main className="pt-32 pb-24 px-[var(--spacing-desktop-margin)] ml-20 min-h-screen flex flex-col items-center relative z-20">
        <div className="w-full max-w-6xl">
          {/* Cabinet Header Area */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-[family-name:var(--font-headline-lg)] text-[40px] text-white mb-2 drop-shadow-lg">The Template Cabinet</h1>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-surface-container-low)] max-w-2xl">Browse our executive suite of professional layouts. Each template is precision-crafted to ensure your credentials stand out on the recruiter's desk.</p>
          </div>

          {/* The Metal Drawer Container */}
          <div className="brushed-steel rounded-t-3xl p-12 min-h-[600px] drawer-slide relative overflow-hidden cabinet-shadow">
            {/* Drawer Pull / Handle Design */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-8 rounded-b-xl drawer-handle flex items-center justify-center border-t border-white">
              <div className="w-32 h-1 bg-black/20 rounded-full"></div>
            </div>

            {/* Template Grid (Bento Style Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              
              {/* Template Item 1 */}
              <div className="flex flex-col gap-6">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A minimalist, high-end executive CV template" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzgvZmsd7gkEZhH6gsEETwhdJGNll-vbs0QheRdHifZ0rBU4-JUDIc_tRfHqRWo9fVr8JoHTXTrly4zk6dWObGCM8kEEnCN-_qB7s30EVfojrwqifVHHDla6gX64XxYRJRkARaqKnodnbHNV6nfFAjVI2G-xpx7LG_cwckvI6MUOgcfW7rDnBL0acKXNgjZ1kuUSni-GFGqydwZDwVtw7TZNoTVkI3NpC_-xGetVE1_-bAZisDlHBsrXHdsmnZPVaIFFq18fCNlUUK')" }}></div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">The Executive</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Traditional & Bold</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Template Item 2 */}
              <div className="flex flex-col gap-6 mt-8">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A modern creative resume template" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMV0TS0qV1PsNmLDD_OXv8lste5QI8i11t2PhZcSlaPcCGT9rrGiq3kdv0R30s51rFRz98JGVwmVs4OT_GLhlPZHIKhsuw4ppDmlf_qIQTQis0QfDcdA4StyuU9UsaAuWetN6Kz_IWsAvenJyw5spzbSt6q4vCw-SJE9TgJdTxIjtqhk8iiTEtf8rZvB0xKGonJG-2DKVXmrrsVw_a1738EgA3e_4oqM1REEw3au9TzsQ8t2_6YQp_ciH6eDmglZr9IaZeRWriwM3B')" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">Modern Creative</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Clean & Minimal</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Template Item 3 */}
              <div className="flex flex-col gap-6">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A vintage-inspired academic CV template" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqKmvUdHTt2WMuFzZohkwUDtYMKEMf8p3qh0ScQPU9vkjTHD5NEvuIct1m-ifRsQ5GrxioEekWREpx2LsclHbtdVtxBFMLX_wxb4nPaZTwZ8hmxo_VfD6T-Ndv7AuESYXKdfb5obPESo5YvCCGlNs43EuYTiEixJe_Fmaqvux1cFugtKFbzjYvFVGkz2OAPkN6UfebMbYlbzdwHyTsSMDLeXNH0jbZXUw41BP9oUEkd0Jm0i0WUeOMQ32zKeHGe9INx2HWWihPVWaB')" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">The Academic</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Classic & Detailed</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Template Item 4 */}
              <div className="flex flex-col gap-6">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A technical resume layout" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAFbYqxJcHkYSabyhgDrxdNOOI7yDA0mXUibsewtdDMvzqX-RwGwTRZbYdDA5ZslN_kSZAaSQq4JQ6_v-6BeMeNN_xnjNRQ8UGyimgWSzENhqwKSIccx5RIYRk5eZXCxToGUew4nR-rHzLtS7XiA_7fPCBpjOknVHGeTRA9uP8SLICpaW7jo868YT9HRys9r7ezPNQDj-YRrreYLf_SWuWR7QYeAkU4hvYhdyOl5L8J2x12-5_RIkjuPYmSQ-1YAk6uahhyop619sv')" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">System Architect</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Technical & Dense</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Template Item 5 */}
              <div className="flex flex-col gap-6 mt-12">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A luxury sales director resume template" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE1mB6O5ZqL3x7CqFF-yVRjtxGUz9UCfQ1yxS3M-avaaZ6Pv9rNcW0P-wv2BeEvoKzZ-SlEc_wjHi58VV4IFinmW4RihCo7ytMugXhkesUheHCLW_OUI46EUcwUbjH0gBk0WC4fmf896rhTXq0B9RDRPyT5hffaeQsQ9iycH7oovZ5_UmFDgUDFFGHuQMZwlK4irQWrcTV-sMPm2_33YKs16N_dPCoqClUr8-wq1S8YeGkKzV7QjbEs82Cfdex3bllpNvJzzS1pbnd')" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">Global Director</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Luxury & Authority</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Template Item 6 */}
              <div className="flex flex-col gap-6">
                <div className="template-paper-sheet relative p-4 group">
                  <div className="binder-clip"></div>
                  <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" title="A clean, entry-level resume template" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRJZzR_MFbsdHwKt0Wzzh9P_Mjavtytgp10_eyRIZdZx_loOuV2PHwx8xp4CQp5siwc_UrENU_LNDhy9ZVcgqwJC_iW6hzDdbA_COUvr5oow-Wfc9hdhNIAwnffdZXF5gGzzMyvQk9YKYUYNaf3GccS_CvZ_HrNOYD0EjTTRCt2sGUMq6HP4aodzobE8DdyPnIidssTwOexpHYqduX12t0GRZ5Akjqtkvi1YL5hd6sNQ2oJqrKkRY80pdXyua8k6I8jQq57hqBf1QA')" }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-secondary-fixed-variant)]">Fresh Start</h3>
                    <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] italic">Approachable & Light</p>
                  </div>
                  <button className="stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cabinet Bottom Details */}
            <div className="mt-16 pt-8 border-t border-black/10 flex justify-center">
              <button className="px-12 py-4 bg-[var(--color-surface-container-high)] rounded-lg font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] shadow-md hover:shadow-lg transition-all border border-white/50 active:shadow-inner uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined">sync</span>
                Load More Records
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-12 bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-on-secondary-fixed-variant)] bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
        <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)]">
          © 2026 VIRTUAL DESK STUDIO
        </div>
        <div className="flex gap-[var(--spacing-gutter)]">
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
        </div>
      </footer>
    </>
  );
}
