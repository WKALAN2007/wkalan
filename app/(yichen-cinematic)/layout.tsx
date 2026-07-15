"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { CinematicHeader } from "@/03_Engineering_System/yichen-cinematic/layout/CinematicHeader";
import { CinematicFooter } from "@/03_Engineering_System/yichen-cinematic/layout/CinematicFooter";
import { CinematicCursor } from "@/03_Engineering_System/yichen-cinematic/layout/CinematicCursor";

export default function YichenCinematicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <SmoothScroll />
      <CinematicCursor />
      <CinematicHeader />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <CinematicFooter />
    </>
  );
}
