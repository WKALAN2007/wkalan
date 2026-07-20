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
    default: "WKALAN — 品味人生，雕刻身份",
    template: "%s — WKALAN",
  },
  description:
    "WKALAN 是一个数字身份工作室。我们品味一个人的人生，然后雕刻出一个数字身份——一个让陌生人走进去，离开时感觉自己认识了一个人的空间。",
  keywords: [
    "数字身份",
    "Digital Identity",
    "创作者网站",
    "个人品牌",
    "B站创作者",
    "YouTuber网站",
    "WKALAN",
    "网站定制",
    "品味人生",
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
    title: "WKALAN — 品味人生，雕刻身份",
    description:
      "WKALAN 是一个数字身份工作室。我们品味一个人的人生，然后雕刻出一个数字身份——一个让陌生人走进去，离开时感觉自己认识了一个人的空间。",
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
    title: "WKALAN — 品味人生，雕刻身份",
    description:
      "WKALAN 是一个数字身份工作室。我们品味一个人的人生，然后雕刻出一个数字身份——一个让陌生人走进去，离开时感觉自己认识了一个人的空间。",
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
                "WKALAN 是一个数字身份工作室。品味人生，雕刻身份——让每一个人在互联网上被真正了解。",
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
