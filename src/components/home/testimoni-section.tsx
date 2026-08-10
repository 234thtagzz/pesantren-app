import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Fauzi, S.Pd.",
    role: "Alumni Santri Mahasiswa — Lulusan UIN Raden Mas Said Surakarta",
    text: "Tinggal di Pesantren Al-Fattah Krapyak membuat masa kuliah saya sangat berkah. Saya bisa kuliah tepat waktu sambil mendalami kitab Amtsilati dan Alfiyah bersama Kyai Mahbub.",
    type: "Alumni Mahasiswa"
  },
  {
    name: "H. Sugeng Riyadi",
    role: "Wali Santri (Orang Tua Ananda Hilmi - Santri Mukim)",
    text: "Alhamdulillah putra kami menjadi lebih mandiri, shalatnya tepat waktu di masjid, dan akhlaqnya sangat berbakti kepada orang tua. Terbukti motto Al-Fattah membimbing santri dengan hati.",
    type: "Wali Santri"
  },
  {
    name: "Nurul Annisa, S.Ag.",
    role: "Alumni Santri Putri — Pengajar Madrasah Diniyah Sukoharjo",
    text: "Lingkungan pesantren di Krapyak sangat aman dan penuh ukhuwah. Pengajian kitab Fathul Qorib dan Ta'lim Muta'allim yang diampu Dr. Nyai Hj. Kamila Adnani menjadi bekal berharga hidup saya.",
    type: "Alumni"
  }
];

export function TestimoniSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Apresiasi Santri & Wali
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Kisah Kesan Alumni & Wali Santri Al-Fattah
          </h2>
          <p className="text-slate-600 text-base">
            Pengalaman mendalam menuntut ilmu dan membina karakter di Pondok Pesantren Al-Fattah Krapyak Kartasura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-amber-300/80 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                  <div className="text-xs text-emerald-700 font-semibold">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
