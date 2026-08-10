import Image from "next/image";
import Link from "next/link";
import { Building2, Wifi, BookOpen, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fasilitas Pesantren | Pondok Pesantren Al-Fattah Krapyak Kartasura",
  description: "Fasilitas Asrama Santri Krapyak, Masjid Al-Fattah, Perpustakaan Turats, Ruang Kelas Diniyah, dan WiFi High-Speed Mahasiswa.",
};

const facilityItems = [
  {
    name: "Masjid & Majelis Al-Fattah",
    desc: "Masjid utama tempat shalat berjamaah 5 waktu, pengajian bandongan kitab kuning, serta mujahadah dan dzikir santri.",
    img: "/images/al_fattah_hero.jpg",
    tag: "Ibadah & Pengajian"
  },
  {
    name: "Asrama Santri Putra Krapyak",
    desc: "Asrama hunian putra yang bersih, aman, dan kondusif untuk mendukung kegiatan hafalan dan belajar santri.",
    img: "/images/pengasuh_kyai_nyai.jpg",
    tag: "Hunian Santri"
  },
  {
    name: "Asrama Santri Putri Krapyak",
    desc: "Asrama putri terlindungi dengan sistem keamanan dan penjagaan pengasuhan, dilengkapi fasilitas mandiri santri.",
    img: "/images/tahfizh.jpg",
    tag: "Hunian Putri"
  },
  {
    name: "Perpustakaan Kitab Turats",
    desc: "Ruang baca tenang dengan koleksi kitab-kitab kuning klasik, kamus bahasa Arab, serta buku referensi akademik kampus.",
    img: "/images/kitab_kuning_study.jpg",
    tag: "Literasi & Kitab"
  },
  {
    name: "Akses Internet WiFi High-Speed",
    desc: "Akses WiFi cepat bagi santri mahasiswa untuk mengerjakan tugas perkuliahan, jurnal ilmiah, dan belajar digital.",
    img: "/images/lab.jpg",
    tag: "Fasilitas Digital"
  },
  {
    name: "Ruang Diniyah & Bahtsul Masail",
    desc: "Ruang kelas diskusi dan halaqah santri untuk syawir, latihan membaca kitab, dan muhadhoroh public speaking.",
    img: "/images/kitab_kuning_study.jpg",
    tag: "Akademik Diniyah"
  }
];

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/al_fattah_hero.jpg"
            alt="Fasilitas Pesantren Al-Fattah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Lingkungan Kampus Krapyak
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Fasilitas Pondok Pesantren Al-Fattah
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Sarana dan prasarana di Krapyak, Kartasura, Sukoharjo untuk kenyamanan santri mukim & santri mahasiswa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-emerald-950/80 text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-extrabold text-xl text-emerald-950">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-800 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-300">
            Ingin Bersilaturahmi / Survey Pesantren di Krapyak Kartasura?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Sekretariat Pondok Pesantren Al-Fattah menyambut kunjungan calon santri dan wali santri setiap hari.
          </p>
          <div className="pt-2">
            <Button asChild className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-6">
              <Link href="/kontak">
                <GraduationCap className="w-5 h-5 mr-2" />
                Jadwalkan Kunjungan / Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}
