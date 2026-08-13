import Image from "next/image";
import Link from "next/link";
import {  
  CheckCircle2, 
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Program & Kajian Kitab Kuning | Pondok Pesantren Al-Fattah Kartasura",
  description: "Kurikulum Kajian Kitab Kuning (Amtsilati, Jurumiyah, Alfiyah, Fathul Qorib, Ta'lim Muta'allim) & Program Pesantren Mahasiswa Krapyak Kartasura Sukoharjo.",
};

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
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
            Program Pendidikan & Silabus Kitab Kuning
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Pendalaman ilmu agama Islam melalui tradisi kitab turats, hafalan Qur&apos;an, dan pembinaan santri mahasiswa Krapyak.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        {/* 1. Gramatika Bahasa Arab (Nahwu Sharaf) */}
        <section id="turats-nahwu" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full border border-amber-300">
              Gramatika Arab & Sorogan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-10">
              Metode Amtsilati, Jurumiyah & Alfiyah Ibn Malik
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Program pembelajaran tata bahasa Arab sistematis. Bagi santri pemula dibimbing dengan metode cepat <strong>Amtsilati</strong> agar mahir membaca gundul, dilanjutkan kajian mendalam matan <strong>Al-Jurumiyah</strong> dan <strong>Alfiyah Ibn Malik</strong> dengan sorogan dan bandongan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                ✅ Metode Praktis Amtsilati
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                ✅ Setoran Hafalan Alfiyah
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                ✅ Sorogan Tatap Muka Kyai
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                ✅ Bahtsul Masail Santri
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 aspect-[16/10]">
              <Image src="/images/kitab_kuning_study.jpg" alt="Kajian Kitab Kuning" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* 2. Pesantren Mahasiswa */}
        <section id="pesantren-mahasiswa" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-6 aspect-[16/10]">
              <Image src="/images/al_fattah_hero.jpg" alt="Pesantren Mahasiswa Krapyak" fill className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <span className="bg-primary-1 text-primary-9 font-bold text-xs px-3 py-1 rounded-full border border-primary-3">
              Pesantren Mahasiswa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-10">
              Program Santri Mahasiswa (Mukim & Kalong)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pesantren Al-Fattah menyelenggarakan program khusus mahasiswa yang menempuh kuliah di UIN Raden Mas Said Surakarta (±400m dari lokasi), UMS, UNS, maupun universitas sekitarnya. Santri dapat kuliah dengan tenang sambil tetap mengaji dan membentuk karakter keislaman.
            </p>
            <div className="space-y-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-6" />
                <span>Jadwal Pengajian Disesuaikan Jam Kuliah Santri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-6" />
                <span>Fasilitas Asrama Krapyak & WiFi Cepat untuk Riset Kampus</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Fiqih, Tasawuf & Tahfizh */}
        <section id="tahfizh" className="bg-primary-10 text-white rounded-3xl p-8 sm:p-12 border border-primary-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="bg-amber-500 text-primary-10 font-extrabold text-xs px-3 py-1 rounded-full">
              Fiqih, Tasawuf & Tahfizh
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Kitab Fathul Qorib, Ta&apos;lim Muta&apos;allim & Tahfizh
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pengajian Fiqih ibadah Syafi&apos;iyah melalui Fathul Qorib & Safinatun Najah, pembentukan akhlaq lewat Ta&apos;lim Muta&apos;allim & Nashoihul Ibad, serta bimbingan halaqah hafalan Al-Qur'an harian.
            </p>
            <div className="pt-2">
              <Button asChild className="bg-amber-500 hover:bg-amber-400 text-primary-10 font-bold px-6 py-5">
                <Link href="/psb">
                  Daftar Santri Baru Al-Fattah
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 aspect-[16/10]">
              <Image src="/images/tahfizh.jpg" alt="Tahfizh Qur'an & Kitab" fill className="object-cover" />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
