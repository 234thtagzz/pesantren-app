"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Calendar, User, ArrowLeft, Loader2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeritaDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  created_at: string;
}

export default function DetailBeritaPage() {
  const params = useParams();
  const [berita, setBerita] = useState<BeritaDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!params?.slug) return;

      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .eq("slug", params.slug)
        .single();

      if (!error && data) {
        setBerita(data);
      }
      setLoading(false);
    };

    fetchDetail();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-3">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-700" />
        <p className="text-sm font-semibold text-slate-600">Memuat artikel berita...</p>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Berita Tidak Ditemukan</h1>
        <p className="text-xs text-slate-500 max-w-sm">
          Artikel yang Anda cari mungkin telah dihapus atau tautan yang Anda tuju salah.
        </p>
        <Button asChild variant="outline" className="rounded-xl">
          <Link href="/berita"><ArrowLeft className="w-4 h-4 mr-2"/> Kembali ke Berita</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-6">
        <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-emerald-800">
          <Link href="/berita"><ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Semua Berita</Link>
        </Button>

        <article className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Main Header Banner */}
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src={berita.image || "/images/al_fattah_hero.jpg"}
              alt={berita.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute top-6 left-6 bg-emerald-800 text-amber-300 font-bold text-xs px-3 py-1.5 rounded-full border border-amber-400/30">
              {berita.category}
            </span>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-4 text-xs text-slate-500 border-b pb-4">
              <span className="flex items-center gap-1 font-semibold text-emerald-800">
                <Calendar className="w-4 h-4" />
                {new Date(berita.created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {berita.author}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
              {berita.title}
            </h1>

            <p className="text-slate-600 text-base font-semibold italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-xl">
              {berita.excerpt}
            </p>

            <div className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-4 space-y-4 border-t break-words">
              {berita.content}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}