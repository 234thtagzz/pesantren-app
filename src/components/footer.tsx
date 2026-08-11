import Link from "next/link";
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  ArrowRight, 
  Heart
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-slate-300 border-t border-emerald-900/60 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-400 border border-amber-500/40 shadow-inner">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">
                  PONDOK PESANTREN AL-FATTAH
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  Krapyak, Kartasura, Sukoharjo • Yayasan Insan Kamil
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Lembaga pendidikan Islam terpadu yang diasuh oleh <strong>Dr. KH. Moh. Mahbub, M.Si.</strong> & <strong>Dr. Hj. Kamila Adnani, M.Si.</strong> Berkomitmen mencetak santri yang berakhlak mulia, berpengetahuan luas, dan mandiri.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs px-3 py-1.5 rounded-lg font-semibold">
                <Award className="w-4 h-4 text-amber-400" />
                Yayasan Berdiri Maret 2007
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs px-3 py-1.5 rounded-lg font-semibold">
                Pesantren Beroperasi Agt 2007
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a 
                href="https://instagram.com/ponpes_alfattah" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/60 hover:bg-amber-500 hover:text-emerald-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="Instagram @ponpes_alfattah"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/62882006454771" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/60 hover:bg-amber-500 hover:text-emerald-950 text-slate-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-800 pb-2 inline-block">
              Tautan Utama
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/profile", label: "Profil & Pengasuh Pesantren" },
                { href: "/profile#visi-misi", label: "Motto & Panca Jiwa" },
                { href: "/program", label: "Program Kitab Kuning" },
                { href: "/program#pesantren-mahasiswa", label: "Pesantren Mahasiswa" },
                { href: "/fasilitas", label: "Fasilitas Kampus Krapyak" },
                { href: "/berita", label: "Berita & Kegiatan" },
                { href: "/psb", label: "Pendaftaran Santri Baru" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs & Facilities */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-800 pb-2 inline-block">
              Kajian Kitab Kuning
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Kitab Amtsilati & Jurumiyah
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Alfiyah Ibn Malik (Nahwu-Sharaf)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Fathul Qorib Al-Mujib (Fiqih)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Nashoihul Ibad & Ta'lim Muta'allim
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Tahfizh Al-Qur'an & Tilawah
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Madrasah Diniyah (Madin)
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-800 pb-2 inline-block">
              Alamat & Sekretariat
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Desa Krapyak RT 01 / RW 10, Kel. Kartasura, Kec. Kartasura, Kab. Sukoharjo, Jawa Tengah 57169 (±400m timur IAIN/UIN Surakarta).</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+62 857-2800-4560 / +62 812-2977-8007</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ponpesalfattahkts@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Sekretariat: 08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Yayasan Insan Kamil — Pondok Pesantren Al-Fattah Kartasura. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> untuk keberkahan ilmu santri.
          </p>
        </div>
      </div>
    </footer>
  );
}
