import type { Metadata } from 'next'
import React from 'react'
import { History } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sejarah Singkat - Partai Gerakan Rakyat',
  description: 'Sejarah berdirinya Partai Gerakan Rakyat dari semangat relawan Anies Baswedan menuju gerakan politik nasional.',
  keywords: 'Sejarah Partai Gerakan Rakyat, Sahrin Hamid, Anies Baswedan, Deklarasi Gerakan Rakyat, Relawan Anies',
  openGraph: {
    title: 'Sejarah Singkat - Partai Gerakan Rakyat',
    description: 'Sejarah berdirinya Partai Gerakan Rakyat dari relawan Anies Baswedan.',
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah Singkat: Dari Relawan Menjadi Kekuatan Nasional</h2>
      
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          <strong>Organisasi Masyarakat (Ormas) Gerakan Rakyat</strong> bukanlah perkumpulan biasa. Kami lahir secara organik dari rahim perjuangan dan semangat kerelawanan para pendukung Anies Baswedan pada Pilpres 2024. Cikal bakal gerakan ini sesungguhnya telah terkonsolidasi sejak akhir tahun 2023, didorong oleh kesadaran kuat bahwa cita-cita perubahan harus dilestarikan dalam sebuah wadah yang permanen.
        </p>
        
        <div className="my-8 p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
          <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">Deklarasi Bersejarah (27 Februari 2025)</h3>
          <p>
            Puncaknya terjadi pada Kamis, 27 Februari 2025. Bertempat di <em>Jakarta Inisiatif Office</em>, Gerakan Rakyat secara resmi dideklarasikan. Momen bersejarah ini dipimpin oleh <strong>Sahrin Hamid</strong> selaku Ketua Umum, dan dihadiri langsung oleh Bapak <strong>Anies Baswedan</strong> sebagai Tokoh Inspirasi utama kami. Kehadiran beliau menegaskan satu pesan krusial: kontestasi pemilu mungkin telah usai, namun ikatan emosional dan perjuangan mewujudkan keadilan sosial harus terus menyala dan diperkuat.
          </p>
        </div>

        <p>
          <strong>Filosofi Jingga: Menuju Indonesia Menyala</strong><br/>
          Identitas kami terlukis jelas dalam pendar warna jingga (oranye). Warna ini bukanlah pilihan estetika semata, melainkan filosofi perlawanan terhadap isu keputusasaan (#IndonesiaGelap). Jingga adalah pendar fajar yang menjanjikan masa depan di mana gagasan <strong>'Indonesia Menyala'</strong>—terang benderang, adil, dan makmur—dapat diwujudkan.
        </p>

        <p>
          <strong>Pendidikan Politik Melalui "Spartan"</strong><br/>
          Lebih dari sekadar ormas, misi utama Gerakan Rakyat adalah membangun kesadaran politik yang matang di akar rumput. Melalui semboyan <em>"Gotong-Royong Untuk Indonesia"</em>, kami menginisiasi <strong>Sekolah Politik Kerakyatan (Spartan)</strong>. Ini adalah sarana pendidikan politik inklusif bagi seluruh lapisan masyarakat, demi menciptakan pemilih yang kritis dan berdaya saing.
        </p>

        <p>
          <strong>Potensi Transformasi Menjadi Partai Politik</strong><br/>
          Dengan struktur kepengurusan yang kini telah menggurita di 38 provinsi di seluruh Nusantara, perjalanan Gerakan Rakyat memicu spekulasi dan harapan besar. Tingginya aspirasi dari anggota dan basis relawan untuk bertransformasi menjadi Partai Politik (Parpol) bukanlah sekadar wacana. Menatap ke depan, kami bersiap menjadi "kendaraan politik" strategis yang tangguh untuk melanjutkan gagasan perubahan, serta membuka kemungkinan mengusung kembali tokoh inspirasi kami pada kontestasi politik di masa depan.
        </p>
      </div>
    </div>
  )
}
