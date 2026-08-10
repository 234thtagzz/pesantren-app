import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Award, 
  Target, 
  Compass, 
  CheckCircle2, 
  GraduationCap,
  Heart,
  ShieldCheck,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileView() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Profile Header Banner */}
      <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/al_fattah_hero.jpg"
            alt="Profil Pesantren Al-Fattah Krapyak Kartasura"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Yayasan Insan Kamil • Est. 2007
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Profil & Sejarah Pondok Pesantren Al-Fattah
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Membina generasi santri & mahasiswa berakhlak mulia di Krapyak, Kartasura, Sukoharjo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        {/* Sejarah & Latar Belakang */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Sejarah & Latar Belakang
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950">
              Berdiri Sejak Tahun 2007 di Krapyak Kartasura
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Yayasan Insan Kamil secara resmi berdiri pada <strong>Maret 2007</strong>, dan Pondok Pesantren Al-Fattah mulai beroperasi pada bulan <strong>Agustus 2007</strong>. Pesantren ini didirikan di bawah asuhan <strong>Dr. KH. Moh. Mahbub, S.Ag., M.Si.</strong> dan <strong>Dr. Hj. Kamila Adnani, M.Si.</strong>
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Berada di lingkungan strategis Krapyak Kartasura (±400 meter di sebelah timur kampus IAIN Surakarta / UIN Raden Mas Said Surakarta), Al-Fattah berkembang menjadi pusat pengkaderan santri dan mahasiswa yang memadukan keikhlasan tradisi salaf dengan keluasan wawasan modern.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 aspect-[4/3]">
              <Image
                src="/images/pengasuh_kyai_nyai.jpg"
                alt="Pengasuh Pondok Pesantren Al-Fattah"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-950/20" />
            </div>
          </div>
        </section>

        {/* Motto Pesantren Banner */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-800 shadow-xl text-center space-y-4">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-amber-500/30">
            Motto Pesantren
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-amber-300 italic">
            &ldquo;Berbudi Tinggi, Berbadan Sehat, Berpengetahuan Luas, dan Berpikiran Bebas&rdquo;
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Empat pilar utama kepribadian santri Al-Fattah yang menjadi komitmen dalam pembentukan akhlaq, jasmani, intelektualitas, serta kemandirian berpikir.
          </p>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Arah & Tujuan Lembaga
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              Visi & Misi Pesantren
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-8 rounded-3xl border border-emerald-700 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-amber-300">Visi Pesantren</h3>
              <p className="text-slate-200 text-base leading-relaxed">
                &ldquo;Menjadi pesantren yang unggul dalam mencetak insan kamil yang berakhlak mulia, menguasai ilmu-ilmu keislaman melalui kajian kitab turats, serta berwawasan luas dan mandiri.&rdquo;
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950">Misi Pesantren</h3>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menyelenggarakan kajian kitab kuning (Nahwu Amtsilati, Jurumiyah, Alfiyah, Fiqih Fathul Qorib, & Tasawuf).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Membina pembiasaan akhlaqul karimah, ukhuwah islamiyah, dan disiplin ibadah santri.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menyediakan fasilitasi pendampingan belajar bagi santri mukim & mahasiswa perkuliahan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mengembangkan ketrampilan wirausaha (entrepreneurship) dan kepemimpinan santri.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Panca Jiwa Pesantren */}
        <section className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider bg-emerald-900 px-3 py-1 rounded-full border border-emerald-700">
              Nilai Filosofi
            </span>
            <h2 className="text-3xl font-extrabold">Panca Jiwa Pondok Pesantren Al-Fattah</h2>
            <p className="text-slate-300 text-sm">
              Prinsip fondasi kehidupaan santri Al-Fattah dalam bermasyarakat dan menuntut ilmu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Keikhlasan", desc: "Semata-mata menuntut ilmu dan beramal mencari keridhaan Allah SWT." },
              { title: "Kesederhanaan", desc: "Bersikap bersahaja, bersyukur, dan tidak berlebihan." },
              { title: "Berdikari", desc: "Kemandirian mental dan keterampilan diri santri tanpa bergantung pada orang lain." },
              { title: "Ukhuwah Islamiyah", desc: "Persaudaraan erat penuh kasih sayang antar sesama santri dan masyarakat." },
              { title: "Jiwa Bebas", desc: "Bebas berkreasi, berpikir positif dan berwawasan luas dalam bingkai syariat Islam." },
            ].map((jiwa, idx) => (
              <div key={idx} className="bg-emerald-900/60 p-5 rounded-2xl border border-emerald-800 space-y-2 text-center">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-emerald-950 font-bold mx-auto flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h4 className="font-extrabold text-base text-amber-300">{jiwa.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{jiwa.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pengasuh Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              Pimpinan & Pengasuh
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-950">Pengasuh Pondok Pesantren</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-lg text-center space-y-4">
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-400 shadow-md">
              <Image src="/images/pengasuh_kyai_nyai.jpg" alt="Pengasuh Pesantren" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-extrabold text-2xl text-emerald-950">Dr. KH. Moh. Mahbub, S.Ag., M.Si.</h3>
              <p className="font-bold text-amber-700 text-base">& Dr. Hj. Kamila Adnani, M.Si.</p>
              <p className="text-xs text-slate-500 mt-1">Pengasuh Utama Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto italic">
              &ldquo;Mendidik santri bukan hanya mengajar bacaan kitab, tetapi menanamkan ruh keikhlasan dan akhlaq yang mulia dalam kehidupan sehari-hari.&rdquo;
            </p>
          </div>
        </section>

        {/* CTA PSB */}
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl border border-amber-500/40 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Tertarik Bergabung Menjadi Santri Al-Fattah?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Penerimaan Santri Baru (PSB) T.A. 2026/2027 telah dibuka untuk santri mukim, diniyah, dan santri mahasiswa.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button asChild className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-6">
              <Link href="/psb">
                <GraduationCap className="w-5 h-5 mr-2" />
                Daftar PSB Online
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}