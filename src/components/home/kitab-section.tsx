"use client";

import { useState } from "react";
import { BookOpen, Sparkles, CheckCircle2, Bookmark, ArrowRight, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const kitabData = [
  {
    category: "Nahwu & Sharaf",
    items: [
      {
        title: "Kitab Amtsilati",
        author: "KH. Taufiqul Hakim",
        desc: "Metode praktis membaca kitab kuning & memahami gramatika bahasa Arab dalam waktu relatif singkat untuk santri pemula.",
        level: "Tingkat Dasar / Ibtida'i",
        icon: "📘"
      },
      {
        title: "Matan Al-Jurumiyah",
        author: "Syekh As-Shanhaji",
        desc: "Fondasi kaidah tata bahasa Arab mencakup I'rab, Marfu'at, Manshubat, dan Mahfudhat Al-Asma'.",
        level: "Tingkat Menengah / Wustho",
        icon: "📗"
      },
      {
        title: "Alfiyah Ibn Malik",
        author: "Al-Imam Ibn Malik Al-Andalusi",
        desc: "1.000 bait nadhom tata bahasa Arab tingkat lanjut yang dihafalkan dan dikaji secara mendalam dengan sorogan.",
        level: "Tingkat Lanjut / 'Ulya",
        icon: "📙"
      }
    ]
  },
  {
    category: "Tasawuf & Akhlaq",
    items: [
      {
        title: "Ta'lim Muta'allim",
        author: "Syekh Az-Zarnuji",
        desc: "Panduan etika, niat, menghormati guru & kitab, serta keberkahan dalam menuntut ilmu bagi santri.",
        level: "Wajib Santri Baru",
        icon: "📜"
      },
      {
        title: "Nashoihul Ibad",
        author: "Syekh Nawawi Al-Bantani",
        desc: "Nasihat-nasihat spiritual dan tazkiyatun nufus untuk memperhalus jiwa dan membentuk karakter ikhlas.",
        level: "Kajian Pengajian Rutin",
        icon: "📖"
      },
      {
        title: "Washoya Al-Abaa' lil Abnaa'",
        author: "Syekh Muhammad Syakir",
        desc: "Pesan-pesan kebaikan ayah kepada anaknya mengenai pergaulan, akhlak sehati-hari, dan ketaatan ibadah.",
        level: "Tingkat Dasar",
        icon: "✨"
      }
    ]
  },
  {
    category: "Fiqih & Muamalah",
    items: [
      {
        title: "Fathul Qorib Al-Mujib",
        author: "Syekh Ibn Qasim Al-Ghazi",
        desc: "Syarah fiqih madzhab Imam Asy-Syafi'i mencakup Thaharah, Shalat, Zakat, Puasa, Muamalah, hingga Jinayah.",
        level: "Tingkat Menengah",
        icon: "⚖️"
      },
      {
        title: "Safinatun Najah",
        author: "Syekh Salim bin Samir Al-Hadhrami",
        desc: "Ringkasan hukum rukun Islam & fiqih ibadah dasar yang praktis dihafalkan dan dipahami santri.",
        level: "Tingkat Dasar",
        icon: "⛵"
      },
      {
        title: "Majalisus Tsaniyah",
        author: "Syekh Ahmad bin Syekh Al-Fasyani",
        desc: "Hadits-hadits pilihan seputar keutamaan ibadah, bulan-bulan mulia, dan amalan sunnah.",
        level: "Kajian Mingguan",
        icon: "🌙"
      }
    ]
  }
];

export function KitabSection() {
  const [activeCategory, setActiveCategory] = useState("Nahwu & Sharaf");

  const currentCategory = kitabData.find(c => c.category === activeCategory) || kitabData[0];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-6/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-primary-10 px-3.5 py-1.5 rounded-full border border-primary-8 inline-flex items-center gap-1.5">
            <Library className="w-4 h-4 text-amber-400" />
            Literasi Turats Salaf-Modern
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Koleksi Kitab Kuning Kurikulum Al-Fattah
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Kurikulum pengajian terstruktur melatih santri membaca, memahami gramatika (Nahwu-Sharaf), serta mengamalkan hukum fiqih & akhlaq tasawuf.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {kitabData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.category
                    ? "bg-amber-500 text-primary-10 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-primary-10/80 text-slate-300 hover:bg-primary-9 border border-primary-8"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Kitab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentCategory.items.map((kitab, idx) => (
            <div 
              key={idx}
              className="bg-primary-10/80 border border-primary-8/80 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-amber-400/50 hover:bg-primary-9/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{kitab.icon}</span>
                  <span className="bg-primary-9/90 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-primary-7">
                    {kitab.level}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white group-hover:text-amber-300 transition-colors">
                    {kitab.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    Karya: {kitab.author}
                  </p>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {kitab.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-primary-9/90 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-4" />
                  Metode Sorogan & Bandongan
                </span>
                <Bookmark className="w-4 h-4 text-amber-400/80" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bg-primary-10/90 border border-amber-500/30 rounded-3xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-extrabold text-lg text-white">Ingin Mengikuti Pengajian Kitab atau Diniyah?</h4>
            <p className="text-xs text-slate-300">Terbuka untuk Santri Mukim, Santri Mahasiswa Krapyak, maupun Masyarakat Umum.</p>
          </div>
          <Button asChild className="bg-amber-500 hover:bg-amber-400 text-primary-10 font-bold px-6 py-5 shrink-0">
            <Link href="/program">
              Jadwal Pengajian Lengkap
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
