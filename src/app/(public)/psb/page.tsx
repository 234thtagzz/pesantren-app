import Image from "next/image";
import { PsbForm } from "@/components/psb/psb-form";
import { CheckCircle2, Clock, Calendar, ShieldCheck, Sparkles, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Penerimaan Santri Baru (PSB) 2026/2027 | Pondok Pesantren Al-Fattah Kartasura",
  description: "Informasi Pendaftaran Santri Baru (PSB) Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo. Jadwal seleksi, syarat, dan formulir pendaftaran online.",
};

const scheduleSteps = [
  { step: "01", title: "Pendaftaran Online & Berkas", date: "1 Januari - 30 Agustus 2026", desc: "Mengisi formulir online & melengkapi fotokopi KK, KTP/Kartu Mahasiswa." },
  { step: "02", title: "Sowan & Wawancara Pengasuh", date: "Sesuai Konfirmasi WA", desc: "Silaturahmi sowan ke Pengasuh Dr. KH. Moh. Mahbub, M.Si. & Nyai Hj. Kamila Adnani." },
  { step: "03", title: "Tes Tes Pemetaan Mengaji", date: "Saat Sowan / Online", desc: "Tes pemetaan kemampuan membaca Qur'an dan pemahaman Kitab Kuning dasar." },
  { step: "04", title: "Penempatan Asrama Krapyak", date: "Langsung Berjalan", desc: "Penyerahan kunci kamar asrama, orientasi tata tertib, dan siap mengaji." },
];

export default function PsbPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/al_fattah_hero.jpg"
            alt="PSB Pesantren Al-Fattah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Tahun Ajaran 2026 / 2027
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Penerimaan Santri Baru (PSB) Online
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Bergabunglah menjadi santri mukim & mahasiswa Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        {/* Main Grid: Schedule & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Schedule & Requirements */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                  Alur Pendaftaran
                </span>
                <h3 className="text-2xl font-extrabold text-emerald-950 mt-2">
                  Jadwal & Alur Masuk Santri
                </h3>
              </div>

              <div className="space-y-4">
                {scheduleSteps.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-950 text-amber-300 font-extrabold flex items-center justify-center shrink-0 text-sm border border-amber-400/30">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                      <p className="text-xs text-amber-700 font-semibold">{item.date}</p>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Syarat Dokumen & Berkas
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Fotokopi Kartu Keluarga (KK) & KTP / Kartu Mahasiswa (2 Lembar)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Pas Foto Ukuran 3x4 (3 Lembar)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Mengisi Surat Pernyataan Kesanggupan Mematuhi Tata Tertib
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Sowan Orang Tua/Wali ke Pengasuh Pesantren
                </li>
              </ul>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <PsbForm />
          </div>

        </div>

      </div>
    </main>
  );
}
