import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_SC } from "next/font/google";
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

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WKALAN — 线上，认真对待。",
    template: "%s — WKALAN",
  },
  description:
    "围绕你是谁而构建的定制网站。不用模板。从对话开始，不填表单。设计、开发、交付。",
  keywords: [
    "定制网站",
    "网页设计",
    "个人网站",
    "品牌设计",
    "WKALAN",
    "定制开发",
    "不用模板",
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
    title: "WKALAN — 线上，认真对待。",
    description:
      "围绕你是谁而构建的定制网站。不用模板。从对话开始，不填表单。",
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
    title: "WKALAN — 线上，认真对待。",
    description:
      "围绕你是谁而构建的定制网站。不用模板。从对话开始，不填表单。",
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
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifSC.variable} h-full antialiased`}
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
                "围绕你是谁而构建的定制网站。不用模板。从对话开始，不填表单。设计、开发、交付。",
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
