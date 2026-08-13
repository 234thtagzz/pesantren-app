"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Calendar, User, ArrowRight, Loader2, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Berita {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  image: string;
  created_at: string;
}

export default function BeritaPage() {
  const [articles, setArticles] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("id, slug, title, category, author, excerpt, image, created_at")
        .order("created_at", { ascending: false });

      if (!error) {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

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
          <span className="inline-block text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
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
        {loading ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center shadow-xl space-y-3">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-emerald-700" />
            <p className="text-sm font-semibold text-slate-600">Memuat kabar berita terbaru...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center shadow-xl space-y-3">
            <Newspaper className="w-12 h-12 mx-auto text-slate-300" />
            <h3 className="text-lg font-bold text-slate-800">Belum Ada Berita</h3>
            <p className="text-xs text-slate-500">Berita dan artikel kegiatan terbaru akan muncul di sini.</p>
          </div>
        ) : (
          /* Main Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((item) => (
              <article 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={item.image || "/images/al_fattah_hero.jpg"} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-emerald-900 text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-emerald-700" />
                        {item.author}
                      </span>
                    </div>

                    <h2 className="font-extrabold text-xl text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
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
                    className="w-full justify-between border-slate-300 text-emerald-800 font-bold hover:bg-emerald-800 hover:text-white rounded-2xl"
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
        )}
      </div>
    </main>
  );
}