import Link from "next/link";
import { GraduationCap, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PsbBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-background via-slate-100 to-slate-200 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left bg-primary-10 p-8 sm:p-12 rounded-3xl border border-amber-500/40 shadow-2xl backdrop-blur-md">
          
          <div className="space-y-3 max-w-2xl">
            <span className="bg-amber-500 text-primary-10 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Tahun Ajaran 2026 / 2027
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Penerimaan Santri Baru (PSB) Online
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Bergabunglah menjadi bagian dari keluarga besar Pondok Pesantren Al-Fattah Krapyak Kartasura. Menerima santri mukim, diniyah, dan mahasiswa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-primary-10 font-extrabold px-8 py-6 text-base shadow-lg hover:scale-105"
            >
              <Link href="/psb">
                <GraduationCap className="w-5 h-5 mr-2" />
                Daftar PSB Online Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-primary-7 hover:bg-primary-6 hover:scale-105 text-white  border-primary-5/30 font-semibold px-6 py-6 text-base"
            >
              <a href="https://wa.me/62882006454771" target="_blank" rel="noreferrer">
                <PhoneCall className="w-4 h-4 mr-2 text-amber-400" />
                Konsultasi Pendaftaran
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
