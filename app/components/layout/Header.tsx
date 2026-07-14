"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-20 bg-[var(--color-surface)] shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]">
      <Link href="/dashboard" className="flex items-center gap-4">
        <h1 className="font-[family-name:var(--font-headline-md)] text-[24px] font-bold text-[var(--color-on-surface)] tracking-widest uppercase">
          CV GENERATOR
        </h1>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link 
          href="/notepad" 
          className={`font-[family-name:var(--font-label-stamp)] text-[14px] transition-colors pb-1 ${pathname === '/notepad' ? 'text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] font-bold' : 'text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)]'}`}
        >
          Profile
        </Link>
        <Link 
          href="/templates" 
          className={`font-[family-name:var(--font-label-stamp)] text-[14px] transition-colors pb-1 ${pathname === '/templates' ? 'text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] font-bold' : 'text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)]'}`}
        >
          Templates
        </Link>
        <Link 
          href="/export" 
          className={`font-[family-name:var(--font-label-stamp)] text-[14px] transition-colors pb-1 ${pathname === '/export' ? 'text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] font-bold' : 'text-[var(--color-on-surface-variant)] opacity-80 hover:text-[var(--color-primary)]'}`}
        >
          Export
        </Link>
      </nav>
      <Link href="/export">
        <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2 rounded shadow-lg font-[family-name:var(--font-label-stamp)] text-[14px] hover:translate-y-0.5 transition-transform uppercase tracking-widest">
          Download
        </button>
      </Link>
    </header>
  );
}
