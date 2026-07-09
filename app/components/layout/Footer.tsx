export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-[var(--spacing-desktop-margin)] h-12 bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-on-secondary-fixed-variant)] bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
      <div className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] opacity-80">
        © 2026 VIRTUAL DESK STUDIO
      </div>
      <div className="flex gap-[var(--spacing-gutter)]">
        <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
        <a className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
      </div>
    </footer>
  );
}
