export default function Dashboard() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-20 bg-[var(--color-surface-container-high)] shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-[var(--color-on-surface)] tracking-widest uppercase">
            CV GENERATOR
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-[var(--color-on-surface-variant)] font-[family-name:var(--font-label-stamp)] text-[14px] hover:text-[var(--color-primary)] transition-colors" href="#">Profile</a>
          <a className="text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-1 font-bold font-[family-name:var(--font-label-stamp)] text-[14px]" href="#">Templates</a>
          <a className="text-[var(--color-on-surface-variant)] font-[family-name:var(--font-label-stamp)] text-[14px] hover:text-[var(--color-primary)] transition-colors" href="#">Export</a>
        </nav>
        <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] font-[family-name:var(--font-label-stamp)] text-[14px] px-6 py-2 rounded-lg stamp-button hover:bg-[var(--color-surface-tint)] transition-all uppercase tracking-widest">
          Download
        </button>
      </header>

      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-20 flex flex-col items-center py-[var(--spacing-component-gap)] bg-[var(--color-secondary-container)] border-r border-[var(--color-outline-variant)] shadow-[4px_0_8px_rgba(0,0,0,0.2)] rounded-r-xl z-40">
        <div className="mb-8 flex flex-col items-center">
          <span className="material-symbols-outlined text-[var(--color-secondary)] text-3xl">desk</span>
          <span className="text-[8px] font-[family-name:var(--font-label-embossed)] uppercase tracking-tighter text-[var(--color-secondary)] mt-1">Desk</span>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="group relative flex items-center justify-center w-full">
            <button className="w-12 h-12 flex items-center justify-center rounded-full text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] transition-all">
              <span className="material-symbols-outlined">person</span>
            </button>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[var(--color-on-surface)] text-[var(--color-surface)] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Profile</span>
          </div>
          <div className="group relative flex items-center justify-center w-full">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-on-secondary)] shadow-inner -translate-x-1">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            </button>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[var(--color-on-surface)] text-[var(--color-surface)] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Templates</span>
          </div>
          <div className="group relative flex items-center justify-center w-full">
            <button className="w-12 h-12 flex items-center justify-center rounded-full text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] transition-all">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
            <span className="absolute left-full ml-2 px-2 py-1 bg-[var(--color-on-surface)] text-[var(--color-surface)] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Export</span>
          </div>
        </div>
      </aside>

      <div className="lamp-light"></div>

      <main className="pt-32 pb-24 px-[var(--spacing-desktop-margin)] flex justify-center min-h-screen relative z-20">
        {/* Main Portfolio Content */}
        <div className="leather-portfolio w-full max-w-5xl rounded-lg p-8 md:p-12 relative flex flex-col">
          <div className="stitch-border absolute inset-4 pointer-events-none rounded"></div>

          {/* Portfolio Header */}
          <div className="relative z-10 mb-12 flex justify-between items-end">
            <div>
              <h1 className="font-[family-name:var(--font-headline-lg)] text-[40px] text-[var(--color-primary-fixed)] mb-2 tracking-tight">Recent Documents</h1>
              <p className="font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-surface-variant)] opacity-80 italic">Curated Professional Portfolio</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-6 py-3 rounded-full font-[family-name:var(--font-label-stamp)] text-[14px] uppercase flex items-center gap-2 stamp-button">
                <span className="material-symbols-outlined text-sm">add</span> New Document
              </button>
            </div>
          </div>

          {/* Bento Grid of Manila Folders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Folder 1 */}
            <div className="manila-folder p-6 flex flex-col h-64 cursor-pointer hover:scale-[0.98] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-[var(--color-on-secondary-container)]">folder_open</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] bg-[var(--color-on-secondary-fixed-variant)] text-[var(--color-surface)] px-2 py-0.5 rounded">PDF</span>
              </div>
              <div className="paper-sheet flex-grow p-4 mb-4 border-t-4 border-[var(--color-primary)]">
                <h3 className="font-[family-name:var(--font-headline-md)] text-[var(--color-on-surface)] text-lg leading-tight mb-1">Executive_Dir_v2</h3>
                <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-outline)] uppercase">Last edited: 2 hours ago</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1 bg-[var(--color-surface-container-highest)] w-full rounded"></div>
                  <div className="h-1 bg-[var(--color-surface-container-highest)] w-3/4 rounded"></div>
                  <div className="h-1 bg-[var(--color-surface-container-highest)] w-5/6 rounded"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-[var(--color-primary)] hover:underline font-[family-name:var(--font-label-stamp)] text-[10px] uppercase">Edit Suite</button>
                <span className="material-symbols-outlined text-[var(--color-outline)] text-lg cursor-pointer hover:text-[var(--color-error)] transition-colors">delete</span>
              </div>
            </div>

            {/* Folder 2 */}
            <div className="manila-folder p-6 flex flex-col h-64 cursor-pointer hover:scale-[0.98] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-[var(--color-on-secondary-container)]">folder_open</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] bg-[var(--color-secondary)] text-[var(--color-on-secondary)] px-2 py-0.5 rounded">Draft</span>
              </div>
              <div className="paper-sheet flex-grow p-4 mb-4 border-t-4 border-[var(--color-secondary)]">
                <h3 className="font-[family-name:var(--font-headline-md)] text-[var(--color-on-surface)] text-lg leading-tight mb-1">Tech_Lead_Google</h3>
                <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-outline)] uppercase">Last edited: Oct 24, 2023</p>
                <div className="mt-4 space-y-2">
                  <div className="h-1 bg-[var(--color-surface-container-highest)] w-full rounded"></div>
                  <div className="h-1 bg-[var(--color-surface-container-highest)] w-1/2 rounded"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-[var(--color-primary)] hover:underline font-[family-name:var(--font-label-stamp)] text-[10px] uppercase">Continue Working</button>
                <span className="material-symbols-outlined text-[var(--color-outline)] text-lg cursor-pointer hover:text-[var(--color-error)] transition-colors">delete</span>
              </div>
            </div>

            {/* Folder 3 */}
            <div className="manila-folder p-6 flex flex-col h-64 cursor-pointer hover:scale-[0.98] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-[var(--color-on-secondary-container)]">folder_open</span>
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] bg-[var(--color-on-secondary-fixed-variant)] text-[var(--color-surface)] px-2 py-0.5 rounded">Shared</span>
              </div>
              <div className="paper-sheet flex-grow p-4 mb-4 border-t-4 border-[var(--color-primary)]">
                <h3 className="font-[family-name:var(--font-headline-md)] text-[var(--color-on-surface)] text-lg leading-tight mb-1">Creative_CV_Pink</h3>
                <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-outline)] uppercase">Last edited: 5 days ago</p>
                <div className="mt-4 flex gap-1">
                  <div className="w-4 h-4 bg-[var(--color-error)] rounded-full"></div>
                  <div className="w-4 h-4 bg-[var(--color-primary-container)] rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-[var(--color-primary)] hover:underline font-[family-name:var(--font-label-stamp)] text-[10px] uppercase">Share Link</button>
                <span className="material-symbols-outlined text-[var(--color-outline)] text-lg cursor-pointer hover:text-[var(--color-error)] transition-colors">delete</span>
              </div>
            </div>

            {/* Create New Placeholder */}
            <div className="border-2 border-dashed border-[var(--color-outline-variant)] rounded-xl flex flex-col items-center justify-center h-64 hover:border-[var(--color-primary-fixed)] transition-colors group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                <span className="material-symbols-outlined text-[var(--color-outline)] group-hover:text-[var(--color-primary)] text-3xl">post_add</span>
              </div>
              <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-outline)] group-hover:text-[var(--color-primary)] uppercase tracking-widest">Add Archive</p>
            </div>
          </div>

          {/* Footer Section inside Portfolio */}
          <div className="mt-16 pt-8 border-t border-[var(--color-on-secondary-fixed-variant)] flex justify-between items-center relative z-10">
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-surface-variant)] uppercase">Storage</span>
                <div className="w-32 h-2 bg-[var(--color-on-secondary-fixed-variant)] rounded-full mt-1">
                  <div className="w-1/3 h-full bg-[var(--color-primary-container)] rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-surface-variant)] uppercase">Total Files</span>
                <span className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-primary-fixed)] leading-tight">12/50</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-[var(--spacing-desktop-margin)] py-2 bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-on-secondary-fixed-variant)] shadow-[0_-4px_12px_rgba(0,0,0,0.4)]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }}>
        <span className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] opacity-80">© 2026 Virtual Desk Studio</span>
        <div className="flex gap-6">
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
          <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
        </div>
      </footer>
    </>
  );
}
