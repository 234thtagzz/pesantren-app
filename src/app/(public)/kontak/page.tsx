"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nama: "", email: "", whatsapp: "", pesan: "" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="relative bg-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/al_fattah_hero.jpg"
            alt="Kontak Pesantren Al-Fattah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-amber-400 font-extrabold text-xs tracking-wider uppercase bg-emerald-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Sekretariat & Lokasi Krapyak Kartasura
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Tim sekretariat Pondok Pesantren Al-Fattah siap melayani pertanyaan seputar pendaftaran, kunjungan, dan informasi pengajian.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold text-emerald-950">
                Alamat & Kontak Resmi
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Alamat Pesantren</div>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Desa Krapyak, RT 01 / RW 10, Kel. Kartasura, Kec. Kartasura, Kab. Sukoharjo, Jawa Tengah 57169 (±400m timur kampus I UIN Raden Mas Said Surakarta).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Telepon & WhatsApp Sekretariat</div>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Hotline 1: +62 857-2800-4560 (Panitia PSB)<br />
                      Hotline 2: +62 812-2977-8007 (Kantor Pesantren)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email & Media Sosial</div>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Email: info@alfattah.or.id<br />
                      Instagram: <strong>@ponpes_alfattah</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Jam Layanan Sekretariat</div>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Setiap Hari: 08.00 - 17.00 WIB<br />
                      Sowan Pengasuh: Ba'da Maghrib / Perjanjian
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  asChild
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-5 rounded-xl"
                >
                  <a 
                    href="https://wa.me/62882006454771?text=Assalamu'alaikum%20Sekretariat%20Pesantren%20Al-Fattah%20Kartasura" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-amber-400" />
                    Chat WhatsApp Panitia PSB
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                  Pesan & Pertanyaan
                </span>
                <h3 className="text-2xl font-extrabold text-emerald-950 mt-2">
                  Kirim Pesan Ke Sekretariat
                </h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h4 className="font-bold text-xl text-emerald-950">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs text-slate-600">
                    Terima kasih <strong>{form.nama}</strong>, pesan Anda telah terkirim ke tim sekretariat Al-Fattah.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap *</label>
                      <Input
                        required
                        placeholder="Nama Anda"
                        value={form.nama}
                        onChange={(e) => setForm({ ...form, nama: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">No. WhatsApp *</label>
                      <Input
                        required
                        placeholder="08123456789"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <Input
                      type="email"
                      placeholder="email@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pesan / Pertanyaan *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pertanyaan Anda mengenai pendaftaran santri, program kitab, atau survey lokasi Krapyak..."
                      value={form.pesan}
                      onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-extrabold py-6 rounded-xl shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2 text-amber-400" />
                    Kirim Pesan Ke Sekretariat Al-Fattah
                  </Button>
                </form>
              )}
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl p-4 space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  Peta Lokasi Krapyak Kartasura
                </span>
                <a 
                  href="https://maps.google.com/?q=Pondok+Pesantren+Al+Fattah+Kartasura+Sukoharjo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-amber-700 hover:underline flex items-center gap-1 font-semibold"
                >
                  Buka di Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Peta Pondok Pesantren Al-Fattah Krapyak Kartasura"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.109867965001!2d110.749000!3d-7.563000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145ec776510f%3A0x4027a76e352e800!2sKartasura%2C%20Sukoharjo!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
