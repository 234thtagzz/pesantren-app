"use client";

import { useState } from "react";
import { 
  GraduationCap, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Send,
  Loader2,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PsbForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
  const [formData, setFormData] = useState({
    namaSantri: "",
    jenisKelamin: "putra",
    kategori: "Santri Mukim Mahasiswa",
    perguruanTinggi: "UIN Raden Mas Said Surakarta",
    namaOrangTua: "",
    whatsapp: "",
    email: "",
    kotaAsal: "",
    catatan: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const randomId = `PSB-AF-${Math.floor(Math.random() * 89999) + 10000}`;
      setRegistrationId(randomId);
      setSubmitted(true);
    }, 1200);
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
📍 *Kota Asal:* ${formData.kotaAsal}

Mohon informasi langkah verifikasi berkas selanjutnya. Terima kasih.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl space-y-6">
      <div>
        <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Formulir Pendaftaran Online
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-2">
          Registrasi Calon Santri Baru T.A. 2026/2027
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Isi formulir berikut untuk mendaftarkan calon santri di Pondok Pesantren Al-Fattah Krapyak Kartasura Sukoharjo.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-emerald-700 text-white rounded-full mx-auto flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-amber-300" />
          </div>
          <h4 className="text-2xl font-extrabold text-emerald-950">
            Pendaftaran Berhasil Terdaftar!
          </h4>
          <p className="text-slate-700 text-sm max-w-md mx-auto">
            Terima kasih Bapak/Ibu/Saudara <strong>{formData.namaOrangTua}</strong>. Data registrasi <strong>{formData.namaSantri}</strong> ({formData.kategori}) telah tersimpan.
          </p>
          
          <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-xs text-slate-700 space-y-2 text-left max-w-md mx-auto shadow-xs">
            <p className="text-sm font-bold text-emerald-950">📌 ID Registrasi: <span className="text-amber-700">{registrationId}</span></p>
            <p><strong>Santri:</strong> {formData.namaSantri} ({formData.jenisKelamin})</p>
            <p><strong>Pilihan Kategori:</strong> {formData.kategori}</p>
            <p><strong>Kontak WA:</strong> {formData.whatsapp}</p>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              Silakan klik tombol di bawah untuk langsung mengirimkan konfirmasi pendaftaran ke WhatsApp resmi Panitia PSB Al-Fattah Kartasura (+62 857-2800-4560).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button 
              asChild
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold px-6 py-6"
            >
              <a 
                href={`https://wa.me/6285728004560?text=${getWaMessage()}`} 
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
        <form onSubmit={handleSubmit} className="space-y-4">
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
                className="rounded-xl border-slate-300 focus:ring-emerald-600"
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
                className="rounded-xl border-slate-300 focus:ring-emerald-600"
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
                className="w-full h-10 px-3 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-semibold text-slate-800"
              >
                <option value="Santri Mukim Mahasiswa">Santri Mukim Mahasiswa (Krapyak)</option>
                <option value="Santri Mukim Pelajar/Diniyah">Santri Mukim Pelajar / Diniyah</option>
                <option value="Takhassus Kitab Kuning & Tahfizh">Program Takhassus Kitab & Tahfizh</option>
                <option value="Santri Kalong (Non-Mukim)">Santri Kalong / Non-Mukim</option>
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
                    className="accent-emerald-700"
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
                    className="accent-emerald-700"
                  />
                  Santri Putri
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-900 hover:to-black text-white font-extrabold py-6 text-base rounded-xl shadow-lg border border-amber-400/30"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Memproses Pendaftaran...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-400" />
                Kirim Formulir Pendaftaran PSB Al-Fattah
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
