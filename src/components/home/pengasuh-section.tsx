import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight, ShieldCheck, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PengasuhSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/80 group">
              <Image
                src="/images/pengasuh_kyai_nyai.jpg"
                alt="Dr. KH. Moh. Mahbub, S.Ag., M.Si. & Dr. Hj. Kamila Adnani, M.Si. Pengasuh Pesantren Al-Fattah Kartasura"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-amber-500 text-emerald-950 text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Pengasuh Pesantren
                </span>
                <p className="font-bold text-base sm:text-lg mt-1">Dr. KH. Moh. Mahbub, S.Ag., M.Si.</p>
                <p className="text-xs text-amber-200">& Dr. Hj. Kamila Adnani, M.Si.</p>
              </div>
            </div>
            {/* Experience Pill */}
            <div className="absolute -bottom-4 right-2 sm:-right-4 bg-emerald-950 text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-amber-400/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-extrabold text-lg">
                2007
              </div>
              <div className="text-xs font-semibold">
                Tahun Berdiri Yayasan<br />
                <span className="text-amber-300 font-normal">Insan Kamil Kartasura</span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-800">
            <div>
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Dawuh & Sambutan Pengasuh
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3">
                &ldquo;Berbudi Tinggi, Berbadan Sehat, Berpengetahuan Luas & Berpikiran Bebas&rdquo;
              </h2>
            </div>

            <blockquote className="relative italic text-slate-600 text-base sm:text-lg pl-6 border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
              <Quote className="w-8 h-8 text-amber-400/60 absolute -top-3 -left-3" />
              &ldquo;Pesantren Al-Fattah Krapyak Kartasura didirikan dengan semangat keikhlasan dan kesederhanaan untuk membimbing para santri dan mahasiswa agar memiliki kedalaman spiritual, akhlaqul karimah, serta wawasan keilmuan yang luas.&rdquo;
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Lokasi kami yang berada di Krapyak Kartasura, dekat dengan lingkungan kampus (±400m timur UIN Raden Mas Said Surakarta), menjadikan Al-Fattah tempat yang sangat kondusif bagi santri mukim maupun mahasiswa yang ingin mendalami kajian <strong>Kitab Kuning Salaf-Modern</strong> (Amtsilati, Jurumiyah, Alfiyah, Fathul Qorib) tanpa mengabaikan studi akademisnya.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Kajian Kitab Kuning</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <GraduationCap className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Pesantren Mahasiswa</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <Heart className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Panca Jiwa & Ukhuwah</span>
              </div>
            </div>

            <div className="pt-3">
              <Button
                asChild
                className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-6 py-5"
              >
                <Link href="/profile">
                  Profil Lengkap Pesantren & Yayasan
                  <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
