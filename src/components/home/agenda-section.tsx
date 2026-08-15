import { Clock, Sparkles, CheckCircle2 } from "lucide-react";

const dailyAgenda = [
  { time: "04.30 - 05.00", activity: "Jama'ah Shubuh & Dzikiran" },
  { time: "05.30 - 06.30", activity: "Mengaji Kelas" },
  { time: "06.35 - selesai", activity: "Piket" },
  { time: "16.00 - 17.00", activity: "Ngaji Bandongan Sore / Waqiahan & Hizb Bahr" },
  { time: "17.30 - 18.30", activity: "Jama'ah Maghrib & Dzikiran" },
  { time: "18.30 - 19.00", activity: "Kultum Santri (Public Speaking)" },
  { time: "19.00 - 19.30", activity: "Jama'ah Isya' & Dzikiran" },
  { time: "20.00 - 21.30", activity: "Mengaji Kelas" },
  { time: "20.00 - 21.30", activity: "Muhadharah Santri (Public Speaking)" },
  { time: "22.00", activity: "Jam Malam (Istirahat)" }
];

const extras = [
  { name: "Hadroh & Kaligrafi", category: "Seni & Budaya" },
  { name: "Bahasa arab, Inggris & Jurnalistik", category: "Bahasa & Literasi" },
  { name: "Tata Boga", category: "Keterampilan & Kemandirian" },
  { name: "Pagar Nusa", category: "Bela Diri & Fisik" },
];

export function AgendaSection() {
  return (
    <section className="py-24 bg-primary-10 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-primary-9 border border-primary-8 px-3 py-1 rounded-full">
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
                  className="bg-primary-9/60 border border-primary-8/80 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-primary-9 transition-colors"
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
            <div className="bg-primary-9/80 border border-primary-7/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Bakat & Kreativitas Santri
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  Ekstrakurikuler Pesantren Al-Fattah
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Wadah mengasah soft skill kemandirian, literasi, dan seni islam.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extras.map((ex, idx) => (
                  <div 
                    key={idx}
                    className="bg-primary-10/80 p-3.5 rounded-xl border border-primary-8 hover:border-amber-400/50 transition-colors space-y-1"
                  >
                    <div className="text-xs text-amber-400 font-semibold">{ex.category}</div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-4 shrink-0" />
                      {ex.name}
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="bg-primary-9/80 border border-primary-7/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <p className="text-slate-300 text-sm sm:text-base">
                <strong>Keterangan : </strong>kegiatan bertanda &ldquo;Malam Minggu&ldquo; (Kultum Santri dan Muhadharah Santri) menggantikan slot mengaji kelas malam pada malam Minggu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
