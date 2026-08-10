import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  BookCheck, 
  MapPin,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-emerald-950 text-white min-h-[88vh] flex items-center overflow-hidden py-16 lg:py-24">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/al_fattah_hero.jpg"
          alt="Pondok Pesantren Al-Fattah Krapyak Kartasura Architecture"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/85 to-emerald-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Arabic Bismillah & Location Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-amber-500/40 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-300">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ — Krapyak, Kartasura, Sukoharjo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Pondok Pesantren{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Al-Fattah
              </span>
              {" "}Kartasura
            </h1>

            {/* Subtitle with Pengasuh & Motto */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Mendidik generasi Qur&apos;ani yang unggul dalam pendalaman <strong>Kitab Kuning Turats</strong> (Amtsilati, Alfiyah, Fathul Qorib) & <strong>Pesantren Mahasiswa</strong>. Diasuh oleh Dr. KH. Moh. Mahbub, M.Si. & Dr. Hj. Kamila Adnani, M.Si.
            </p>

            {/* Key Value Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs sm:text-sm text-emerald-200">
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-xl border border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Yayasan Insan Kamil (Est. 2007)
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-xl border border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Metode Amtsilati & Sorogan
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-xl border border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Dekat Kampus UIN RM Said Surakarta
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold px-8 py-6 text-base shadow-lg shadow-amber-500/20 border border-amber-300/40"
              >
                <Link href="/psb">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Daftar PSB Online 2026/2027
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-emerald-900/60 hover:bg-emerald-800 border-emerald-700 text-white font-semibold px-8 py-6 text-base backdrop-blur-sm"
              >
                <Link href="/profile">
                  Profil & Pengasuh
                  <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Card / Quick Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-emerald-900/90 to-emerald-950/95 border border-emerald-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-3 right-6 bg-amber-500 text-emerald-950 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                Pusat Informasi Resmi
              </div>

              <div className="space-y-4">
                <div className="border-b border-emerald-800/80 pb-4">
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    Motto & Panca Jiwa Pesantren
                  </h3>
                  <p className="text-amber-300 text-xs font-semibold italic mt-1">
                    &ldquo;Berbudi tinggi, berbadan sehat, berpengetahuan luas, berpikiran bebas&rdquo;
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center bg-emerald-950/80 p-3 rounded-xl border border-emerald-800/80">
                    <span className="text-slate-300">Pengasuh Utama:</span>
                    <span className="font-semibold text-amber-300 text-right">Dr. KH. Moh. Mahbub, M.Si. & Nyai</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-950/80 p-3 rounded-xl border border-emerald-800/80">
                    <span className="text-slate-300">Lokasi Pesantren:</span>
                    <span className="font-semibold text-emerald-300">Krapyak, Kartasura, Sukoharjo</span>
                  </div>
                  <div className="flex justify-between items-center bg-emerald-950/80 p-3 rounded-xl border border-emerald-800/80">
                    <span className="text-slate-300">Program Santri:</span>
                    <span className="font-semibold text-amber-300">Mukim, Diniyah & Mahasiswa</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-5 text-sm rounded-xl shadow-md border border-emerald-500/30"
                  >
                    <Link href="/program">
                      Lihat Kurikulum Kitab & Program
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Statistics Counter Strip */}
        <div className="mt-16 pt-10 border-t border-emerald-900/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-emerald-900/40 border border-emerald-800/60 p-4 sm:p-6 rounded-2xl text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">500+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Santri Mukim & Mahasiswa</div>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-800/60 p-4 sm:p-6 rounded-2xl text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <BookCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">15+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Kajian Kitab Turats Rutin</div>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-800/60 p-4 sm:p-6 rounded-2xl text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">2007</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Berdiri Yayasan Insan Kamil</div>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-800/60 p-4 sm:p-6 rounded-2xl text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">±400m</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">Dari Kampus I UIN RM Said</div>
          </div>
        </div>

      </div>
    </section>
  );
}
