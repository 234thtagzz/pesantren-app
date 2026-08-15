import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AgendaSection } from "@/components/home/agenda-section";

export const metadata = {
  title: "Program & Kajian Kitab Kuning | Pondok Pesantren Al-Fattah Kartasura",
  description: "Kurikulum Kajian Kitab Kuning (Amtsilati, Jurumiyah, Alfiyah, Fathul Qorib, Ta'lim Muta'allim) & Program Pesantren Mahasiswa Krapyak Kartasura Sukoharjo.",
};

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      
      <section className="relative bg-primary-10 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitab_kuning_study.jpg"
            alt="Program Pendidikan Al-Fattah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-10/80 via-primary-10 to-primary-10" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-block text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-primary-9 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Kurikulum Salaf-Modern
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Program Pendidikan & keseharian Santri
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Pendalaman ilmu agama Islam melalui pendidikan dan kebiasaan dalam membinaan intelektual Jiwa dan Kebiasaan santri Al-Fattah.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        {/* 1. Gramatika Bahasa Arab (Nahwu Sharaf) */}
        <ScrollReveal direction="up" delay={100}>
          <section id="turats-nahwu" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full border border-amber-300">
                Program Tahfizh
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-10">
                Kitab Fathul Qorib, Ta&apos;lim Muta&apos;allim & Tahfizh
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Program Tahfidz Al-Qur&apos;an di Pondok Pesantren Al-Fattah diselenggarakan untuk mencetak <strong> generasi penghafal Al-Qur&apos;an 30 Juz mutqin </strong>, beradab, serta memiliki ketepatan bacaan tajwid dan makhraj yang baik. Santri baru yang belum lancar membaca Al-Qur&apos;an terlebih dahulu dibimbing melalui kelas tahsin sebelum masuk ke tahap matrikulasi hafalan Juz 30 dan surat-surat pilihan, baru kemudian resmi mengikuti program Tahfidz reguler. Program ini didampingi oleh ustaz-ustazah pengampu yang diangkat dari santri senior berkualifikasi serta diuji dengan syahadah bagi santri yang telah menuntaskan hafalan 15 juz. Sebagai penunjang, santri Tahfidz juga mengikuti kajian kitab At-Tibyan fi Adabi Hamalatil Qur'an karya Imam An-Nawawi untuk memperdalam adab dan fikih seputar Al-Qur&apos;an.
              </p>
              
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 aspect-[16/10]">
                <Image src="/images/kitab_kuning_study.jpg" alt="Kajian Kitab Kuning" fill className="object-cover" />
              </div>
            </div>
          </section>

        </ScrollReveal>
        {/* 2. Kitab Kuning */}
        <ScrollReveal direction="up" delay={100}>
          <section id="tahfizh" className="bg-primary-10 text-white rounded-3xl p-8 sm:p-12 border border-primary-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block bg-amber-500 text-primary-10 font-extrabold text-xs px-3 py-1 rounded-full">
                Program Kitab Kuning
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Kitab Alfiyyah ibn Malik, Jurumiyyah, dan Al-Miftah
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Pembelajaran kitab di Pondok Pesantren Al-Fattah disusun secara berjenjang, mulai dari Kelas Pegon, Al-Miftah, Jurumiyah, Amtsilati, Persiapan Alfiyah, Alfiyah, Ndalem, hingga Kelas Pasca, dengan empat fan ilmu utama: Nahwu-Shorof, Fiqih, Akhlak, dan Hadis. Santri dibimbing membaca dan memahami kitab-kitab klasik (kitab kuning) seperti Al-Miftah, Fathul Qorib, Ta'limul Muta'allim, Arba'in Nawawi, Bidayatul Hidayah, Bulughul Maram, hingga Riyadhus Shalihin dan Fathul Mu'in, menggunakan metode Bandongan, Sorogan, Takrar, dan Hafalan. Melalui program ini, santri tidak hanya mampu membaca kitab gundul dengan tepat, tetapi juga memahami kandungan hukum, adab, dan akhlak yang menjadi ciri khas pendidikan pesantren salaf yang dipadukan dengan pendekatan modern.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 aspect-[16/10]">
                <Image src="/images/tahfizh.jpg" alt="Tahfizh Qur'an & Kitab" fill className="object-cover" />
              </div>
            </div>
          </section>
        </ScrollReveal>

      </div>

        {/* jadwal & ekstrakulikuler */}
          <ScrollReveal direction="up" delay={100} className="mt-20">
            <AgendaSection />
          </ScrollReveal>
    </main>
  );
}
