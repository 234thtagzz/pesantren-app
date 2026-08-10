"use client";

import { useState, useEffect } from "react";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap,
  Heart,
  Award,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Semua", "Santri Mahasiswa", "Wali Santri", "Alumni"];

const testimonials = [
  {
    id: 1,
    name: "Ahmad Fauzi, S.Pd.",
    role: "Alumni Santri Mahasiswa — Lulusan UIN Raden Mas Said Surakarta",
    category: "Santri Mahasiswa",
    text: "Tinggal di Pesantren Al-Fattah Krapyak membuat masa kuliah saya sangat berkah. Saya bisa lulus kuliah tepat waktu sambil mendalami kitab Amtsilati dan Alfiyah bersama Dr. KH. Moh. Mahbub.",
    avatar: "AF",
    year: "Lulusan 2024",
    highlight: "Alumni UIN Surakarta",
    rating: 5,
    location: "Krapyak, Kartasura"
  },
  {
    id: 2,
    name: "Dr. H. Hendra Wijaya, Sp.PD",
    role: "Wali Santri Mukim (Orang Tua Ananda Hilmi)",
    category: "Wali Santri",
    text: "Alhamdulillah putra kami menjadi lebih mandiri, shalatnya tepat waktu berjamaah di masjid, dan akhlaqnya sangat santun. Terbukti motto Al-Fattah membimbing santri dengan hati dan keikhlasan.",
    avatar: "HW",
    year: "Wali Santri 2025",
    highlight: "Wali Santri Mukim",
    rating: 5,
    location: "Sukoharjo"
  },
  {
    id: 3,
    name: "Nurul Annisa, S.Ag.",
    role: "Alumni Santri Putri — Pengajar Madrasah Diniyah Sukoharjo",
    category: "Alumni",
    text: "Lingkungan pesantren di Krapyak sangat aman dan penuh ukhuwah. Pengajian kitab Fathul Qorib dan Ta'lim Muta'allim yang diampu Dr. Hj. Kamila Adnani menjadi bekal hidup yang tak ternilai.",
    avatar: "NA",
    year: "Alumni 2023",
    highlight: "Pengajar Madin",
    rating: 5,
    location: "Surakarta"
  },
  {
    id: 4,
    name: "Muhammad Rayhan",
    role: "Santri Mukim Mahasiswa — UMS Surakarta (Teknik Informatika)",
    category: "Santri Mahasiswa",
    text: "Jadwal ngaji di Al-Fattah sangat pas dengan jam perkuliahan. Suasana kamar Krapyak tenang, didukung WiFi cepat untuk mengerjakan tugas koding dan tugas kuliah akhir.",
    avatar: "MR",
    year: "Santri Aktif 2026",
    highlight: "Mahasiswa UMS",
    rating: 5,
    location: "Kartasura"
  },
  {
    id: 5,
    name: "Hj. Siti Rahmah, M.Pd.",
    role: "Wali Santriwati (Orang Tua Ananda Fatimah - Krapyak)",
    category: "Wali Santri",
    text: "Kami sangat bersyukur putri kami diajarkan kemandirian dan keikhlasan. Penjagaan pengasuhan Nyai Hj. Kamila Adnani membuat kami tenang melepas putri menuntut ilmu.",
    avatar: "SR",
    year: "Wali Santri 2026",
    highlight: "Wali Santri Putri",
    rating: 5,
    location: "Surakarta"
  },
  {
    id: 6,
    name: "Ust. Bilfaqih, Lc., M.H.",
    role: "Alumni Pesantren Al-Fattah — Pengajar & Praktisi Hukum Islam",
    category: "Alumni",
    text: "Gemblengan tata bahasa Arab Alfiyah Ibn Malik dan Bahtsul Masail di Al-Fattah menjadi dasar kuat ketika saya menempuh studi hukum Islam dan karir profesional.",
    avatar: "BF",
    year: "Alumni 2021",
    highlight: "Alumni & Pengajar",
    rating: 5,
    location: "Semarang"
  },
  {
    id: 7,
    name: "Fatimah Az-Zahra",
    role: "Santriwati Tahfizh & Mahasiswi UNS Surakarta",
    category: "Santri Mahasiswa",
    text: "Mampu menjaga hafalan Al-Qur'an sambil berprestasi akademik di universitas adalah impian saya. Di Al-Fattah, halaqah setoran subuh sangat konsisten dan memotivasi.",
    avatar: "FA",
    year: "Santri Aktif 2026",
    highlight: "Mahasiswi UNS",
    rating: 5,
    location: "Solo"
  },
  {
    id: 8,
    name: "Bapak Darmawan",
    role: "Tokoh Masyarakat Krapyak Kartasura",
    category: "Wali Santri",
    text: "Keberadaan Pesantren Al-Fattah di Krapyak sangat memberikan keberkahan bagi warga sekitar. Santri-santrinya ramah, santun, dan rajin memakmurkan masjid.",
    avatar: "BD",
    year: "Tokoh Krapyak",
    highlight: "Warga Krapyak",
    rating: 5,
    location: "Krapyak Kartasura"
  }
];

export function TestimoniSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeCategory === "Semua" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentItem = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-950 via-slate-950 to-emerald-950 text-white relative overflow-hidden">
      {/* Background Lighting & Geometric Mesh Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header & Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-emerald-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900/80 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Suara Santri & Pengalaman Wali
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Apresiasi & Testimoni Santri Al-Fattah
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Pengalaman otentik dalam membentuk karakter, kajian kitab kuning turats, dan keikhlasan menuntut ilmu di Krapyak Kartasura.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-500 text-emerald-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-emerald-900/60 text-slate-300 hover:bg-emerald-800 border border-emerald-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Ultra-Premium Spotlight Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Spotlight Quote Card */}
          <div className="lg:col-span-8">
            <div className="relative bg-gradient-to-br from-emerald-900/90 via-emerald-950/95 to-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl min-h-[380px] flex flex-col justify-between overflow-hidden group">
              
              {/* Giant Metallic Background Quote Watermark */}
              <Quote className="w-36 h-36 text-amber-500/10 absolute -top-4 -right-4 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              
              <div className="space-y-6 relative z-10">
                {/* Top Badge & Rating Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-500/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full border border-amber-500/40">
                      {currentItem.highlight}
                    </span>
                    <span className="bg-emerald-900/80 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-700">
                      📍 {currentItem.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800 text-amber-400">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="text-xs font-extrabold text-white ml-1">5.0</span>
                  </div>
                </div>

                {/* Main Quote Content */}
                <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic">
                  &ldquo;{currentItem.text}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-8 border-t border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-emerald-950 font-extrabold text-xl flex items-center justify-center shadow-lg shadow-amber-500/20 border-2 border-amber-300 shrink-0">
                    {currentItem.avatar}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                      {currentItem.name}
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    </h3>
                    <p className="text-xs text-amber-300 font-semibold">{currentItem.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{currentItem.year}</p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-xl bg-emerald-900/80 hover:bg-amber-500 hover:text-emerald-950 text-white flex items-center justify-center border border-emerald-700 transition-all cursor-pointer"
                    aria-label="Testimoni Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-400 px-2">
                    {currentIndex + 1} / {filteredTestimonials.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-xl bg-emerald-900/80 hover:bg-amber-500 hover:text-emerald-950 text-white flex items-center justify-center border border-emerald-700 transition-all cursor-pointer"
                    aria-label="Testimoni Selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Thumbnail Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 px-1 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Pilih Testimoni Santri / Wali:
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {filteredTestimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      isActive
                        ? "bg-amber-500/20 border-amber-400 text-white shadow-md translate-x-1"
                        : "bg-emerald-950/60 border-emerald-800/80 text-slate-300 hover:bg-emerald-900/60 hover:text-white"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${
                      isActive ? "bg-amber-400 text-emerald-950" : "bg-emerald-900 text-slate-300"
                    }`}>
                      {item.avatar}
                    </div>
                    <div className="overflow-hidden flex-1">
                      <div className="font-extrabold text-xs text-white truncate">{item.name}</div>
                      <div className="text-[11px] text-amber-300/90 truncate">{item.highlight}</div>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Counter Summary Strip */}
        <div className="bg-emerald-900/40 border border-emerald-800/80 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">4.9 / 5.0 ⭐</div>
            <div className="text-xs text-slate-300">Tingkat Kepuasan Santri & Wali</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100% Khidmah</div>
            <div className="text-xs text-slate-300">Pembimbingan Akhlaq & Kitab Turats</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">2007 - Sekarang</div>
            <div className="text-xs text-slate-300">Pengabdian Yayasan Insan Kamil Krapyak</div>
          </div>
        </div>

      </div>
    </section>
  );
}
