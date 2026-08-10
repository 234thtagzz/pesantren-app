import { Clock, Sparkles, CheckCircle2 } from "lucide-react";

const dailyAgenda = [
  { time: "04.00 - 05.00", activity: "Shalat Subuh Berjamaah, Mujahadah Dzikir Pagi & Kultum" },
  { time: "05.00 - 06.30", activity: "Setoran Hafalan Al-Qur'an & Sorogan Kitab Amtsilati / Kitab Kuning" },
  { time: "06.30 - 07.30", activity: "Sarapan Pagi, Persiapan Kuliah / Sekolah & Kebersihan Asrama" },
  { time: "07.30 - 15.00", activity: "Aktivitas Akademik Mahasiswa (Kampus UIN / Perguruan Tinggi) & Mandiri" },
  { time: "15.30 - 17.00", activity: "Shalat Ashar Berjamaah & Kajian Kitab Fathul Qorib / Nashoihul Ibad" },
  { time: "17.00 - 18.00", activity: "Kegiatan Ekstrakurikuler, Olahraga, & Olah Raga Jasmani" },
  { time: "18.15 - 20.00", activity: "Maghrib & Isya Berjamaah, Bandongan Alfiyah / Ta'lim Muta'allim" },
  { time: "20.00 - 21.30", activity: "Muhadhoroh 3 Bahasa (Kamis Malam) / Bahtsul Masail & Belajar Mandiri" },
  { time: "21.30 - 04.00", activity: "Istirahat Malam Santri" }
];

const extras = [
  { name: "Hadroh & Sholawat Al-Fattah", category: "Seni & Rebana Islam" },
  { name: "Muhadhoroh 3 Bahasa", category: "Public Speaking & Arab/Inggris" },
  { name: "Bahtsul Masail Santri", category: "Forum Diskusi Fiqih" },
  { name: "Entrepreneurship Santri", category: "Kewirausahaan Berdikari" },
  { name: "Media & DKV Santri", category: "Jurnalistik & Digital" },
  { name: "Klub Olahraga & Badminton", category: "Kebugaran Jasmani" },
];

export function AgendaSection() {
  return (
    <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-emerald-900 border border-emerald-800 px-3 py-1 rounded-full">
                Disiplin & Keikhlasan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Jadwal Kegiatan Harian Santri Krapyak
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Pola hidup terstruktur 24 jam yang menyeimbangkan antara ibadah, kajian kitab, studi kampus, dan pengembangan karakter mandiri.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {dailyAgenda.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-emerald-900/60 border border-emerald-800/80 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-emerald-900 transition-colors"
                >
                  <div className="flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1.5 rounded-xl border border-amber-500/30 text-xs font-bold shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{item.time} WIB</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Extracurricular Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-900/80 border border-emerald-700/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Bakat & Kreativitas Santri
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  Ekstrakurikuler & Organisasi Santri
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Wadah mengasah soft skill kepemimpinan, seni Islam, dan wirausaha santri Al-Fattah.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extras.map((ex, idx) => (
                  <div 
                    key={idx}
                    className="bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-800 hover:border-amber-400/50 transition-colors space-y-1"
                  >
                    <div className="text-xs text-amber-400 font-semibold">{ex.category}</div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      {ex.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-emerald-800 text-center">
                <p className="text-xs text-slate-300">
                  🌟 Rutin menyelenggarakan Peringatan Hari Besar Islam (PHBI), Pengajian Umum, dan Pentas Seni Santri.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
