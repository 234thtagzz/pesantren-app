import { HeroSection } from "@/components/home/hero-section";
import { PengasuhSection } from "@/components/home/pengasuh-section";
import { ProgramSection } from "@/components/home/program-section";
import { KitabSection } from "@/components/home/kitab-section";
import { FasilitasSection } from "@/components/home/fasilitas-section";
import { AgendaSection } from "@/components/home/agenda-section";
import { TestimoniSection } from "@/components/home/testimoni-section";
import { PsbBanner } from "@/components/home/psb-banner";

export const metadata = {
  title: "Pondok Pesantren Al-Fattah Kartasura | Profile, Pengajian Kitab & PSB 2026/2027",
  description: "Website Resmi Pondok Pesantren Al-Fattah Krapyak, Kartasura, Sukoharjo. Pengasuh: Dr. KH. Moh. Mahbub, M.Si. & Dr. Hj. Kamila Adnani, M.Si. (Yayasan Insan Kamil). Pusat Informasi Santri Mukim, Kitab Kuning, & Pesantren Mahasiswa.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSection />
      <PengasuhSection />
      <ProgramSection />
      <KitabSection />
      <FasilitasSection />
      <AgendaSection />
      <TestimoniSection />
      <PsbBanner />
    </main>
  );
}
