"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { 
  Users, 
  Newspaper, 
  ShieldCheck, 
  LogOut, 
  ArrowRight, 
  Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setAuthChecking(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white space-y-3">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
        <p className="text-sm font-semibold tracking-wide">Memeriksa Sesi Admin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-emerald-700 font-bold text-xs uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1 w-max">
            <ShieldCheck className="w-3.5 h-3.5" /> Administrator Panel
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Pusat Kendali Sistem Al-Fattah
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Silakan pilih modul pengelolaan data yang ingin Anda akses.
          </p>
        </div>

        <Button 
          onClick={handleLogout} 
          variant="destructive" 
          className="bg-red-600 hover:bg-red-700 font-bold text-white rounded-xl"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Keluar (Logout)
        </Button>
      </div>

      {/* Menu Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card 1: Data PSB */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center shadow-inner">
              <Users className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
              Data Pendaftaran PSB
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kelola dan tinjau berkas calon santri baru yang terdaftar, seperti KK, KTP, Foto, Ijazah, Surat Narkoba, Bukti Bayar, dan Berkas Pendukung.
            </p>
          </div>

          <div className="pt-8">
            <Button asChild className="w-full justify-between bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-6 rounded-2xl">
              <Link href="/admin/psb">
                Buka Data PSB
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Card 2: Kelola Berita */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center shadow-inner">
              <Newspaper className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors">
              Kelola Berita & Kegiatan
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Upload pengumuman baru, artikel pengajian, dokumentasi acara pesantren, serta hapus warta berita yang sudah tidak relevan.
            </p>
          </div>

          <div className="pt-8">
            <Button asChild className="w-full justify-between bg-amber-600 hover:bg-amber-700 text-white font-bold py-6 rounded-2xl">
              <Link href="/admin/berita">
                Upload & Kelola Berita
                <ArrowRight className="w-5 h-5 text-amber-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}