"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const COLUMNS = 4;

function ColumnOverlay({ index, isExiting }: { index: number; isExiting: boolean }) {
  return (
    <motion.div
      className="fixed inset-0 z-[300] bg-[#1A1A18]"
      style={{ left: `${(100 / COLUMNS) * index}%`, width: `${100 / COLUMNS}%` }}
      initial={{ scaleY: 0, transformOrigin: "top" }}
      animate={
        isExiting
          ? { scaleY: 1, transformOrigin: "top" }
          : { scaleY: 0, transformOrigin: "bottom" }
      }
      exit={{ scaleY: 0, transformOrigin: "bottom" }}
      transition={{
        duration: 0.6,
        delay: isExiting ? index * 0.06 : (COLUMNS - 1 - index) * 0.06,
        ease: [0.65, 0, 0.35, 1],
      }}
    />
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPrevPathname(pathname);
        setIsTransitioning(false);
      }, COLUMNS * 60 + 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning &&
          Array.from({ length: COLUMNS }).map((_, i) => (
            <ColumnOverlay key={i} index={i} isExiting={true} />
          ))}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
