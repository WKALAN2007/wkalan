export function UmiFooter() {
  return (
    <footer className="bg-[#1A2233] py-16 text-white/60">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-bold text-white">UMI</span>
            <p className="text-sm">Premium Japanese pet treats. From the sea to your pet&apos;s bowl.</p>
            <p className="text-xs text-white/20">Ehime, Japan</p>
          </div>
          {[
            { title: "Shop", links: ["Traditional", "Salmon Blended", "Low Sodium", "All Products"] },
            { title: "Learn", links: ["Our Story", "Research", "FAQ", "Blog"] },
            { title: "Connect", links: ["Contact", "Loyalty Program", "Wholesale", "Stockists"] },
          ].map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">{col.title}</span>
              {col.links.map((link) => (
                <a key={link} href="#" className="text-sm transition-colors hover:text-white">{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">We do not fish whales or dolphins.</p>
          <p className="text-xs text-white/20">&copy; 2026 UMI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
