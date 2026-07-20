/**
 * Simple footer — copyright + email.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between px-6 py-8 text-sm text-neutral-400 bg-white border-t border-neutral-100">
      <span>
        {/* ══ UPDATE: client name ══ */}
        © CLIENT {year}
      </span>
      <a
        href="mailto:hello@client.com"
        className="hover:text-neutral-700 transition-colors"
      >
        {/* ══ UPDATE: email ══ */}
        hello@client.com
      </a>
    </footer>
  );
}
