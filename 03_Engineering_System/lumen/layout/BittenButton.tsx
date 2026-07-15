"use client";

import { ReactNode } from "react";

interface BittenButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "accent";
  className?: string;
}

export function BittenButton({ children, href, onClick, variant = "default", className = "" }: BittenButtonProps) {
  const baseClass = `lumen-btn-bitten ${variant === "accent" ? "lumen-btn-bitten--accent" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
