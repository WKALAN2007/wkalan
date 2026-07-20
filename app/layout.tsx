import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WKALAN — 做一个围绕你的网站",
    template: "%s — WKALAN",
  },
  description:
    "帮人做网站。快。干净。不套模板。从一次对话开始，五到七天，一个围绕你的网站上线。",
  keywords: [
    "做网站",
    "定制网站",
    "创作者网站",
    "个人网站",
    "WKALAN",
    "网站定制",
  ],
  authors: [{ name: "WKALAN" }],
  creator: "WKALAN",
  metadataBase: new URL("https://wkalan.vercel.app"),
  alternates: {
    canonical: "https://wkalan.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://wkalan.vercel.app",
    title: "WKALAN — 做一个围绕你的网站",
    description:
      "帮人做网站。快。干净。不套模板。从一次对话开始，五到七天，一个围绕你的网站上线。",
    siteName: "WKALAN",
    images: [
      {
        url: "/share-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WKALAN — 做一个围绕你的网站",
    description:
      "帮人做网站。快。干净。不套模板。从一次对话开始，五到七天，一个围绕你的网站上线。",
    images: ["/share-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent browser scroll restoration on reload — critical for
            Lenis + ScrollTrigger sync. Mirrors meinhardtaxer.com. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`,
          }}
        />

        {/* JSON-LD structured data — mirrors meinhardtaxer.com schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WKALAN",
              url: "https://wkalan.vercel.app",
              image: "https://wkalan.vercel.app/share-image.jpg",
              description:
                "帮人做网站。快。干净。不套模板。从一次对话开始，一个围绕你的网站上线。",
              email: "mailto:hello@wkalan.com",
              sameAs: ["https://www.instagram.com"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
