import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Sparkles, Newspaper, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Berita & Kegiatan | Pondok Pesantren Al-Fattah Kartasura",
  description: "Kabar terbaru seputar kegiatan santri, pengajian rutinan KH. Mahbub, PHBI, dan pendaftaran santri baru Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo.",
};

const articles = [
  {
    slug: "pendaftaran-santri-baru-2026-2027",
    title: "Penerimaan Santri Baru (PSB) T.A. 2026/2027 Pondok Pesantren Al-Fattah Kartasura Resmi Dibuka",
    date: "10 Agustus 2026",
    author: "Humas Al-Fattah",
    category: "Informasi PSB",
    excerpt: "Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo resmi membuka pendaftaran santri baru untuk kategori Santri Mukim, Santri Mahasiswa, dan Diniyah.",
    image: "/images/al_fattah_hero.jpg"
  },
  {
    slug: "pengajian-rutin-kitab-fathul-qorib-kh-mahbub",
    title: "Pengajian Rutin Kitab Fathul Qorib Bersama Dr. KH. Moh. Mahbub, M.Si. Setiap Ahad Malam",
    date: "5 Agustus 2026",
    author: "Redaksi Media Santri",
    category: "Kajian Kitab",
    excerpt: "Majelis pengajian rutin kitab Fathul Qorib diikuti dengan khusyuk oleh para santri mukim dan santri mahasiswa di Masjid Al-Fattah Krapyak.",
    image: "/images/kitab_kuning_study.jpg"
  },
  {
    slug: "muhadhoroh-3-bahasa-santri-al-fattah",
    title: "Semangat Santri Al-Fattah dalam Latihan Muhadhoroh 3 Bahasa (Indonesia, Arab, Inggris)",
    date: "28 Juli 2026",
    author: "Tim Jurnalistik Santri",
    category: "Kegiatan Santri",
    excerpt: "Kegiatan mingguan Muhadhoroh melatih keberanian dan kecakapan public speaking santri Al-Fattah Krapyak Kartasura.",
    image: "/images/pengasuh_kyai_nyai.jpg"
  },
  {
    slug: "silaturahmi-wali-santri-dan-pengasuh-yayasan-insan-kamil",
    title: "Silaturahmi Pengasuh Yayasan Insan Kamil Bersama Wali Santri Baru",
    date: "15 Juli 2026",
    author: "Sekretariat Pesantren",
    category: "Silaturahmi",
    excerpt: "Dr. KH. Moh. Mahbub & Dr. Hj. Kamila Adnani memberikan pengarahan tentang pentingnya sinergi antara wali santri dan pengasuh pesantren.",
    image: "/images/tahfizh.jpg"
  }
];

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/al_fattah_hero.jpg"
            alt="Berita & Kegiatan Pesantren Al-Fattah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Kabar Pesantren
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Berita & Informasi Kegiatan Al-Fattah
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Warta terkini seputar kegiatan pengajian, agenda santri, informasi PSB, dan artikel keislaman.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item) => (
            <article 
              key={item.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-emerald-950 text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      {item.author}
                    </span>
                  </div>

                  <h2 className="font-extrabold text-xl text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-between border-slate-300 text-emerald-900 font-bold hover:bg-emerald-900 hover:text-white"
                >
                  <Link href={`/berita/${item.slug}`}>
                    Baca Artikel Selengkapnya
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
