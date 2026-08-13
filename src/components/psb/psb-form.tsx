"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabaseClient";
import { 
  CheckCircle2, 
  Send, 
  Loader2, 
  PhoneCall,
  Upload,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PsbForm() {
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");

  const [formData, setFormData] = useState({
    namaSantri: "",
    jenisKelamin: "putra",
    kategori: "Santri Mukim Program Kitab",
    perguruanTinggi: "UIN Raden Mas Said Surakarta",
    namaOrangTua: "",
    whatsapp: "",
    email: "",
    kotaAsal: "",
    catatan: ""
  });

  // State untuk 6 Berkas Wajib + 1 Berkas Pendukung Opsional
  const [files, setFiles] = useState<{
    kk: File | null;
    ktp: File | null;
    pasFoto: File | null;
    suratNarkoba: File | null;
    ijazah: File | null;
    buktiBayar: File | null;
    berkasPendukung: File | null;
  }>({
    kk: null,
    ktp: null,
    pasFoto: null,
    suratNarkoba: null,
    ijazah: null,
    buktiBayar: null,
    berkasPendukung: null,
  });

  const [fileErrors, setFileErrors] = useState<Record<string, string>>({});

  const handleFileChange = (key: keyof typeof files, selectedFile: File | null) => {
    if (!selectedFile) {
      setFiles((prev) => ({ ...prev, [key]: null }));
      return;
    }

    const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
    if (selectedFile.size > MAX_SIZE) {
      setFileErrors((prev) => ({ ...prev, [key]: "Ukuran file maksimal 5 MB!" }));
      setFiles((prev) => ({ ...prev, [key]: null }));
      return;
    }

    setFileErrors((prev) => ({ ...prev, [key]: "" }));
    setFiles((prev) => ({ ...prev, [key]: selectedFile }));
  };

  const uploadToSupabaseStorage = async (file: File | null, registrationCode: string, fileType: string) => {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const cleanFileName = `${fileType}_${Date.now()}.${fileExt}`;
    const filePath = `${registrationCode}/${cleanFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("berkas-psb")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error(`Gagal upload ${fileType}:`, uploadError);
      throw uploadError;
    }

    const { data } = supabase.storage.from("berkas-psb").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi: 6 Berkas Utama Harus Terisi
    if (!files.kk || !files.ktp || !files.pasFoto || !files.suratNarkoba || !files.ijazah || !files.buktiBayar) {
      alert("Mohon lengkapi seluruh 6 berkas persyaratan wajib sebelum mengirim formulir!");
      return;
    }

    setLoading(true);

    const randomId = `PSB-AF-${Math.floor(Math.random() * 89999) + 10000}`;
    setRegistrationId(randomId);

    try {
      // 1. Upload semua berkas terisi ke Supabase Storage
      setUploadStatus("Mengunggah berkas persyaratan...");
      const [
        urlKk, 
        urlKtp, 
        urlPasFoto, 
        urlSuratNarkoba, 
        urlIjazah, 
        urlBuktiBayar,
        urlBerkasPendukung
      ] = await Promise.all([
        uploadToSupabaseStorage(files.kk, randomId, "kk"),
        uploadToSupabaseStorage(files.ktp, randomId, "ktp"),
        uploadToSupabaseStorage(files.pasFoto, randomId, "pas_foto"),
        uploadToSupabaseStorage(files.suratNarkoba, randomId, "surat_narkoba"),
        uploadToSupabaseStorage(files.ijazah, randomId, "ijazah"),
        uploadToSupabaseStorage(files.buktiBayar, randomId, "bukti_bayar"),
        uploadToSupabaseStorage(files.berkasPendukung, randomId, "berkas_pendukung"),
      ]);

      // 2. Simpan Ke Database Supabase
      setUploadStatus("Menyimpan data pendaftaran...");
      const { error: dbError } = await supabase.from("pendaftar_psb").insert([
        {
          registration_id: randomId,
          nama_santri: formData.namaSantri,
          jenis_kelamin: formData.jenisKelamin,
          kategori: formData.kategori,
          perguruan_tinggi: formData.perguruanTinggi || null,
          nama_orang_tua: formData.namaOrangTua,
          whatsapp: formData.whatsapp,
          email: formData.email || null,
          kota_asal: formData.kotaAsal,
          catatan: formData.catatan || null,
          url_kk: urlKk,
          url_ktp: urlKtp,
          url_pas_foto: urlPasFoto,
          url_surat_narkoba: urlSuratNarkoba,
          url_ijazah: urlIjazah,
          url_bukti_bayar: urlBuktiBayar,
          url_berkas_pendukung: urlBerkasPendukung,
        },
      ]);

      if (dbError) throw dbError;

      // 3. EmailJS Notification
      setUploadStatus("Mengirim notifikasi email panitia...");
      const templateParams = {
        registration_id: randomId,
        nama_santri: formData.namaSantri,
        jenis_kelamin: formData.jenisKelamin,
        kategori: formData.kategori,
        perguruan_tinggi: formData.perguruanTinggi || "-",
        nama_orang_tua: formData.namaOrangTua,
        whatsapp: formData.whatsapp,
        email: formData.email || "-",
        kota_asal: formData.kotaAsal,
        catatan: formData.catatan || "-",
        url_kk: urlKk,
        url_ktp: urlKtp,
        url_pas_foto: urlPasFoto,
        url_surat_narkoba: urlSuratNarkoba,
        url_ijazah: urlIjazah,
        url_bukti_bayar: urlBuktiBayar,
        url_berkas_pendukung: urlBerkasPendukung || "-",
        to_email: "ponpesalfattahkts@gmail.com",
      };

      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Gagal memproses pendaftaran:", error);
      alert("Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.");
    } finally {
      setLoading(false);
      setUploadStatus("");
    }
  };

  const getWaMessage = () => {
    const text = `Assalamu'alaikum Panitia PSB Pondok Pesantren Al-Fattah Krapyak Kartasura,

Saya ingin konfirmasi Pendaftaran Santri Baru Online:
📌 *ID Registrasi:* ${registrationId}
👤 *Nama Santri:* ${formData.namaSantri}
🚻 *Jenis Kelamin:* Santri ${formData.jenisKelamin}
📚 *Kategori:* ${formData.kategori}
🎓 *Instansi/Perguruan Tinggi:* ${formData.perguruanTinggi || "-"}
👨‍👩‍👦 *Nama Orang Tua/Wali:* ${formData.namaOrangTua}
📱 *WhatsApp:* ${formData.whatsapp}
📧 *Email:* ${formData.email || "-"}
📍 *Kota Asal:* ${formData.kotaAsal}

Seluruh berkas persyaratan & bukti pembayaran telah diunggah via website. Mohon informasi verifikasi selanjutnya. Terima kasih.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl space-y-6">
      <div>
        <span className="text-primary-7 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-primary-2">
          Formulir Pendaftaran Online
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-10 mt-2">
          Registrasi Calon Santri Baru T.A. 2026/2027
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Isi formulir berikut dan unggah berkas persyaratan pendaftaran.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-primary-3 rounded-2xl p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-primary-7 text-white rounded-full mx-auto flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-amber-300" />
          </div>
          <h4 className="text-2xl font-extrabold text-primary-10">
            Pendaftaran & Berkas Berhasil Terkirim!
          </h4>
          <p className="text-slate-700 text-sm max-w-md mx-auto">
            Terima kasih Bapak/Ibu/Saudara <strong>{formData.namaOrangTua}</strong>. Data & berkas registrasi <strong>{formData.namaSantri}</strong> telah tersimpan di sistem.
          </p>
          
          <div className="bg-white p-5 rounded-2xl border border-primary-2 text-xs text-slate-700 space-y-2 text-left max-w-md mx-auto shadow-xs">
            <p className="text-sm font-bold text-primary-10">📌 ID Registrasi: <span className="text-amber-700">{registrationId}</span></p>
            <p><strong>Santri:</strong> {formData.namaSantri} ({formData.jenisKelamin})</p>
            <p><strong>Pilihan Kategori:</strong> {formData.kategori}</p>
            <p><strong>Kontak WA:</strong> {formData.whatsapp}</p>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              Silakan klik tombol di bawah untuk langsung mengirimkan konfirmasi pendaftaran ke WhatsApp resmi Panitia PSB Al-Fattah Kartasura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button 
              asChild
              className="bg-primary-8 hover:bg-primary-9 text-white font-extrabold px-6 py-6"
            >
              <a 
                href={`https://wa.me/62882006454771?text=${getWaMessage()}`} 
                target="_blank" 
                rel="noreferrer"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-amber-400" />
                Konfirmasi via WhatsApp Panitia
              </a>
            </Button>
            <Button 
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-slate-300 text-slate-700 font-bold"
            >
              Isi Formulir Baru
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Data Diri */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-primary-9 uppercase tracking-wider border-b pb-1">
              1. Data Diri Calon Santri
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Calon Santri *
                </label>
                <Input
                  required
                  placeholder="Contoh: Muhammad Ammar Syafi'i"
                  value={formData.namaSantri}
                  onChange={(e) => setFormData({ ...formData, namaSantri: e.target.value })}
                  className="rounded-xl border-slate-300 focus:ring-primary-6"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Orang Tua / Wali *
                </label>
                <Input
                  required
                  placeholder="Contoh: H. Ahmad Subandi"
                  value={formData.namaOrangTua}
                  onChange={(e) => setFormData({ ...formData, namaOrangTua: e.target.value })}
                  className="rounded-xl border-slate-300 focus:ring-primary-6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kategori Pendaftaran Santri *
                </label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-6 font-semibold text-slate-800"
                >
                  <option value="Santri Mukim Program Kitab">Santri Mukim Program Kitab</option>
                  <option value="Santri Mukim Program Tahfidz">Santri Mukim Program Tahfidz</option>
                  <option value="Santri Kalong Program Kitab">Santri Kalong Program Kitab</option>
                  <option value="Santri Kalong Program Tahfidz">Santri Kalong Program Tahfidz</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jenis Kelamin Santri *
                </label>
                <div className="flex gap-4 pt-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="putra"
                      checked={formData.jenisKelamin === "putra"}
                      onChange={() => setFormData({ ...formData, jenisKelamin: "putra" })}
                      className="accent-primary-7"
                    />
                    Santri Putra
                  </label>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="putri"
                      checked={formData.jenisKelamin === "putri"}
                      onChange={() => setFormData({ ...formData, jenisKelamin: "putri" })}
                      className="accent-primary-7"
                    />
                    Santri Putri
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  No. WhatsApp Aktif *
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="081234567890"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Aktif
                </label>
                <Input
                  type="email"
                  placeholder="contoh@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Perguruan Tinggi / Sekolah
                </label>
                <Input
                  placeholder="Contoh: UIN RM Said Surakarta"
                  value={formData.perguruanTinggi}
                  onChange={(e) => setFormData({ ...formData, perguruanTinggi: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kota / Kabupaten Asal *
                </label>
                <Input
                  required
                  placeholder="Contoh: Surakarta / Sukoharjo"
                  value={formData.kotaAsal}
                  onChange={(e) => setFormData({ ...formData, kotaAsal: e.target.value })}
                  className="rounded-xl border-slate-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Catatan / Riwayat Mengaji / Kitab yang Pernah Dipelajari
              </label>
              <textarea
                rows={2}
                placeholder="Contoh: Pernah mengaji Amtsilati Jilid 1-3, hafal Juz 30, mahasiswa Jurusan PAI Semester 1."
                value={formData.catatan}
                onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-6"
              />
            </div>
          </div>

          {/* Section 2: Upload Berkas */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-primary-9 uppercase tracking-wider border-b pb-1 flex items-center justify-between">
              <span>2. Upload Berkas Persyaratan</span>
              <span className="text-[10px] text-slate-500 font-normal normal-case">Format: JPG, PNG, PDF (Maks 5 MB / file)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Scan KK */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  1. Scan / Foto Kartu Keluarga (KK) *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("kk", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.kk && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.kk}</p>}
                {files.kk && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 2. Scan KTP */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  2. Scan / Foto KTP / Kartu Pelajar *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("ktp", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.ktp && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.ktp}</p>}
                {files.ktp && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 3. Foto Diri Resmi */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  3. Foto Diri Resmi (3x4 / 4x6) *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => handleFileChange("pasFoto", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.pasFoto && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.pasFoto}</p>}
                {files.pasFoto && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 4. Surat Bebas Narkoba */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  4. Surat Keterangan Bebas Narkoba *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("suratNarkoba", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.suratNarkoba && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.suratNarkoba}</p>}
                {files.suratNarkoba && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 5. Scan Ijazah / SKL */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  5. Scan Ijazah Terakhir / SKL *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("ijazah", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.ijazah && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.ijazah}</p>}
                {files.ijazah && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 6. Bukti Pembayaran */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  6. Bukti Pembayaran Pendaftaran *
                </label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("buktiBayar", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.buktiBayar && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.buktiBayar}</p>}
                {files.buktiBayar && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>

              {/* 7. Berkas Pendukung (Opsional) */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 sm:col-span-2">
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-primary-7" />
                  7. File Pendukung (Sertifikat / Prestasi / Rekomendasi - Opsional)
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  onChange={(e) => handleFileChange("berkasPendukung", e.target.files?.[0] || null)}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-7 file:text-white hover:file:bg-primary-8 border border-slate-300 rounded-lg p-1 bg-white cursor-pointer"
                />
                {fileErrors.berkasPendukung && <p className="text-red-600 text-[11px] mt-1">⚠️ {fileErrors.berkasPendukung}</p>}
                {files.berkasPendukung && <p className="text-primary-7 text-[11px] mt-1 flex items-center gap-1"><FileCheck className="w-3 h-3"/> Siap diunggah</p>}
              </div>
            </div>
          </div>

          {/* Tombol Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-8 to-primary-10 hover:from-primary-9 hover:to-black text-white font-extrabold py-6 text-base rounded-xl shadow-lg border border-amber-400/30"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                {uploadStatus || "Memproses..."}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-400" />
                Kirim Formulir & Unggah Berkas PSB
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}