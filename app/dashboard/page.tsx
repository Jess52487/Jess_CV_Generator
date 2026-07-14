"use client";

import Header from "../components/layout/Header";
import SideNav from "../components/layout/SideNav";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const router = useRouter();

  // Local state for folders (starts empty)
  const [folders, setFolders] = useState<any[]>([]);

  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFolders(folders.filter(f => f.id !== id));
  };

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/notepad");
  };

  return (
    <>
      <Header />
      <SideNav />

      <div className="lamp-light"></div>

      <main className="pt-32 pb-24 px-[var(--spacing-desktop-margin)] flex justify-center min-h-screen relative z-20 md:pl-32">
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
              <Link href="/notepad">
                <button className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-6 py-3 rounded-full font-[family-name:var(--font-label-stamp)] text-[14px] uppercase flex items-center gap-2 stamp-button">
                  <span className="material-symbols-outlined text-sm">add</span> New Document
                </button>
              </Link>
            </div>
          </div>

          {/* Bento Grid of Manila Folders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {folders.map(folder => (
              <div key={folder.id} className="manila-folder p-6 flex flex-col h-64 cursor-pointer hover:scale-[0.98] transition-transform" onClick={() => router.push("/notepad")}>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-[var(--color-on-secondary-container)]">folder_open</span>
                  <span className={`font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-surface)] px-2 py-0.5 rounded ${folder.color}`}>{folder.type}</span>
                </div>
                <div className={`paper-sheet flex-grow p-4 mb-4 border-t-4 ${folder.border}`}>
                  <h3 className="font-[family-name:var(--font-headline-md)] text-[var(--color-on-surface)] text-lg leading-tight mb-1">{folder.name}</h3>
                  <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-outline)] uppercase">Last edited: {folder.time}</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-1 bg-[var(--color-surface-container-highest)] w-full rounded"></div>
                    <div className="h-1 bg-[var(--color-surface-container-highest)] w-3/4 rounded"></div>
                    {folder.id === 1 && <div className="h-1 bg-[var(--color-surface-container-highest)] w-5/6 rounded"></div>}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button onClick={handleAction} className="text-[var(--color-primary)] hover:underline font-[family-name:var(--font-label-stamp)] text-[10px] uppercase">
                    {folder.actionText}
                  </button>
                  <button onClick={(e) => handleDelete(folder.id, e)} className="material-symbols-outlined text-[var(--color-outline)] text-lg cursor-pointer hover:text-[var(--color-error)] transition-colors border-none bg-transparent">
                    delete
                  </button>
                </div>
              </div>
            ))}

            {/* Create New Placeholder */}
            <Link href="/notepad">
              <div className="border-2 border-dashed border-[var(--color-outline-variant)] rounded-xl flex flex-col items-center justify-center h-64 hover:border-[var(--color-primary-fixed)] transition-colors group cursor-pointer w-full">
                <div className="w-16 h-16 rounded-full bg-[var(--color-surface-container-highest)] flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                  <span className="material-symbols-outlined text-[var(--color-outline)] group-hover:text-[var(--color-primary)] text-3xl">post_add</span>
                </div>
                <p className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-outline)] group-hover:text-[var(--color-primary)] uppercase tracking-widest">Add Archive</p>
              </div>
            </Link>
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
                <span className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-primary-fixed)] leading-tight">{folders.length}/50</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
