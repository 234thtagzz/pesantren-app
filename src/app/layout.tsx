import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Pondok Pesantren Al-Fattah Kartasura | Krapyak Sukoharjo",
    template: "%s | Pondok Pesantren Al-Fattah Kartasura",
  },
  description:
    "Pusat Informasi Resmi Pondok Pesantren Al-Fattah Krapyak, Kartasura, Sukoharjo (Yayasan Insan Kamil). Pengasuh: Dr. KH. Moh. Mahbub, M.Si. & Dr. Hj. Kamila Adnani, M.Si. Kajian Kitab Kuning Amtsilati, Jurumiyah, Alfiyah, Fathul Qorib & Pesantren Mahasiswa.",
  keywords: [
    "Pondok Pesantren Al-Fattah",
    "Al Fattah Krapyak Kartasura",
    "Pesantren Kartasura Sukoharjo",
    "Pesantren Mahasiswa UIN Surakarta",
    "Dr. KH. Moh. Mahbub",
    "Yayasan Insan Kamil Kartasura",
    "Kitab Amtsilati Alfiyah Fathul Qorib",
    "PSB Pesantren Kartasura 2026",
  ],
  authors: [{ name: "Pondok Pesantren Al-Fattah Kartasura" }],
  openGraph: {
    title: "Pondok Pesantren Al-Fattah Kartasura | Krapyak Sukoharjo",
    description: "Lembaga pendidikan Islam terpadu pengajian kitab kuning turats & pesantren mahasiswa di Krapyak, Kartasura, Sukoharjo.",
    url: "https://www.alfattah.or.id",
    siteName: "Pondok Pesantren Al-Fattah Krapyak Kartasura",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakarta.variable} font-sans scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-emerald-950">
        <ScrollProgress />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
