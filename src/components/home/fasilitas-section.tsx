import Image from "next/image";
import Link from "next/link";
import { Building2, Wifi, BookOpen, ShieldCheck, ArrowRight, Utensils, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainFacilities = [
  {
    title: "Masjid & Majelis Pengajian",
    desc: "Pusat kegiatan shalat berjamaah, kajian kitab kuning sorogan & bandongan, serta halaqah tahfizh harian.",
    image: "/images/al_fattah_hero.jpg",
    icon: Building2
  },
  {
    title: "Asrama Santri Mukim Krapyak",
    desc: "Hunian asrama putra dan putri yang bersih, tertata rapi, dan berada di tengah pemukiman Krapyak Kartasura yang aman.",
    image: "/images/pengasuh_kyai_nyai.jpg",
    icon: ShieldCheck
  },
  {
    title: "Perpustakaan Kitab Turats",
    desc: "Koleksi lengkap kitab-kitab salaf & khalaf (Nahwu, Fiqih, Tasawuf, Tafsir) serta buku referensi perkuliahan santri mahasiswa.",
    image: "/images/kitab_kuning_study.jpg",
    icon: BookOpen
  },
  {
    title: "Akses WiFi & Space Belajar Mahasiswa",
    desc: "Koneksi internet cepat untuk mendukung tugas perkuliahan mahasiswa UIN RM Said, UMS, UNS, dan riset karya ilmiah santri.",
    image: "/images/lab.jpg",
    icon: Wifi
  }
];

export function FasilitasSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary-7 font-bold text-sm tracking-wider uppercase bg-primary-1 px-3.5 py-1.5 rounded-full border border-primary-2">
            Lingkungan & Sarana Pesantren
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-10 tracking-tight">
            Fasilitas Penunjang Santri & Mahasiswa
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Didesain untuk menciptakan suasana belajar yang tenang, nyaman, dan mendukung kegiatan keagamaan serta akademik santri.
          </p>
        </div>

        {/* Facility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFacilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={fac.image}
                      alt={fac.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-10/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-amber-400 text-primary-10 flex items-center justify-center font-bold shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-extrabold text-lg text-primary-10 group-hover:text-primary-7 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-xs font-semibold text-primary-8 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Siap Digunakan Santri</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary-8 text-primary-9 font-bold px-8 py-6 rounded-2xl">
            <Link href="/fasilitas">
              Lihat Seluruh Fasilitas Kampus Krapyak
              <ArrowRight className="w-4 h-4 ml-2 text-amber-500" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
