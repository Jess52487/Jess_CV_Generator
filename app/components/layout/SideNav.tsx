"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const getNavClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "w-12 h-12 flex items-center justify-center bg-[var(--color-secondary)] text-[var(--color-on-secondary)] rounded-t-xl md:rounded-t-none md:rounded-l-full shadow-inner -translate-y-1 md:translate-y-0 md:-translate-x-1 transition-transform cursor-pointer";
    }
    return "w-12 h-12 flex items-center justify-center text-[var(--color-on-secondary-container)] hover:bg-[var(--color-secondary-fixed)] rounded-xl transition-all group cursor-pointer";
  };

  const getIconClass = (path: string) => {
    const isActive = pathname === path;
    return `material-symbols-outlined ${!isActive ? 'group-hover:text-[var(--color-secondary)]' : ''}`;
  };

  return (
    <aside className="fixed bottom-0 md:bottom-auto left-0 md:top-20 w-full h-16 md:h-[calc(100vh-80px)] md:w-20 flex flex-row md:flex-col justify-around md:justify-start items-center md:py-[var(--spacing-component-gap)] bg-[var(--color-secondary-container)] rounded-t-xl md:rounded-t-none md:rounded-r-xl border-t md:border-t-0 md:border-r border-[var(--color-outline-variant)] shadow-[0_-4px_8px_rgba(0,0,0,0.2)] md:shadow-[4px_0_8px_rgba(0,0,0,0.2)] z-50 print:hidden">
      <div className="hidden md:flex mb-8 flex-col items-center px-2 text-center">
        <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-secondary)] block">Project</span>
        <span className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-secondary-container)] font-bold">Desk</span>
      </div>
      <div className="flex flex-row md:flex-col gap-4 md:gap-8 w-full md:w-auto items-center justify-around md:justify-center px-4 md:px-0">
        <Link href="/notepad">
          <div className={getNavClass('/notepad')}>
            <span className={getIconClass('/notepad')} style={pathname === '/notepad' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
          </div>
        </Link>
        <Link href="/templates">
          <div className={getNavClass('/templates')}>
            <span className={getIconClass('/templates')} style={pathname === '/templates' ? { fontVariationSettings: "'FILL' 1" } : {}}>description</span>
          </div>
        </Link>
        <Link href="/export">
          <div className={getNavClass('/export')}>
            <span className={getIconClass('/export')} style={pathname === '/export' ? { fontVariationSettings: "'FILL' 1" } : {}}>ios_share</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
