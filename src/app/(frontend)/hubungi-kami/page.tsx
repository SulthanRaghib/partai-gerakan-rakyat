import type { Metadata } from 'next'
import React from 'react'
import { Phone, MessageSquare, Send, Users, ChevronDown, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hubungi Kami - Partai Gerakan Rakyat',
  description: 'Hubungi Partai Gerakan Rakyat. Sampaikan aspirasi Anda atau temukan kontak pengurus DPD dan DPC Kota Cilegon.',
  keywords: 'Kontak Gerakan Rakyat, Hubungi Kami, DPD Cilegon, Pengurus Partai, Aspirasi Rakyat',
}

export default function HubungiKamiPage() {
  return (
    <div className="container py-12 md:py-20 lg:py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">Mari Bersama <span className="text-red-600">Menyalakan Harapan!</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pintu Partai Gerakan Rakyat selalu terbuka lebar bagi setiap insan yang membawa semangat perubahan. Ingin bergabung, berkolaborasi, atau menyampaikan aspirasi? Silakan gunakan formulir di bawah ini, atau hubungi langsung jajaran pengurus kami di wilayah terdekat Anda.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Kolom Kiri: Formulir Kontak */}
        <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
          <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full z-0" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-red-500" /> Sapa Kami
              </h3>
              <p className="text-muted-foreground mb-8">Kirimkan aspirasi atau pertanyaan Anda langsung kepada tim kami.</p>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-border bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Tulis nama Anda" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Nomor WhatsApp</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-border bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Contoh: 08123456789" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Pesan / Aspirasi</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                  <Send className="w-5 h-5" /> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Direktori Kontak */}
        <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
          <div className="bg-foreground/5 rounded-3xl p-8 border border-foreground/10 shadow-inner">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-red-500" /> Direktori Kepengurusan Kota Cilegon
            </h3>
            <p className="text-muted-foreground mb-8">
              Partai Gerakan Rakyat Kota Cilegon telah mengakar kuat. Temukan kontak PIC jajaran kepengurusan (Periode 2026-2031) serta jaringan kecamatan Anda di bawah ini:
            </p>

            <div className="space-y-4">
              
              {/* Accordion 1: Pembina & Dewan Pakar */}
              <details className="group bg-background rounded-2xl border border-foreground/10 overflow-hidden shadow-sm" open>
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none hover:bg-foreground/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">1</div>
                    Pembina & Dewan Pakar
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 border-t border-foreground/10 bg-foreground/5 text-sm md:text-base">
                  <div className="mb-4">
                    <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">Pembina:</h5>
                    <div className="flex items-center gap-2 mb-1"><Phone className="w-4 h-4 text-muted-foreground" /> H. Husaini (<a href="https://wa.me/62817778121" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">817778121</a>)</div>
                  </div>
                  <div>
                    <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">Dewan Pakar:</h5>
                    <div className="flex items-center gap-2 mb-1"><Phone className="w-4 h-4 text-muted-foreground" /> H. Jamal (<a href="https://wa.me/6281911270288" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">81911270288</a>)</div>
                    <div className="flex items-center gap-2 mb-1"><Phone className="w-4 h-4 text-muted-foreground" /> M. Jamil (<a href="https://wa.me/6281310243965" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">81310243965</a>)</div>
                  </div>
                </div>
              </details>

              {/* Accordion 2: DPD Kota Cilegon */}
              <details className="group bg-background rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none hover:bg-foreground/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">2</div>
                    Pengurus Inti DPD Kota Cilegon
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 border-t border-foreground/10 bg-foreground/5 grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Ketua</span>
                    <span className="font-bold">H. Sakim, S.Pd.l</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6285697136634" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">85697136634</a></span>
                  </div>
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Wakil Ketua</span>
                    <span className="font-bold">Triyono Eddy Santoso</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6282117436708" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">82117436708</a></span>
                  </div>
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Sekretaris</span>
                    <span className="font-bold">Drs. Suwito</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6289510379131" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">89510379131</a></span>
                  </div>
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Wakil Sekretaris</span>
                    <span className="font-bold">Rakha Dwi Saputra</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6282299931551" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">82299931551</a></span>
                  </div>
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Bendahara</span>
                    <span className="font-bold">Hj. Andi Yuliyanah</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6281295070462" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">81295070462</a></span>
                  </div>
                  <div className="flex flex-col bg-background p-3 rounded-lg border border-foreground/5">
                    <span className="text-xs text-muted-foreground font-semibold">Wakil Bendahara</span>
                    <span className="font-bold">Wildayani</span>
                    <span className="text-red-600 flex items-center gap-1 mt-1"><Phone className="w-3 h-3" /> <a href="https://wa.me/6285215084363" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">85215084363</a></span>
                  </div>
                </div>
              </details>

              {/* Accordion 3: DPC Terverifikasi */}
              <details className="group bg-background rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none hover:bg-foreground/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">3</div>
                    5 DPC Cabang (Verifikasi Faktual)
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 border-t border-foreground/10 bg-foreground/5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-bold mb-6">
                    <CheckCircle2 className="w-4 h-4" /> Telah Diverifikasi per 22 April 2025
                  </div>
                  
                  <div className="space-y-6">
                    {/* Cibeber */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">1. Kec. Cibeber</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Tujiman (<a href="https://wa.me/6287821203343" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">87821203343</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Romzi Zaini (<a href="https://wa.me/6281293317123" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">81293317123</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Yanti Nuryanti (<a href="https://wa.me/6281913545039" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">81913545039</a>)</li>
                      </ul>
                    </div>
                    {/* Cilegon */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">2. Kec. Cilegon</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Yusepksayid (<a href="https://wa.me/62895635092866" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">0895635092866</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Zulkarnain (<a href="https://wa.me/6285781413765" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">085781413765</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Elistamegawati (<a href="https://wa.me/6281398492128" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">081398492128</a>)</li>
                      </ul>
                    </div>
                    {/* Jombang */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">3. Kec. Jombang</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Masfar Munaf (<a href="https://wa.me/6281363210578" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">81363210578</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Muhammad Danus (<a href="https://wa.me/6282258473280" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">82258473280</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Meliawati (<a href="https://wa.me/6287776772272" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">87776772272</a>)</li>
                      </ul>
                    </div>
                    {/* Citangkil */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">4. Kec. Citangkil</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Amsa Rizal (<a href="https://wa.me/6285314501991" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">85314501991</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Abdullah (<a href="https://wa.me/6287774118234" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">87774118234</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Sri Purnamayanti (<a href="https://wa.me/6287871477430" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">87871477430</a>)</li>
                      </ul>
                    </div>
                    {/* Pulomerak */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">5. Kec. Pulomerak</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Hikmatullah (<a href="https://wa.me/6287877926088" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">87877926088</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Jayanto (<a href="https://wa.me/6282114040836" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">82114040836</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Melisa (<a href="https://wa.me/62895365198042" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">895365198042</a>)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              {/* Accordion 4: DPC Tahap Penyempurnaan */}
              <details className="group bg-background rounded-2xl border border-foreground/10 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer list-none hover:bg-foreground/5 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">4</div>
                    3 DPC Cabang (Tahap Penyempurnaan)
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 border-t border-foreground/10 bg-foreground/5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-bold mb-6">
                    Tahap Penyempurnaan Administrasi
                  </div>
                  
                  <div className="space-y-6">
                    {/* Ciwandan */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">6. Kec. Ciwandan</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>H. Sanwani (<a href="https://wa.me/6287773845688" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">87773845688</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Nurlelah (<a href="https://wa.me/6281805874663" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">81805874663</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Astuni (<a href="https://wa.me/6287774082963" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">87774082963</a>)</li>
                      </ul>
                    </div>
                    {/* Purwakarta */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">7. Kec. Purwakarta</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>Ma'ruf (<a href="https://wa.me/62895341408627" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">895341408627</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>-</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Sindi Allan AB (<a href="https://wa.me/6281400358183" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">81400358183</a>)</li>
                      </ul>
                    </div>
                    {/* Gerogol */}
                    <div>
                      <h6 className="font-bold border-b border-foreground/10 pb-2 mb-3">8. Kec. Gerogol</h6>
                      <ul className="grid sm:grid-cols-3 gap-2 text-sm">
                        <li><span className="text-muted-foreground">Ketua:</span><br/>M. Yunus, SH. (<a href="https://wa.me/6281389093553" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">81389093553</a>)</li>
                        <li><span className="text-muted-foreground">Wakil Ketua:</span><br/>Rahmatullah (<a href="https://wa.me/6281398153729" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">81398153729</a>)</li>
                        <li><span className="text-muted-foreground">Sekretaris:</span><br/>Widi Wigiyahwati (<a href="https://wa.me/6285357621127" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">85357621127</a>)</li>
                        <li><span className="text-muted-foreground">Bendahara:</span><br/>Marthino SB (<a href="https://wa.me/6281387526745" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">81387526745</a>)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
