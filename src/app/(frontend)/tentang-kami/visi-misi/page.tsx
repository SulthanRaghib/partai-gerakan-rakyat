import type { Metadata } from 'next'
import React from 'react'
import { Target, GraduationCap, ShieldCheck, Users, Flame, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visi dan Misi - Partai Gerakan Rakyat',
  description: 'Visi dan Misi Partai Gerakan Rakyat: Mewujudkan Keadilan Sosial dan Pendidikan Politik melalui Sekolah Politik Kerakyatan (Spartan).',
  keywords: 'Visi Misi Partai Gerakan Rakyat, Keadilan Sosial, Sekolah Politik Kerakyatan, Spartan, Indonesia Menyala',
}

export default function VisiMisiPage() {
  return (
    <div className="space-y-12">
      {/* Header & Visi */}
      <div>
        <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-8 text-green-600 dark:text-green-400">
          <Target className="w-8 h-8" />
        </div>
        
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-800 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Visi Agung Kami</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Mewujudkan Keadilan Sosial Bagi Seluruh Rakyat Indonesia.
            </h2>
            <p className="mt-6 text-green-100 text-lg md:text-xl leading-relaxed">
              Visi mulia ini menjadi kompas abadi yang mengarahkan setiap detak perjuangan dan langkah strategis Partai Gerakan Rakyat tanpa terkecuali.
            </p>
          </div>
        </div>
      </div>
      
      {/* Misi */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <Flame className="w-8 h-8 text-orange-500" /> Empat Pilar Misi Utama
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Misi 1 */}
          <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10">
            <div className="p-3 rounded-xl bg-background shadow-sm text-red-500 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 leading-tight">Pendidikan Politik Inklusif di Akar Rumput</h4>
              <p className="text-muted-foreground leading-relaxed">Kami mendedikasikan diri sebagai kawah candradimuka bagi pendidikan politik rakyat secara luas. Lewat program unggulan <strong>Sekolah Politik Kerakyatan (Spartan)</strong>, kami bertujuan mengasah nalar kritis, mendongkrak kematangan politik warga, dan mendorong lonjakan partisipasi publik dalam menentukan arah demokrasi yang sehat.</p>
            </div>
          </div>
          
          {/* Misi 2 */}
          <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10">
            <div className="p-3 rounded-xl bg-background shadow-sm text-blue-500 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 leading-tight">Penguatan Sabuk Kontrol Masyarakat Sipil</h4>
              <p className="text-muted-foreground leading-relaxed">Gerakan Rakyat berdiri kokoh sebagai tameng pelindung hak-hak politik dan ekonomi rakyat. Misi kami adalah menjadi alat kontrol (<em>checks and balances</em>) yang kuat untuk membendung degradasi kualitas demokrasi, sekaligus memastikan kesejahteraan masyarakat—terutama jaring pengaman kelas menengah—tidak tergerus oleh kebijakan elitis.</p>
            </div>
          </div>

          {/* Misi 3 */}
          <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10">
            <div className="p-3 rounded-xl bg-background shadow-sm text-orange-500 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 leading-tight">Merawat Simpul Silaturahmi & Solidaritas</h4>
              <p className="text-muted-foreground leading-relaxed">Terinspirasi dari gagasan besar Bapak Anies Baswedan, kami berkomitmen menjadi wadah perekat persaudaraan yang mengikat berbagai elemen masyarakat. Kebersamaan dan rajutan silaturahmi yang solid di tingkat akar rumput merupakan kunci pembuka gerbang perubahan sosial.</p>
            </div>
          </div>

          {/* Misi 4 */}
          <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10">
            <div className="p-3 rounded-xl bg-background shadow-sm text-yellow-500 flex-shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 leading-tight">Inkubator Gagasan Perubahan Nasional</h4>
              <p className="text-muted-foreground leading-relaxed">Kami berikhtiar tanpa henti untuk memastikan bahwa gagasan-gagasan visioner tentang pembangunan dan kemajuan bangsa tidak sekadar menjadi utopia. Misi kami adalah menjaga nyala ide tersebut agar terus hidup, dirawat, dan disebarluaskan dengan keyakinan penuh ke seluruh pelosok Nusantara.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
