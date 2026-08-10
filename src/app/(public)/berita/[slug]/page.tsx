import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Tag, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const articlesMap: Record<string, { title: string; date: string; author: string; category: string; image: string; content: string[] }> = {
  "pendaftaran-santri-baru-2026-2027": {
    title: "Penerimaan Santri Baru (PSB) T.A. 2026/2027 Pondok Pesantren Al-Fattah Kartasura Resmi Dibuka",
    date: "10 Agustus 2026",
    author: "Humas Al-Fattah",
    category: "Informasi PSB",
    image: "/images/al_fattah_hero.jpg",
    content: [
      "Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo secara resmi membuka Penerimaan Santri Baru (PSB) untuk Tahun Ajaran 2026/2027. Pendaftaran ini diperuntukkan bagi calon santri mukim, santri mahasiswa (mahasiswa UIN RM Said Surakarta, UMS, UNS, dll), serta santri Madrasah Diniyah.",
      "Diasuh langsung oleh Dr. KH. Moh. Mahbub, S.Ag., M.Si. dan Dr. Hj. Kamila Adnani, M.Si., Pesantren Al-Fattah menawarkan lingkungan pendidikan yang kondusif di tengah pemukiman warga Krapyak Kartasura.",
      "Kurikulum unggulan yang diajarkan meliputi kajian Gramatika Bahasa Arab (Amtsilati, Jurumiyah, Alfiyah Ibn Malik), Fiqih Syafi'iyah (Fathul Qorib, Safinatun Najah), Akhlaq Tasawuf (Ta'lim Muta'allim, Nashoihul Ibad), serta bimbingan Hafalan Al-Qur'an.",
      "Pendaftaran dapat dilakukan secara online melalui website resmi www.alfattah.or.id/psb atau dengan datang langsung ke Kantor Sekretariat Pesantren Al-Fattah di Krapyak RT 01/RW 10 Kartasura, Sukoharjo."
    ]
  },
  "pengajian-rutin-kitab-fathul-qorib-kh-mahbub": {
    title: "Pengajian Rutin Kitab Fathul Qorib Bersama Dr. KH. Moh. Mahbub, M.Si. Setiap Ahad Malam",
    date: "5 Agustus 2026",
    author: "Redaksi Media Santri",
    category: "Kajian Kitab",
    image: "/images/kitab_kuning_study.jpg",
    content: [
      "Setiap Ahad malam Ba'da Maghrib, Masjid Al-Fattah Krapyak Kartasura selalu dipadati oleh para santri mukim dan mahasiswa untuk mengikuti Pengajian Rutin Kitab Fathul Qorib Al-Mujib.",
      "Pengajian ini diampu secara langsung oleh Pengasuh Pesantren, Dr. KH. Moh. Mahbub, M.Si., dengan metode sorogan dan bandongan tradisional khas pesantren Nusantara.",
      "Dalam pengajian ini, santri diajak untuk tidak hanya memahami teks hukum fiqih secara kontekstual, tetapi juga mengaitkannya dengan persoalan muamalah dan ibadah di kehidupan sehari-hari."
    ]
  },
  "muhadhoroh-3-bahasa-santri-al-fattah": {
    title: "Semangat Santri Al-Fattah dalam Latihan Muhadhoroh 3 Bahasa (Indonesia, Arab, Inggris)",
    date: "28 Juli 2026",
    author: "Tim Jurnalistik Santri",
    category: "Kegiatan Santri",
    image: "/images/pengasuh_kyai_nyai.jpg",
    content: [
      "Kegiatan Muhadhoroh (latihan pidato dan public speaking) menjadi salah satu agenda rutin mingguan yang paling dinanti oleh para santri Pondok Pesantren Al-Fattah Krapyak Kartasura.",
      "Melalui kegiatan ini, para santri dilatih untuk tampil percaya diri menguraikan dakwah dan gagasan ilmiah dalam tiga bahasa: Bahasa Indonesia, Bahasa Arab, dan Bahasa Inggris.",
      "Harapannya, para lulusan Al-Fattah tidak hanya menguasai kedalaman kitab turats, tetapi juga siap menjadi muballigh dan pemimpin berwawasan luas di era global."
    ]
  },
  "silaturahmi-wali-santri-dan-pengasuh-yayasan-insan-kamil": {
    title: "Silaturahmi Pengasuh Yayasan Insan Kamil Bersama Wali Santri Baru",
    date: "15 Juli 2026",
    author: "Sekretariat Pesantren",
    category: "Silaturahmi",
    image: "/images/tahfizh.jpg",
    content: [
      "Yayasan Insan Kamil menyelenggarakan acara Pertemuan Silaturahmi Pengasuh dan Wali Santri Baru di Aula Pesantren Al-Fattah Krapyak Kartasura.",
      "Acara diawali dengan pembacaan ayat suci Al-Qur'an dan sholawat hadroh, dilanjutkan dengan pengarahan pengasuhan oleh Dr. KH. Moh. Mahbub, M.Si. & Dr. Hj. Kamila Adnani, M.Si.",
      "Dalam sambutannya, pengasuh menekankan pentingnya tawadhu, kesederhanaan, dan keikhlasan dalam mendukung proses menuntut ilmu para santri."
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articlesMap[resolvedParams.slug] || {
    title: "Berita Pesantren Al-Fattah",
    category: "Berita",
  };
  return {
    title: `${article.title} | Pondok Pesantren Al-Fattah Krapyak Kartasura`,
  };
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articlesMap[resolvedParams.slug] || {
    title: "Artikel Tidak Ditemukan",
    date: "-",
    author: "Humas Al-Fattah",
    category: "Informasi",
    image: "/images/al_fattah_hero.jpg",
    content: ["Maaf, artikel yang Anda cari tidak ditemukan atau telah dipindahkan."]
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={article.image} alt={article.title} fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <Link href="/berita" className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold text-xs bg-emerald-900 px-3.5 py-1 rounded-full border border-emerald-700">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Berita
          </Link>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-snug">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl space-y-6">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose prose-emerald max-w-none space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-slate-600">Kategori: {article.category}</span>
            </div>
            <Button asChild className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold">
              <Link href="/psb">
                Informasi Pendaftaran PSB 2026/2027
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
