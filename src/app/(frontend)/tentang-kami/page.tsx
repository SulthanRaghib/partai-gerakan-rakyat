import type { Metadata } from 'next'
import React from 'react'
import { TentangKami } from '@/components/TentangKami'

export const metadata: Metadata = {
  title: 'Tentang Kami - Sejarah & Visi Partai Gerakan Rakyat',
  description: 'Kenali lebih dekat Partai Gerakan Rakyat. Pelajari sejarah berdirinya dari relawan Anies Baswedan, latar belakang, visi, misi, dan struktur organisasi kami.',
  keywords: 'Tentang Kami, Partai Gerakan Rakyat, Sejarah Partai, Visi Misi, Struktur Organisasi, Sahrin Hamid, Anies Baswedan, Gerakan Rakyat',
  openGraph: {
    title: 'Tentang Kami - Partai Gerakan Rakyat',
    description: 'Kenali lebih dekat sejarah, latar belakang, visi, misi, dan struktur organisasi Partai Gerakan Rakyat.',
    url: 'https://compro-bapak.com/tentang-kami',
    siteName: 'Partai Gerakan Rakyat',
    images: [
      {
        url: '/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Partai Gerakan Rakyat',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami - Partai Gerakan Rakyat',
    description: 'Kenali lebih dekat sejarah, latar belakang, visi, misi, dan struktur organisasi Partai Gerakan Rakyat.',
  }
}

export default function TentangKamiPage() {
  // Schema markup for professional SEO for AboutPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang Kami - Partai Gerakan Rakyat',
    description: 'Sejarah, latar belakang, dan visi misi Partai Gerakan Rakyat.',
    publisher: {
      '@type': 'Organization',
      name: 'Partai Gerakan Rakyat',
      founder: {
        '@type': 'Person',
        name: 'Sahrin Hamid'
      },
      foundingDate: '2026-01-18'
    }
  }

  return (
    <article>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TentangKami />
    </article>
  )
}
