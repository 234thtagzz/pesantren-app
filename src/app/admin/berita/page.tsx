"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { 
  Loader2, 
  Trash2, 
  PlusCircle, 
  ArrowLeft, 
  Image as ImageIcon, 
  Newspaper, 
  Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Berita {
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

export default function AdminBeritaPage() {
  const [beritaList, setBeritaList] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kegiatan Santri");
  const [author, setAuthor] = useState("Humas Al-Fattah");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setAuthChecking(false);
        fetchBerita();
      }
    };
    checkAuth();
  }, [router]);

  const fetchBerita = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("berita")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setBeritaList(data || []);
    setLoading(false);
  };

  const handleUploadBerita = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let imageUrl = "/images/al_fattah_hero.jpg"; // fallback default image

      // 1. Upload Gambar ke Storage jika ada
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `berita_${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("gambar-berita")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("gambar-berita")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      // 2. Buat Slug unik
      const cleanSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") + `-${Date.now().toString().slice(-4)}`;

      // 3. Insert ke Database
      const { error: dbError } = await supabase.from("berita").insert([
        {
          slug: cleanSlug,
          title,
          category,
          author,
          excerpt,
          content,
          image: imageUrl,
        },
      ]);

      if (dbError) throw dbError;

      alert("Berita berhasil dipublikasikan!");
      // Reset Form
      setTitle("");
      setExcerpt("");
      setContent("");
      setImageFile(null);
      fetchBerita();
    } catch (err: any) {
      console.error(err);
      alert("Gagal mengunggah berita: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Yakin ingin menghapus berita "${title}"?`)) return;

    setDeletingId(id);
    const { error } = await supabase.from("berita").delete().eq("id", id);

    if (!error) {
      setBeritaList((prev) => prev.filter((item) => item.id !== id));
      alert("Berita berhasil dihapus.");
    } else {
      alert("Gagal menghapus berita.");
    }
    setDeletingId(null);
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="rounded-xl">
            <Link href="/admin"><ArrowLeft className="w-4 h-4 mr-1" /> Dashboard</Link>
          </Button>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Kelola Berita & Kegiatan</h1>
            <p className="text-xs text-slate-500">Upload warta baru atau hapus artikel lama</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Upload (1 Kolom) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b pb-2">
            <PlusCircle className="w-5 h-5 text-emerald-700" /> Form Tambah Berita Baru
          </h2>

          <form onSubmit={handleUploadBerita} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Judul Berita *</label>
              <Input
                required
                placeholder="Contoh: Pengajian Rutin Kitab Fathul Qorib..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-xl text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kategori *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-9 px-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold"
                >
                  <option value="Informasi PSB">Informasi PSB</option>
                  <option value="Kegiatan Santri">Kegiatan Santri</option>
                  <option value="Kajian Kitab">Kajian Kitab</option>
                  <option value="Silaturahmi">Silaturahmi</option>
                  <option value="Pengumuman">Pengumuman</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Penulis *</label>
                <Input
                  required
                  placeholder="Humas Al-Fattah"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="rounded-xl text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Gambar Utama</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="w-full text-xs text-slate-600 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-emerald-700 file:text-white border rounded-xl p-1"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Ringkasan (Excerpt) *</label>
              <textarea
                required
                rows={2}
                placeholder="Ringkasan singkat berita untuk tampilan kartu..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full p-2.5 rounded-xl border text-xs focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Isi Lengkap Berita *</label>
              <textarea
                required
                rows={6}
                placeholder="Tuliskan isi berita lengkap di sini..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2.5 rounded-xl border text-xs focus:ring-emerald-600"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-5 rounded-xl"
            >
              {submitting ? (
                <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin"/> Menerbitkan...</span>
              ) : "Terbitkan Berita"}
            </Button>
          </form>
        </div>

        {/* List Berita Terbit (2 Kolom) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b pb-2">
            <Newspaper className="w-5 h-5 text-amber-600" /> Daftar Berita Terbit ({beritaList.length})
          </h2>

          {loading ? (
            <div className="p-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-emerald-700"/></div>
          ) : beritaList.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-8">Belum ada berita terpublikasi.</p>
          ) : (
            <div className="space-y-3">
              {beritaList.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div className="space-y-1 overflow-hidden">
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">{item.category}</span>
                      <h3 className="font-bold text-xs text-slate-900 truncate">{item.title}</h3>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3"/> {new Date(item.created_at).toLocaleDateString("id-ID")} • Oleh: {item.author}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={deletingId === item.id}
                    onClick={() => handleDelete(item.id, item.title)}
                    className="bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-xl"
                  >
                    {deletingId === item.id ? <Loader2 className="w-3.5 h-3.5 animate-spin"/> : <Trash2 className="w-3.5 h-3.5"/>}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}