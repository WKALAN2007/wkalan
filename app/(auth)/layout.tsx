// Auth route group — minimal layout (no site header/footer)
import type { Metadata } from "next"

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Account",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md px-4">{children}</div>
    </div>
  )
}
