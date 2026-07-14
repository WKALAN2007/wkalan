export function Footer() {
  return (
    <footer className="bg-[#111111] py-20">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-lg tracking-[-0.02em] text-white">
              WKALAN
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              品味人生，雕刻身份。
              <br />
              A digital identity studio.
            </p>
          </div>

          {/* Work */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
              Work
            </span>
            <a href="/basketball" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white/80">
              小白剪了個球
            </a>
            <a href="/fashion" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-white/80">
              NKSEN
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
              Contact
            </span>
            <a href="mailto:hello@wkalan.com" className="text-sm text-white/50 transition-colors hover:text-white/80">
              hello@wkalan.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} WKALAN. 品味人生，雕刻身份。
          </p>
        </div>
      </div>
    </footer>
  );
}
