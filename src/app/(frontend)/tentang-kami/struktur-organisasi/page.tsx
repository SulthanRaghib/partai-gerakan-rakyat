import type { Metadata } from 'next'
import React from 'react'
import { Users, Award, Briefcase, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Struktur Organisasi - Partai Gerakan Rakyat',
  description: 'Profil Ketua Umum Sahrin Hamid dan Struktur Organisasi Dewan Pimpinan Daerah (DPD) Partai Gerakan Rakyat Kota Cilegon.',
  keywords: 'Struktur Organisasi, Pengurus Partai Gerakan Rakyat, Sahrin Hamid, DPD Cilegon, Indonesia Menyala',
}

export default function StrukturOrganisasiPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div>
        <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
          <Users className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Profil Kepemimpinan & Struktur Organisasi</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Partai Gerakan Rakyat dinakhodai oleh figur-figur organisatoris tangguh yang memiliki visi besar untuk keadilan dan kesejahteraan rakyat, mulai dari tingkat pusat hingga menjangkau seluruh pelosok daerah.
        </p>
      </div>

      {/* Profil Ketua Umum */}
      <section className="bg-foreground/5 border border-foreground/10 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-bl-full z-0" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-6">
            <Award className="w-4 h-4" />
            <span>Ketua Umum Nasional</span>
          </div>
          
          <h3 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
            Sahrin Hamid
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <p>
                Lahir di bumi Maluku Utara pada 4 Desember 1975, Sahrin Hamid adalah sosok organisatoris tulen dengan fondasi akademis yang kuat. Beliau mengawali perjalanannya dari Diploma di Bumi Hijrah, Tidore, sebelum mengukuhkan pemahaman ilmu hukumnya dengan meraih gelar Sarjana Hukum dari Universitas Islam Bandung (Unisba) dan Universitas Jakarta. Ketajamannya sebagai ahli hukum semakin paripurna berkat perolehan gelar Magister Ilmu Hukum dari Universitas Nasional.
              </p>
              <p>
                Di bawah kepemimpinannya, Partai Gerakan Rakyat dirancang menjadi motor penggerak perubahan yang sangat inklusif—memperkuat ruang partisipasi masyarakat dari segala lapisan, dan membangun kolaborasi nyata demi memperjuangkan masa depan Indonesia yang jauh lebih baik.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-foreground/5 space-y-4">
              <h4 className="font-bold text-foreground flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-red-500" /> Rekam Jejak Politik
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Anggota DPR RI</strong> (2004–2009)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ketua Umum DPP Barisan Muda PAN</strong> (2003–2006)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Wakil Sekjen DPP PAN</strong> (2005–2010) & <strong>Ketua DPP PAN</strong> (2010–2011)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Calon Wakil Gubernur Maluku Utara</strong> (Pilkada 2013)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Staf Khusus Gubernur Maluku Utara</strong> (2018)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Juru Bicara Nasional</strong> Bapak Anies Baswedan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <hr className="border-foreground/10" />

      {/* Struktur DPD Cilegon */}
      <section>
        <h3 className="text-2xl font-bold mb-8">Struktur Formatur DPD Kota Cilegon, Banten</h3>
        <p className="text-muted-foreground mb-8">
          Di tingkat wilayah, Partai Gerakan Rakyat dikawal oleh tokoh-tokoh berdedikasi yang siap menyalakan harapan di tengah masyarakat. Berikut adalah susunan pengurus inti <strong>Dewan Pimpinan Daerah (DPD) Kota Cilegon untuk periode 2026-2031</strong>:
        </p>

        <div className="flex flex-col gap-10">
          {/* Image - Natural aspect ratio to prevent cropping */}
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/img/organisasi.png" 
              alt="Bagan Struktur Organisasi DPD Cilegon" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-foreground/10 hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          {/* List Pengurus - Rendered as a grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="flex flex-col p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <span className="font-semibold text-red-600 dark:text-red-400 text-sm mb-1">1. Ketua</span>
              <span className="font-bold text-lg">H. Sakim, S.Pd.l</span>
            </div>
            <div className="flex flex-col p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <span className="font-semibold text-muted-foreground text-sm mb-1">2. Wakil Ketua</span>
              <span className="font-bold text-lg">Triyono Eddy Santoso</span>
            </div>
            <div className="flex flex-col p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <span className="font-semibold text-muted-foreground text-sm mb-1">3. Sekretaris</span>
              <span className="font-bold text-lg">Drs. Suwito</span>
            </div>
            <div className="flex flex-col p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <span className="font-semibold text-muted-foreground text-sm mb-1">4. Wakil Sekretaris</span>
              <span className="font-bold text-lg">Rakha Dwi Saputra</span>
            </div>
            <div className="flex flex-col p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <span className="font-semibold text-muted-foreground text-sm mb-1">5. Bendahara</span>
              <span className="font-bold text-lg">Hj. Andi Yuliyanah</span>
            </div>
            <div className="flex flex-col p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <span className="font-semibold text-muted-foreground text-sm mb-1">6. Wakil Bendahara</span>
              <span className="font-bold text-lg">Wildayani</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
