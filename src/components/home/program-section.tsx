import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  GraduationCap, 
  ScrollText, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Heart,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "turats-nahwu",
    title: "Kajian Kitab Turats & Nahwu Sharaf",
    subtitle: "Amtsilati, Jurumiyah & Alfiyah Ibn Malik",
    description: "Pendalaman tata bahasa Arab (Gramatika) menggunakan metode Amtsilati yang cepat dan praktis, dilanjutkan dengan syarah Matan Al-Jurumiyah dan Imrithie / Alfiyah Ibn Malik.",
    icon: ScrollText,
    image: "/images/kitab_kuning_study.jpg",
    features: [
      "Metode Cepat Amtsilati untuk Santri Pemula",
      "Kajian Alfiyah Ibn Malik & Sorogan",
      "Forum Bahtsul Masail & Syawir Rutin",
      "Sanad Keilmuan Gramatika Arab"
    ],
    highlight: "Kurikulum Unggulan Salaf",
    color: "from-amber-800 to-stone-900"
  },
  {
    id: "tasawuf-fiqh",
    title: "Kajian Fiqih, Akhlaq & Tasawuf",
    subtitle: "Fathul Qorib & Ta'lim Muta'allim",
    description: "Penggemblengan ibadah amaliyah harian (Fiqih Syafi'i) lewat kitab Fathul Qorib, Safinatun Najah, serta pembentukan akhlaq lewat Ta'lim Muta'allim, Nashoihul Ibad & Washoya.",
    icon: BookOpen,
    image: "/images/pengasuh_kyai_nyai.jpg",
    features: [
      "Materi Fiqih Ibadah & Muamalah Fathul Qorib",
      "Kitab Akhlaq Nashoihul Ibad & Ta'lim Muta'allim",
      "Pembiasaan Adab & Akhlaqul Karimah Santri",
      "Pengajaran Langsung oleh Pengasuh & Asatidzh"
    ],
    highlight: "Pendalaman Syariat & Adab",
    color: "from-primary-8 to-primary-10"
  },
  {
    id: "pesantren-mahasiswa",
    title: "Program Pesantren Mahasiswa",
    subtitle: "Santri Mukim & Kalong Mahasiswa",
    description: "Program khusus bagi mahasiswa perguruan tinggi (UIN RM Said Surakarta, UMS, UNS, dll) yang ingin mukim di Krapyak Kartasura sambil mengaji kitab & tahfizh.",
    icon: GraduationCap,
    image: "/images/al_fattah_hero.jpg",
    features: [
      "Lokasi Strategis ±400m dari UIN Raden Mas Said",
      "Jadwal Mengaji Fleksibel Sesuai Jam Kuliah",
      "Fasilitas WiFi High-Speed & Space Study",
      "Komunitas Alumni & Mahasiswa Prestasi"
    ],
    highlight: "Favorit Mahasiswa",
    color: "from-blue-900 to-slate-900"
  },
  {
    id: "tahfizh",
    title: "Tahfizh Al-Qur'an & Tilawah",
    subtitle: "Halaqah Hafalan & Naghom Qur'ani",
    description: "Bimbingan hafalan Al-Qur'an (Juz 30 & Juz pilihan / 30 Juz) disertai talaqqi tajwid dan pembiasaan muraja'ah bersama asatidzh huffazh.",
    icon: Award,
    image: "/images/tahfizh.jpg",
    features: [
      "Halaqah Setoran Subuh & Maghrib",
      "Bimbingan Tajwid & Naghom Seni Tilawah",
      "Ujian Munaqasyah Hafalan Berkala",
      "Sertifikat Kelulusan Hafalan Pesantren"
    ],
    highlight: "Bimbingan Tahfizh",
    color: "from-primary-9 to-teal-950"
  },
  {
    id: "madin-kegiatan",
    title: "Madrasah Diniyah & Ekstrakurikuler",
    subtitle: "Hadroh, Muhadhoroh & Entrepreneurship",
    description: "Pengembangan bakat non-akademik santri melalui Seni Hadroh Al-Fattah, latihan pidato 3 Bahasa (Muhadhoroh), serta pelatihan wirausaha santri mandiri.",
    icon: Users,
    image: "/images/lab.jpg",
    features: [
      "Grup Sholawat & Seni Hadroh Al-Fattah",
      "Muhadhoroh & Public Speaking 3 Bahasa",
      "Pelatihan Entrepreneurship Santri Berdikari",
      "Kreativitas Jurnalistik & Media Digital Santri"
    ],
    highlight: "Pengembangan Diri",
    color: "from-purple-900 to-slate-950"
  }
];

export function ProgramSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary-7 font-bold text-sm tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-primary-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Kurikulum & Program Pendidikan
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-10 tracking-tight">
            Program Kajian Kitab & Pesantren Mahasiswa
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sistem pembelajaran di Pesantren Al-Fattah Krapyak Kartasura dirancang seimbang untuk membentuk santri berilmu agama mendalam, berakhlak mulia, dan mandiri.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.slice(0, 3).map((program) => {
            const Icon = program.icon;
            return (
              <div 
                key={program.id}
                className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Cover Header */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary-8 text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                      {program.highlight}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-9 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-lg text-primary-10 leading-snug">
                          {program.title}
                        </h3>
                        <p className="text-xs text-amber-700 font-semibold">{program.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-200">
                      {program.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-primary-6 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between border-slate-300 text-primary-9 hover:bg-primary-8 hover:text-white font-bold transition-all"
                  >
                    <Link href={`/program#${program.id}`}>
                      Detail Program & Silabus
                      <ArrowRight className="w-4 h-4 text-amber-500" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row for Tahfizh & Madin/Ekstra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {programs.slice(3, 5).map((program) => {
            const Icon = program.icon;
            return (
              <div 
                key={program.id}
                className="bg-primary-10 text-white rounded-3xl border border-primary-9 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 group"
              >
                <div className="relative sm:col-span-5 min-h-[220px] sm:min-h-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-10/40" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-primary-10 font-bold text-xs px-3 py-1 rounded-full">
                    {program.highlight}
                  </span>
                </div>

                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-amber-400 text-primary-10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-xl text-white">
                          {program.title}
                        </h3>
                        <p className="text-xs text-amber-300 font-semibold">{program.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <ul className="space-y-1.5">
                      {program.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      className="bg-primary-7 hover:bg-primary-6 text-white font-bold w-full justify-between"
                    >
                      <Link href="/program">
                        Lihat Rincian Kegiatan & Jadwal
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary-10 hover:bg-primary-9 text-white font-bold px-8 py-6 rounded-2xl shadow-lg"
          >
            <Link href="/program">
              Lihat Daftar Kitab Kuning Lengkap & Jadwal Pengajian
              <ArrowRight className="w-5 h-5 ml-2 text-amber-400" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
