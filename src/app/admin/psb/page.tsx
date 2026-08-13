"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { 
  Loader2, 
  FileText, 
  ExternalLink, 
  RefreshCw,
  UserCheck,
  Download,
  LogOut,
  ShieldCheck,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Pendaftar {
  id: string;
  registration_id: string;
  nama_santri: string;
  jenis_kelamin: string;
  kategori: string;
  perguruan_tinggi: string;
  nama_orang_tua: string;
  whatsapp: string;
  email: string;
  kota_asal: string;
  catatan: string;
  url_kk: string | null;
  url_ktp: string | null;
  url_pas_foto: string | null;
  url_surat_narkoba: string | null;
  url_ijazah: string | null;
  url_bukti_bayar: string | null;
  url_berkas_pendukung: string | null;
  created_at: string;
}

export default function AdminPsbPage() {
  const [data, setData] = useState<Pendaftar[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();

  // 1. Pengecekan Akses Auth Admin
  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // Jika belum login, tendang ke halaman login
        router.push("/admin/login");
      } else {
        setAuthChecking(false);
        fetchData();
      }
    };

    checkAdminAuth();
  }, [router]);

  // 2. Fungsi Ambil Data Pendaftar
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: pendaftar, error } = await supabase
        .from("pendaftar_psb")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setData(pendaftar || []);
    } catch (err) {
      console.error("Gagal mengambil data pendaftar:", err);
      alert("Gagal memuat data pendaftar dari Supabase.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Fungsi Hapus Data & Berkas
  const handleDelete = async (id: string, registrationId: string, namaSantri: string) => {
    const isConfirmed = window.confirm(
      `Apakah Anda yakin ingin menghapus data pendaftaran "${namaSantri}" (${registrationId})?\n\nData dan seluruh berkas terunggah akan dihapus secara permanen!`
    );

    if (!isConfirmed) return;

    setDeletingId(id);

    try {
      // Step A: Hapus berkas dari Supabase Storage (jika ada)
      const { data: fileList } = await supabase.storage
        .from("berkas-psb")
        .list(registrationId);

      if (fileList && fileList.length > 0) {
        const filesToRemove = fileList.map((file) => `${registrationId}/${file.name}`);
        const { error: storageError } = await supabase.storage
          .from("berkas-psb")
          .remove(filesToRemove);

        if (storageError) {
          console.warn("Peringatan storage saat menghapus berkas:", storageError);
        }
      }

      // Step B: Hapus baris data di Database Supabase
      const { error: dbError } = await supabase
        .from("pendaftar_psb")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      // Step C: Perbarui state tampilan lokal
      setData((prevData) => prevData.filter((item) => item.id !== id));
      alert(`Data pendaftaran santri "${namaSantri}" berhasil dihapus.`);
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Terjadi kesalahan saat menghapus data. Periksa izin akses RLS Supabase Anda.");
    } finally {
      setDeletingId(null);
    }
  };

  // 4. Fungsi Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // Jika sedang mengecek status autentikasi, tampilkan loading full page
  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white space-y-3">
        <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
        <p className="text-sm font-semibold tracking-wide">Memeriksa Hak Akses Admin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary-7 font-bold text-xs uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Panel Admin Terverifikasi
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-2">
            Data Pendaftaran Santri Baru
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Daftar calon santri beserta seluruh berkas terunggah.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            onClick={fetchData} 
            variant="outline" 
            className="flex items-center gap-2 border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>

          <Button 
            onClick={handleLogout} 
            variant="destructive" 
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 font-bold text-white"
          >
            <LogOut className="w-4 h-4" />
            Keluar (Logout)
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center justify-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-primary-7" />
            <p className="text-sm font-semibold">Memuat data pendaftar...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-2">
            <UserCheck className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-base font-bold text-slate-700">Belum Ada Pendaftar</p>
            <p className="text-xs text-slate-400">Data pendaftaran santri baru akan muncul di sini.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="p-4">ID / Tanggal</th>
                  <th className="p-4">Nama Santri & Wali</th>
                  <th className="p-4">Kategori & Gender</th>
                  <th className="p-4">Kontak & Asal</th>
                  <th className="p-4">Berkas Terunggah</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* ID & Tanggal */}
                    <td className="p-4 align-top space-y-1">
                      <span className="font-extrabold text-primary-8 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 block w-max">
                        {item.registration_id}
                      </span>
                      <p className="text-[11px] text-slate-400">
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </td>

                    {/* Nama Santri & Orang Tua */}
                    <td className="p-4 align-top space-y-1">
                      <p className="font-bold text-sm text-slate-900">{item.nama_santri}</p>
                      <p className="text-slate-500">Wali: <strong className="text-slate-700">{item.nama_orang_tua}</strong></p>
                      {item.perguruan_tinggi && (
                        <p className="text-[11px] text-slate-400">🎓 {item.perguruan_tinggi}</p>
                      )}
                    </td>

                    {/* Kategori & Jenis Kelamin */}
                    <td className="p-4 align-top space-y-1">
                      <p className="font-semibold text-slate-800">{item.kategori}</p>
                      <span className={`inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        item.jenis_kelamin === "putra" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-pink-100 text-pink-800"
                      }`}>
                        Santri {item.jenis_kelamin.toUpperCase()}
                      </span>
                    </td>

                    {/* Kontak & Kota Asal */}
                    <td className="p-4 align-top space-y-1">
                      <a 
                        href={`https://wa.me/${item.whatsapp.replace(/^0/, '62')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="font-bold text-primary-7 hover:underline flex items-center gap-1"
                      >
                         {item.whatsapp}
                      </a>
                      <p className="text-slate-500"> {item.kota_asal}</p>
                      {item.email && <p className="text-[11px] text-slate-400"> {item.email}</p>}
                    </td>

                    {/* Berkas File Upload */}
                    <td className="p-4 align-top">
                      <div className="grid grid-cols-2 gap-1.5 w-56">
                        {item.url_kk && (
                          <a href={item.url_kk} target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-primary-9 border border-slate-300 px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                            <FileText className="w-3 h-3 text-primary-7"/> KK
                          </a>
                        )}
                        {item.url_ktp && (
                          <a href={item.url_ktp} target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-primary-9 border border-slate-300 px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                            <FileText className="w-3 h-3 text-primary-7"/> KTP
                          </a>
                        )}
                        {item.url_pas_foto && (
                          <a href={item.url_pas_foto} target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-primary-9 border border-slate-300 px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                            <ExternalLink className="w-3 h-3 text-primary-7"/> Foto Diri
                          </a>
                        )}
                        {item.url_surat_narkoba && (
                          <a href={item.url_surat_narkoba} target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-primary-9 border border-slate-300 px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                            <FileText className="w-3 h-3 text-primary-7"/> Narkoba
                          </a>
                        )}
                        {item.url_ijazah && (
                          <a href={item.url_ijazah} target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-primary-9 border border-slate-300 px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1">
                            <FileText className="w-3 h-3 text-primary-7"/> Ijazah
                          </a>
                        )}
                        {item.url_bukti_bayar && (
                          <a href={item.url_bukti_bayar} target="_blank" rel="noreferrer" className="bg-emerald-50 hover:bg-emerald-200 text-primary-9 border border-emerald-300 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                            <FileText className="w-3 h-3 text-primary-7"/> Bukti Bayar
                          </a>
                        )}
                        {item.url_berkas_pendukung && (
                          <a href={item.url_berkas_pendukung} target="_blank" rel="noreferrer" className="bg-amber-50 hover:bg-amber-200 text-amber-900 border border-amber-300 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 col-span-2">
                            <Download className="w-3 h-3 text-amber-700"/> File Pendukung
                          </a>
                        )}
                      </div>
                    </td>

                    {/* Tombol Aksi Hapus */}
                    <td className="p-4 align-top text-center">
                      <Button
                        size="sm"
                        variant="destructive"
                        disabled={deletingId === item.id}
                        onClick={() => handleDelete(item.id, item.registration_id, item.nama_santri)}
                        className="bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 border border-red-200 font-semibold shadow-xs flex items-center gap-1 mx-auto"
                      >
                        {deletingId === item.id ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-red-600" />
                        ) : (
                          <Trash2 className="w-3.5 h-3.5 text-red-600" />
                        )}
                        <span className="text-[11px]">Hapus</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}