"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      if (currentScroll > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-300 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back-To-Top Button with Smooth Scroll */}
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-emerald-950/90 text-amber-300 border border-amber-400/40 shadow-2xl flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer ${
          showBackToTop
            ? "opacity-100 translate-y-0 hover:bg-emerald-900 hover:scale-110 hover:border-amber-300"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 animate-pulse" />
      </button>
    </>
  );
}
