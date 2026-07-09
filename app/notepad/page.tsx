export default function Notepad() {
  return (
    <>
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-20 bg-[var(--color-surface)] shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <h1 className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-[var(--color-on-surface)] tracking-widest uppercase">CV GENERATOR</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors" href="#">Profile</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-1 font-bold" href="#">Templates</a>
          <a className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)] transition-colors" href="#">Export</a>
        </nav>
        <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2 rounded shadow-lg font-[family-name:var(--font-label-stamp)] text-[14px] hover:translate-y-0.5 transition-transform">
          DOWNLOAD
        </button>
      </header>

      {/* Side Navigation (Folders) */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-20 flex flex-col items-center py-[var(--spacing-component-gap)] bg-[var(--color-secondary-container)] border-r border-[var(--color-outline-variant)] shadow-[4px_0_8px_rgba(0,0,0,0.2)] rounded-r-xl z-40">
        <div className="mb-8 text-center px-2">
          <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] block">Project</span>
          <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-secondary-container)] font-bold">Desk</span>
        </div>
        <div className="flex flex-col gap-6 w-full items-center">
          <button className="w-12 h-12 flex items-center justify-center rounded-l-full bg-[var(--color-secondary)] text-[var(--color-on-secondary)] shadow-inner -translate-x-1">
            <span className="material-symbols-outlined" data-icon="person">person</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] transition-colors">
            <span className="material-symbols-outlined" data-icon="description">description</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] transition-colors">
            <span className="material-symbols-outlined" data-icon="ios_share">ios_share</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="pt-24 pb-20 px-4 md:pl-32 md:pr-12 flex justify-center min-h-screen">
        <div className="max-w-4xl w-full relative">
          
          {/* The Legal Pad */}
          <div className="bg-white paper-shadow rounded-sm overflow-hidden relative min-h-[1100px] flex flex-col">
            {/* Perforated Top Detail */}
            <div className="perforated-top"></div>
            
            {/* Notepad Header */}
            <div className="bg-[var(--color-surface-container-high)] h-12 flex items-center px-8 border-b border-[var(--color-outline-variant)]">
              <span className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase tracking-tighter">Subject: Professional Experience Log</span>
              <span className="ml-auto font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)]">Date: 12 Oct 2026</span>
            </div>
            
            {/* Paper Surface */}
            <div className="flex-grow legal-pad-grain p-10 md:p-16">
              <div className="legal-pad-margin absolute left-0 top-0 w-px h-full"></div>
              <div className="relative z-10 space-y-12">
                
                {/* Section: Identity Stamped */}
                <div className="stamped border-2 border-[var(--color-primary)]/20 p-4 inline-block transform -rotate-1">
                  <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-primary)] uppercase font-bold">Personal Details</h2>
                </div>
                
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Input Field 1 */}
                  <div className="space-y-2">
                    <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Full Name</label>
                    <div className="relative group">
                      <input className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" placeholder="e.g. Jonathan Deskman" type="text" />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                  </div>
                  
                  {/* Input Field 2 */}
                  <div className="space-y-2">
                    <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Job Title</label>
                    <div className="relative group">
                      <input className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" placeholder="Executive Suite Manager" type="text" />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                  </div>
                  
                  {/* Textarea Field */}
                  <div className="md:col-span-2 space-y-2 mt-4">
                    <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Professional Summary</label>
                    <div className="relative group">
                      <textarea className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all resize-none leading-[28px] outline-none" placeholder="Describe your career achievements here..." rows={6}></textarea>
                      {/* Visual Guide: Blue Lines in Textarea */}
                      <div className="absolute inset-0 pointer-events-none opacity-5 px-4 py-3 bg-[linear-gradient(rgba(135,206,235,1)_1px,transparent_1px)] bg-[length:100%_28px]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Section: Work History */}
                <div className="pt-8">
                  <div className="flex items-center justify-between border-b-2 border-dotted border-[var(--color-outline-variant)] pb-2 mb-8">
                    <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-secondary)] uppercase font-bold">Experience History</h2>
                    <button className="paperclip-btn flex items-center gap-2 px-4 py-1 rounded-sm text-[var(--color-secondary)] font-[family-name:var(--font-label-stamp)] text-[14px]">
                      <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                      ATTACH NEW RECORD
                    </button>
                  </div>
                  
                  {/* Bento-style Experience Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="p-6 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer">
                      <div className="absolute top-0 right-0 p-2 text-[var(--color-primary)] opacity-20 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined" data-icon="edit">edit</span>
                      </div>
                      <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] mb-1">2018 — PRESENT</p>
                      <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-surface)]">Senior Architect</h3>
                      <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] mt-2 italic">Metropolis Solutions Ltd.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] rounded-full">Leadership</span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] rounded-full">Strategy</span>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="p-6 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] rounded shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer">
                      <div className="absolute top-0 right-0 p-2 text-[var(--color-primary)] opacity-20 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined" data-icon="edit">edit</span>
                      </div>
                      <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-primary)] mb-1">2015 — 2018</p>
                      <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-surface)]">Lead Developer</h3>
                      <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] mt-2 italic">Digital Horizon Inc.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] rounded-full">Frontend</span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] rounded-full">System Design</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons Section */}
                <div className="flex flex-col md:flex-row gap-6 justify-end pt-12 border-t-2 border-dotted border-[var(--color-outline-variant)]">
                  <button className="paperclip-btn flex items-center justify-center gap-3 px-10 py-4 rounded-sm text-[var(--color-on-surface-variant)] font-[family-name:var(--font-label-stamp)] text-[14px] uppercase tracking-widest">
                    <span className="material-symbols-outlined" data-icon="delete">delete</span>
                    Clear All
                  </button>
                  <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] paper-shadow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 px-12 py-4 rounded-sm font-[family-name:var(--font-label-stamp)] text-[14px] uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined" data-icon="save">save</span>
                    Finalize Draft
                  </button>
                </div>
              </div>
            </div>
            {/* Subtle Texture Overlay for the Paper */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
          </div>
          
          {/* Floating Decoration: The Ruler */}
          <div className="hidden lg:block absolute -right-16 top-48 w-12 h-96 bg-yellow-100/90 border border-yellow-300 rounded-sm shadow-xl transform rotate-2 pointer-events-none">
            <div className="h-full flex flex-col justify-between py-2 px-1">
              <div className="w-full h-px bg-yellow-600/30"></div>
              <div className="w-1/2 h-px bg-yellow-600/30"></div>
              <div className="w-full h-px bg-yellow-600/30"></div>
              <div className="w-1/2 h-px bg-yellow-600/30"></div>
              <div className="w-full h-px bg-yellow-600/30"></div>
              <div className="w-1/2 h-px bg-yellow-600/30"></div>
              <div className="w-full h-px bg-yellow-600/30"></div>
              <div className="w-1/2 h-px bg-yellow-600/30"></div>
              <div className="w-full h-px bg-yellow-600/30"></div>
              <div className="w-1/2 h-px bg-yellow-600/30"></div>
              <div className="w-full h-px bg-yellow-600/30"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-12 bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-on-secondary-fixed-variant)] shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
        <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] opacity-80">
          © 2026 VIRTUAL DESK STUDIO
        </div>
        <div className="flex gap-6">
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] hover:opacity-100 transition-opacity" href="#">Terms</a>
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] hover:opacity-100 transition-opacity" href="#">Privacy</a>
        </div>
      </footer>
    </>
  );
}
