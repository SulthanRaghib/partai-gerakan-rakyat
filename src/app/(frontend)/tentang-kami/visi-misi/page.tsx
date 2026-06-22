import type { Metadata } from 'next'
import React from 'react'
import { Target, Flag, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visi dan Misi - Partai Gerakan Rakyat',
  description: 'Visi dan Misi Partai Gerakan Rakyat: Membangun kesadaran politik melalui program Sekolah Politik Kerakyatan (Spartan).',
  keywords: 'Visi Misi Partai Gerakan Rakyat, Sekolah Politik Kerakyatan, Spartan, Indonesia Menyala',
}

export default function VisiMisiPage() {
  return (
    <div className="space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-8 text-green-600 dark:text-green-400">
        <Target className="w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Misi Menuju Indonesia Menyala</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Tujuan inti Gerakan Rakyat adalah membangun kesadaran politik yang matang dan inklusif di akar rumput melalui semboyan <strong>'Gotong-Royong Untuk Indonesia'</strong>.
      </p>
      
      <div className="grid gap-6">
        <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5">
          <div className="p-3 rounded-xl bg-background shadow-sm text-red-500">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Sekolah Politik Kerakyatan (Spartan)</h4>
            <p className="text-muted-foreground">Kami menginisiasi program pendidikan politik bagi seluruh lapisan masyarakat, bukan sekadar untuk kalangan internal partai, demi menciptakan pemilih yang cerdas, kritis, dan berdaya saing.</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5">
          <div className="p-3 rounded-xl bg-background shadow-sm text-red-500">
            <Flag className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Transformasi Politik Nasional</h4>
            <p className="text-muted-foreground">Dengan kepengurusan yang kini menggurita di 38 provinsi dan ratusan kabupaten/kota, kami bersiap menjadi kendaraan politik strategis yang tangguh untuk mengusung gagasan perubahan berkelanjutan di masa depan menuju Pemilu 2029.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
