"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  BookOpen, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  GraduationCap, 
  ChevronRight,
  PhoneCall,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks: { href: string; label: string; badge?: string }[] = [
  { href: "/", label: "Beranda" },
  { href: "/profile", label: "Profil & Sejarah" },
  { href: "/program", label: "Program Pesantren" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/berita", label: "Berita & Kegiatan" },
  { href: "/psb", label: "PSB 2026/2027" },
  { href: "/kontak", label: "Kontak & Lokasi" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-emerald-950 text-primary-1 text-xs sm:text-sm py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-semibold px-2.5 py-0.5 rounded-full text-xs border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              PSB T.A. 2026/2027
            </span>
            <span>Pendaftaran Santri Baru Al-Fattah Krapyak Kartasura Resmi Dibuka!</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a 
              href="https://wa.me/62882006454771" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Hotline PSB: +62 857-2800-4560</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Al-Fattah logo"
                width={48}
                height={48}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-emerald-950 tracking-tight leading-none group-hover:text-primary-7 transition-colors whitespace-nowrap">
                  AL-FATTAH
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider border border-amber-300">
                  Kartasura
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">
                Krapyak, Sukoharjo • Yayasan Insan Kamil
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "text-emerald-800 bg-emerald-50/80 font-bold"
                      : "text-slate-600 hover:text-emerald-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="bg-amber-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary-7/30 text-emerald-800 hover:bg-emerald-50 font-semibold"
            >
              <a href="https://wa.me/62882006454771" target="_blank" rel="noreferrer">
                <PhoneCall className="w-4 h-4 mr-1.5 text-emerald-600" />
                Konsultasi
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-900 hover:to-black text-white shadow-md shadow-emerald-900/20 font-bold"
            >
              <Link href="/psb">
                <UserCheck className="w-4 h-4 mr-1.5 text-amber-400" />
                Daftar PSB
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-sm"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isActive ? "bg-amber-400 text-emerald-950" : "bg-amber-500 text-white"
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                </Link>
              );
            })}
            
            <div className="pt-4 space-y-2.5 border-t border-slate-100 mt-2">
              <Button
                asChild
                className="w-full justify-center bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-6 text-base shadow-md"
              >
                <Link href="/psb" onClick={() => setMobileMenuOpen(false)}>
                  <GraduationCap className="w-5 h-5 mr-2 text-amber-400" />
                  Daftar PSB
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-center border-slate-300 text-slate-800 py-5 text-base font-semibold"
              >
                <a href="https://wa.me/62882006454771" target="_blank" rel="noreferrer">
                  <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" />
                  Hubungi Panitia PSB
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
