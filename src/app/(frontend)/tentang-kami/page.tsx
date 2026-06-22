import type { Metadata } from 'next'
import React from 'react'
import { History } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sejarah Singkat - Partai Gerakan Rakyat',
  description: 'Pelajari sejarah berdirinya Partai Gerakan Rakyat dari relawan Anies Baswedan, latar belakang, dan deklarasi resmi kami.',
  keywords: 'Sejarah Partai Gerakan Rakyat, Sahrin Hamid, Anies Baswedan, Deklarasi Gerakan Rakyat, Relawan Anies',
  openGraph: {
    title: 'Sejarah Singkat - Partai Gerakan Rakyat',
    description: 'Pelajari sejarah berdirinya Partai Gerakan Rakyat dari relawan Anies Baswedan.',
    url: 'https://compro-bapak.com/tentang-kami',
    siteName: 'Partai Gerakan Rakyat',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Partai Gerakan Rakyat',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export default function SejarahSingkatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sejarah Singkat - Partai Gerakan Rakyat',
    description: 'Sejarah dan asal-usul Partai Gerakan Rakyat.',
    publisher: {
      '@type': 'Organization',
      name: 'Partai Gerakan Rakyat',
      founder: {
        '@type': 'Person',
        name: 'Sahrin Hamid'
      },
      foundingDate: '2025-02-27'
    }
  }

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-8 text-red-600 dark:text-red-400">
        <History className="w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah & Akar Gerakan Rakyat</h2>
      
      <p className="text-lg text-muted-foreground leading-relaxed">
        Berawal dari semangat kerelawanan yang murni, <strong>Organisasi Masyarakat (Ormas) Gerakan Rakyat</strong> hadir sebagai fenomena politik teranyar di Indonesia. Kami lahir dari rahim perjuangan gagasan para pendukung Anies Baswedan pada Pemilihan Presiden 2024. Deklarasi resmi yang dikumandangkan pada <strong>27 Februari 2025</strong> di Jakarta Selatan, menjadi tonggak sejarah di mana Bapak Sahrin Hamid selaku Ketua Umum, dan Bapak Anies Baswedan sebagai Tokoh Inspirasi, merajut ikatan emosional dan ideologis yang tak terpisahkan.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Gerakan ini sejatinya telah mengakar secara organik sejak tahun 2023. Kami menyadari bahwa cita-cita perubahan tak boleh terhenti usai pemilu. Dengan warna kebanggaan jingga (oranye) yang melambangkan fajar harapan <strong>'Indonesia Menyala'</strong> untuk mengusir bayang-bayang #IndonesiaGelap, kami bertransformasi dari sekadar relawan menjadi kekuatan masyarakat yang terstruktur.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Kini, dengan struktur kepengurusan yang menjangkau 38 provinsi di seluruh Nusantara, perjalanan Gerakan Rakyat berpotensi besar untuk bermetamorfosis menjadi Partai Politik yang tangguh; siap mengusung kembali gagasan perubahan berkelanjutan di panggung politik nasional.
      </p>
    </div>
  )
}
