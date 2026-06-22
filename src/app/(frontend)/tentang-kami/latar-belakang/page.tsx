import type { Metadata } from 'next'
import React from 'react'
import { BookOpen, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Latar Belakang - Partai Gerakan Rakyat',
  description: 'Latar belakang berdirinya Partai Gerakan Rakyat untuk menjawab keresahan publik dan menghidupkan kekuatan akar rumput.',
  keywords: 'Latar Belakang Gerakan Rakyat, Politik Bermartabat, Akar Rumput, Indonesia Menyala',
}

export default function LatarBelakangPage() {
  return (
    <div className="space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-8 text-orange-600 dark:text-orange-400">
        <BookOpen className="w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Merespons Keresahan, Menyalakan Harapan</h2>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Gerakan Rakyat tidak sekadar hadir; kami lahir untuk menjawab dahaga publik akan ruang perjuangan politik yang transparan, modern, dan benar-benar berpihak pada rakyat. Di tengah ketidakpuasan terhadap praktik politik yang elitis—di mana suara masyarakat seringkali tak terdengar dan jarak dengan pengambil kebijakan kian melebar—kami menawarkan jalan alternatif: sebuah gerakan nurani yang dibangun kokoh dari bawah (*grassroots*).
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Kami menolak keras politik transaksional yang mengerdilkan nilai-nilai demokrasi. Dengan mengedepankan integritas, keberanian moral, dan semangat gotong royong, Gerakan Rakyat berikhtiar memulihkan peradaban politik Indonesia menjadi lebih bermartabat. Ini bukan tentang ambisi kelompok tertentu, melainkan mengorganisir energi kolektif warga agar lebih terarah untuk menghasilkan dampak sosial, ekonomi, dan kemanusiaan yang nyata.
      </p>
      
      <div className="mt-8 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-600 dark:text-orange-400">
          <Flame className="w-5 h-5" /> Dari Rakyat, Untuk Rakyat
        </h3>
        <p className="text-foreground/80 leading-relaxed">
          Kami adalah wadah perjuangan bersama. Bergerak untuk memastikan bahwa suara rakyat kembali menjadi pusat keputusan bangsa. Transformasi kami ke depan menjadi partai politik adalah instrumen dan "kendaraan" strategis agar gagasan-gagasan baik ini dapat diwujudkan melalui kewenangan konstitusional.
        </p>
      </div>
    </div>
  )
}
