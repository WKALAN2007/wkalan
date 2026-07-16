import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-[#A0A09C]" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-[#1A1A1A]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1A1A1A]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
