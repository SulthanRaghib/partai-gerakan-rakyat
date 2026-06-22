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
      
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          <strong>Gerakan Rakyat</strong> hadir sebagai oase dan jawaban pasti atas kehausan publik terhadap ruang perjuangan politik yang terbuka, modern, dan seutuhnya berpihak pada rakyat. Di tengah kelelahan masyarakat terhadap praktik politik elitis—di mana saluran aspirasi warga seringkali tersumbat dan jarak dengan pengambil kebijakan kian menjauh—kami menawarkan sebuah jalan baru. Ini adalah gerakan nurani yang dibangun kokoh dari akar rumput (<em>grassroots</em>), oleh rakyat, dan bekerja nyata untuk rakyat.
        </p>

        <p>
          <strong>Kekuatan Akar Rumput & Politik Anti-Transaksional</strong><br/>
          Kami sangat meyakini bahwa perubahan sejati tidak pernah didikte dari atas oleh para elite, melainkan tumbuh dari energi kolektif kekuatan warga. Gerakan Rakyat lahir untuk mengorganisir energi sosial ini agar lebih terarah, terstruktur, dan memiliki daya gedor yang berdampak nyata. Secara tegas, kami menolak segala bentuk politik transaksional yang hanya akan mengerdilkan nilai-nilai demokrasi. Nilai integritas, keberanian moral, serta semangat gotong royong adalah fondasi mutlak kami dalam merestorasi dan membangun peradaban politik Indonesia yang bermartabat dan jauh lebih sehat.
        </p>

        <div className="my-8 p-6 rounded-2xl border border-orange-500/20 bg-orange-500/5">
          <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
            <Flame className="w-5 h-5" /> Indonesia Menyala: Transformasi Gagasan
          </h3>
          <p>
            Misi kami tidak berhenti pada solidaritas sosial. Tujuan luhur Gerakan Rakyat adalah mengaktualisasikan semangat kebersamaan dan memastikan bahwa suara rakyat kembali menjadi episentrum dari setiap keputusan publik. Kami adalah wadah perjuangan kolektif yang bertujuan membawa fajar terang bagi Nusantara—sebuah cita-cita <strong>"Indonesia Menyala"</strong>.
          </p>
        </div>

        <p>
          <strong>Potensi Transformasi Menjadi Partai Politik</strong><br/>
          Sebagai kelanjutan yang terorganisir dari basis massa politik yang masif pada Pilpres sebelumnya, wacana untuk bertransformasi secara penuh menjadi Partai Politik (Parpol) kini semakin menguat di internal kami. Dengan infrastruktur organisasi yang solid membentang di 38 provinsi serta ratusan kabupaten/kota, Gerakan Rakyat telah memiliki instrumen dan kapasitas yang mumpuni. Jika amanah ini berlanjut, kami bersiap menjadi "kendaraan politik" masa depan; instrumen strategis yang siap mengusung kembali tokoh inspirasi perubahan di panggung demokrasi nasional selanjutnya.
        </p>
      </div>
    </div>
  )
}
