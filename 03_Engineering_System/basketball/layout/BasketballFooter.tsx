export function BasketballFooter() {
  return (
    <footer className="bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-sm font-bold tracking-[0.1em] text-[#c9a84c]">
            小白剪了個球
          </span>
          <p className="text-sm italic text-[#888888]">
            &ldquo;不做快餐式剪辑&rdquo;
          </p>
          <div className="flex flex-col items-center gap-1 text-xs text-[#555555]">
            <span>&copy; 2025 小白剪了個球</span>
            <span>
              Designed by{" "}
              <a
                href="https://wkalan2007.github.io/wkalanpersonalwebsite/#library"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] transition-colors hover:text-[#d4af37]"
              >
                WKALAN
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
