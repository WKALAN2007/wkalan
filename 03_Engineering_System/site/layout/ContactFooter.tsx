export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-400 bg-white border-t border-neutral-100">
      <span>© WKALAN {year}</span>
      <a
        href="mailto:hello@wkalan.com"
        className="hover:text-neutral-700 transition-colors"
      >
        hello@wkalan.com
      </a>
    </footer>
  );
}
