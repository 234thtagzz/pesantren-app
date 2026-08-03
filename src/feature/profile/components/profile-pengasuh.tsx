import { Button } from "@/components/ui/button";

export function ProfilePengasuh() {
  return (
    <section className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-green">Pengasuh Pesantren</h2>
        <div className="w-16 h-1 bg-brand-gold mx-auto mt-2 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <div className="w-48 h-48 sm:w-56 sm:h-56 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-brand-gold text-slate-400 font-medium">
          [ Foto KH. Name ]
        </div>

        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-bold text-slate-800">KH. [Nama Pengasuh]</h3>
          <p className="text-brand-lightGreen font-semibold text-sm">Pengasuh Utama Pondok Pesantren</p>
          <blockquote className="text-slate-600 italic text-sm sm:text-base border-l-0 md:border-l-4 border-brand-gold md:pl-4 py-1">
            &quot;Pendidikan di pesantren bukan sekadar transfer ilmu pengetahuan, melainkan penanaman adab dan pembentukan mental.&quot;
          </blockquote>
          <div className="pt-2">
            <Button variant="outline">Hubungi Sekretariat</Button>
          </div>
        </div>
      </div>
    </section>
  );
}