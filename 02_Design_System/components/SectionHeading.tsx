import { cn } from "@/02_Design_System/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label && (
        <span className="text-sm font-medium uppercase tracking-[var(--tracking-wide)] text-text-secondary">
          {label}
        </span>
      )}
      <h2 className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-lg text-lg leading-[var(--leading-relaxed)] text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
