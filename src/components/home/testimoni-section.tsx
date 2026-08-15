"use client";

import { useRef, useEffect } from "react";
import { 
  Star, 
  Quote,  
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ulya Darojat, S.Pd.",
    role: "Guru",
    text: "Selain ilmu ukhrawi, Al Fattah mengajarkan saya kedisiplinan waktu, ketahanan mental, dan kemampuan beradaptasi di lingkungan yang majemuk. Bagi saya, Al Fattah bukan sekadar tempat belajar agama, melainkan laboratorium kehidupan, tempat saya meramu dan membentuk karakter. Jazakumullah khoiron ahsanal jaza atas semua bimbingan yang telah diberikan. Saat ini saya mengabdikan diri sebagai guru di Kradenan, Grobogan.",
    avatar: "UD",
    year: "Alumni 2019",
    location: "Kradenan, Grobogan"
  },
  {
    id: 2,
    name: "Lisa Hertiana",
    role: "Advokat",
    text: "Saya mengucapkan banyak terima kasih kepada para ustadz dan ustadzah yang telah membimbing, mendidik, dan memberikan ilmu serta nasihat dengan penuh kesabaran dan keikhlasan Selama menempuh pendidikan di Pondok Pesantren Al Fattah. Semoga segala kebaikan dan jasa yang diberikan menjadi amal jariyah dan mendapat balasan terbaik dari Allah SWT.Alhamdulillah Saat ini saya berprofesi sebagai Advokat di Kantor Hukum Hutama-Aniq & Rekan.",
    avatar: "LH",
    year: "Alumni 2020",
    location: "Kantor Hukum Hutama-Aniq & Rekan"
  },
  {
    id: 3,
    name: "Arif Ahmad",
    role: "Guru PAI SD",
    text: "Ilmu dan akhlak adalah dua bekal besar yang saya dapatkan selama di Al Fattah, salah satunya kecintaan saya pada kitab kuning yang tumbuh berkat bimbingan para ustadz dan ustadzah. Terima kasih Ustadz dan Ustadzah Al Fattah atas semua ilmu yang diberikan, termasuk pengalaman berharga saat dilatih menjadi ustadz di pondok. Saat ini saya mengabdi sebagai Guru PAI SD di SDN Jetisharjo.",
    avatar: "AA",
    year: "Alumni 2013",
    location: "SDN Jetisharjo"
  },
  {
    id: 4,
    name: "Setyorini, S.Sy",
    role: "Manajer BMT Hira Cabang",
    category: "Santri Mahasiswa",
    text: "Ilmu, persaudaraan, dan lingkungan pondok yang luar biasa adalah bekal berharga yang saya bawa dari Al Fattah. Terima kasih kepada Bapak dan Ibu Nyai atas semua bimbingan dan ilmunya, juga kepada para ustadz, ustadzah, pengurus, serta seluruh teman-teman. Saat ini saya bekerja sebagai Manajer di BMT Hira Sragen, Cabang Sambirejo.",
    avatar: "S",
    year: "Alumni 2009",
    location: "Sambirejo, Sragen"
  },
  {
    id: 5,
    name: "Imroatul Mufidah",
    role: "PNS, Guru SDN Galis 2",
    text: "Banyak hal saya dapatkan selama di Al Fattah, terutama pembentukan akhlak dan sopan santun, termasuk kesempatan belajar bahasa Jawa yang kaya ragamnya. Terima kasih banyak sudah menerima segala kekurangan saya dan telah mendidik saya dengan sabar. Alhamdulillah, sejak tahun 2019 saya menjadi PNS dan saat ini bertugas di SDN Galis 2, Bangkalan, Madura.",
    avatar: "IM",
    year: "Alumni 2014",
    location: "Bangkalan, Madura"
  },
  {
    id: 6,
    name: "Atik Nurrohmawati, M.Pd",
    role: "Guru Bahasa Arab MAN 3 Sawit",
    text: "Kebermanfaatan ilmu dari pesantren serta persahabatan yang terjalin menjadi bekal yang terus saya rasakan hingga kini. Syukron jazilan saya haturkan kepada Mudhirul Ma'had, khususnya Abah KH. M. Mahbub dan Hj. Kamila Adnani beserta keluarga, juga kepada para ustadz, ustadzah, dan pengurus yang telah mendedikasikan diri untuk Al Fattah. Saat ini saya berbahagia dapat menularkan ilmu yang saya peroleh sebagai Guru Bahasa Arab di MAN 3 Sawit, Boyolali.",
    avatar: "AN",
    year: "Alumni 2011",
    location: "Boyolali"
  },
  {
    id: 7,
    name: "Rudini Sisto Astra, S.H",
    role: "Barista Barokah Group",
    text: "Kemampuan membaca kitab, mengatur waktu antara pendidikan pondok dan kuliah, serta persahabatan lintas daerah adalah bekal berharga dari Al Fattah. Terima kasih atas waktu dan dedikasi yang diberikan dengan ikhlas dalam mendidik dan mendukung para santri. Saat ini saya bekerja sebagai Barista di Barokah Group, Pangkal Pinang.",
    avatar: "RS",
    year: "Alumni 2017 ",
    location: "Pangkal Pinang"
  },
  {
    id: 8,
    name: "Saleh Nur Fadhilah, S.Pd.",
    role: "Guru SLB-C YPSLB",
    text: "Selama di Al Fattah saya belajar banyak hal, mulai dari memperkuat keimanan lewat bacaan dzikir, membaca kitab kuning, hingga bersosialisasi dengan baik. Terima kasih untuk seluruh keluarga besar Pondok Pesantren Al Fattah, tempat saya belajar banyak hal, khususnya tentang kesabaran dan toleransi. Saat ini saya mengabdi sebagai Guru di SLB-C YPSLB Gemolong, Sragen.",
    avatar: "NF",
    year: "Alumni 2015 ",
    location: "Gemolong, Sragen"
  },
  {
    id: 9,
    name: "Muhammad Zada Nasrul Adzim, S.Ag",
    role: "Wirausaha Swasta",
    text: "Ilmu pengetahuan yang cukup dan keterampilan yang memadai menjadi bekal saya dari Al Fattah. Terima kasih kepada semua pihak yang telah bekerja sama mewujudkan Al Fattah yang cakap, terampil, dan agamis, terutama kepada Abah Mahbub sekeluarga. Saat ini saya menjalankan usaha sebagai wirausaha swasta di Kranggan, Ambarawa.",
    avatar: "ZN",
    year: "Alumni 2021",
    location: "Wirausaha Swasta"
  },
  {
    id: 10,
    name: "Nela Oktavia, S.Pd",
    role: "Guru SMP IT Al Anis",
    text: "Banyak hal saya dapatkan dari Al Fattah, salah satunya pengalaman berorganisasi dan mengelola kegiatan seperti kurban bersama masyarakat serta pengajian akbar. Tak kalah berharga, saya bertemu banyak teman dengan beragam latar belakang yang menjadikan pengalaman mondok tak terlupakan. Terima kasih untuk Pondok Pesantren Al Fattah yang menjadi saksi perjalanan hidup saya, khususnya kepada Mba Inayah dan Ustadz Atqo. Saat ini saya berprofesi sebagai Guru Swasta di SMP IT Al Anis Kartasura.",
    avatar: "NO",
    year: "Alumni 2014",
    location: "Kartasura, Sukoharjo"
  },
  {
    id: 11,
    name: "Muhamad Agung Nur Fadli, S.Pd",
    role: "Mahasiswa",
    text: "Pengalaman yang berkesan mewarnai setiap detik saya selama di Al Fattah. Terima kasih untuk Pondok Pesantren Al Fattah, khususnya kepada pengasuh, asatidz, pengurus, dan seluruh santri. Saat ini saya sedang menempuh pendidikan sebagai mahasiswa di Bandung.",
    avatar: "AN",
    year: "Alumni 2019",
    location: "Bandung"
  },
  {
    id: 12,
    name: "Hamida Zahra, S.H.",
    role: "Human Resource",
    text: "Wawasan ilmu, persahabatan, kebersamaan, dan pelajaran hidup adalah bekal yang saya bawa dari Al Fattah. Terima kasih Al Fattah sudah menjadi bagian dari perjalanan hidup saya dan memberikan banyak hal yang bermanfaat. Saat ini saya bekerja sebagai Human Resource di PT. Mitracomm Ekasarana.",
    avatar: "HA",
    year: "Alumni 2019",
    location: "PT. Mitracomm Ekasarana"
  },
  {
    id: 13,
    name: "Rohana Ashari, S.Pd.",
    role: "Guru TK Darunnajah",
    text: "Alhamdulillah, saya berkesempatan mengkhatamkan kitab Nahwu Shorof Amtsilati jilid 1–5, ditambah Jurumiyah dan sedikit Nadhom Alfiyah, serta berbagai kitab lainnya. Syukron katsiron jazakumullah ahsanal jaza kepada Abah Kyai Mahbub, Ibu Nyai Kamila beserta keluarga, serta seluruh asatidz dan pengurus atas ilmu dan bimbingannya. Setelah lulus tahun 2021, saya sempat menjadi guru tahfidz, agama, dan TU di sebuah MTs di Ngawi selama kurang lebih tiga tahun, dan saat ini saya mengabdi sebagai Guru TK di TK Darunnajah, Debong Kulon, Kota Tegal.",
    avatar: "RA",
    year: "Alumni 2018/2019",
    location: "Debong Kulon, Kota Tegal"
  },
  {
    id: 14,
    name: "Nufi Asii Fairuziyyah, S.Psi",
    role: "Asisten Psikolog & Leader of HR Development",
    text: "Terima kasih kepada Abah Yai dan Ibu Nyai yang telah mendidik saya dengan disiplin dan kecintaan pada ilmu. Pesan beliau selalu saya pegang: manfaatkan kompetensimu, lakukan dengan hati, dan tetap di jalan Allah. Berkat doa beliau, saya lulus cumlaude, tepat waktu, dan berhasil menerbitkan buku tunggal. Saat ini saya berkiprah sebagai presenter dan pembicara nasional, sekaligus menjadi asisten psikolog dan leader of HR development secara bersamaan. nikmati masa sulit di pondok, karena ketekunan menuju akhirat akan membawa kesuksesan di dunia.",
    avatar: "NA",
    year: "Alumni 2021",
    location: ""
  },
  {
    id: 15,
    name: "Pipit Wahyuni Putri, S.H",
    role: "Pengajar Bimbel (Wirausaha Mandiri)",
    text: "Bagi saya, Al Fattah adalah rumah kedua. Selama empat tahun, saya tidak hanya dibimbing soal keagamaan, tetapi juga hal-hal baik lainnya seperti belajar, disiplin, kemandirian, dan media. Yang paling berkesan, saya berkesempatan belajar desain dan videografi.Saat ini saya menjadi pengajar bimbel yang saya kelola sendiri dari rumah, dan alhamdulillah bimbel ini telah memiliki lebih dari 50 murid. Bismillah, saya ingin terus mengembangkan bimbel ini dengan arahan Abah dan Ibu Nyai, karena ilmu media yang saya pelajari di Al Fattah tidak pernah sia-sia.",
    avatar: "PW",
    year: "Alumni 2020",
    location: ""
  }
];

// Triplikasi data untuk tak terbatas
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimoniSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Set posisi scroll ke tengah saat awal render tanpa animasi
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      container.style.scrollBehavior = "auto";
      container.scrollLeft = singleSetWidth;
    }
  }, []);

  // Handler pergantian posisi seamless
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    // Paksa perilaku scroll jadi "auto" (instan) saat me-reset posisi
    container.style.scrollBehavior = "auto";

    // Jika mendekati batas paling kiri (set ke-1), reset ke tengah (set ke-2)
    if (container.scrollLeft <= 5) {
      container.scrollLeft += singleSetWidth;
    } 
    // Jika mendekati batas paling kanan (set ke-3), reset ke tengah (set ke-2)
    else if (container.scrollLeft >= singleSetWidth * 2 - 5) {
      container.scrollLeft -= singleSetWidth;
    }
  };

  // Fungsi scroll tombol panah
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Aktifkan scroll smooth khusus saat tombol diklik
      container.style.scrollBehavior = "smooth";
      const scrollAmount = 380;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-10 via-slate-950 to-primary-10 text-white relative overflow-hidden">
      {/* Background Lighting & Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-primary-6/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header & Navigasi Panah */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-primary-8/80 pb-8 items-center">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-primary-9/80 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Suara Santri & Pengalaman Wali
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Testimoni Alumni Santri <span className="whitespace-nowrap">Al-Fattah</span> 
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Pengalaman Berkata dalam kehidupan yang dijalani Para Alumni Al-Fattah.
            </p>
          </div>

        </div>

        {/* Track Testimoni Scroll Horizontal (Fitur Seamless / No Jitter) */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {infiniteTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="shrink-0 w-[300px] sm:w-[380px] bg-gradient-to-br from-primary-9/90 via-primary-10/95 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/60 transition-all duration-300 select-none"
            >
              {/* Background Quote Watermark */}
              <Quote className="w-28 h-28 text-amber-500/10 absolute -top-3 -right-3 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div className="space-y-4 relative z-10">
                {/* Isi Kutipan Testimoni */}
                <blockquote className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
              </div>

              {/* Identitas Penulis Testimoni */}
              <div className="pt-6 mt-6 border-t border-primary-8/80 flex items-center gap-3.5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-primary-10 font-extrabold text-lg flex items-center justify-center shadow-lg shadow-amber-500/20 border-2 border-amber-300 shrink-0">
                  {item.avatar}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5 truncate">
                    <span className="truncate">{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  </h3>
                  <p className="text-[11px] text-amber-300 font-semibold truncate">{item.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.year} - {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}