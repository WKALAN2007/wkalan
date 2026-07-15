import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { IntroTransition } from "@/02_Design_System/components/IntroTransition";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

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
    "WKALAN is a digital identity studio. We don't build websites. We design spaces where real people can be found. 品味人生，雕刻身份。",
  keywords: [
    "digital identity",
    "creator website",
    "personal brand",
    "web design",
    "WKALAN",
    "数字身份",
    "创作者网站",
    "品味人生",
    "雕刻身份",
  ],
  authors: [{ name: "WKALAN" }],
  creator: "WKALAN",
  metadataBase: new URL("https://wkalan.com"),
  openGraph: {
    title: "WKALAN — 品味人生，雕刻身份",
    description:
      "We don't build websites. We design spaces where real people can be found.",
    siteName: "WKALAN",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WKALAN — 品味人生，雕刻身份",
    description:
      "We don't build websites. We design spaces where real people can be found.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-primary">
        <IntroTransition />
        {children}
      </body>
    </html>
  );
}
