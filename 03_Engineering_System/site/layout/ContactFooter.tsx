export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--wk-text-tertiary)] bg-[var(--wk-bg)] border-t border-[var(--wk-border)]">
      <span>© WKALAN {year}</span>
      <a
        href="mailto:hello@wkalan.com"
        className="hover:text-[var(--wk-text-secondary)] transition-colors"
      >
        hello@wkalan.com
      </a>
    </footer>
  );
}
