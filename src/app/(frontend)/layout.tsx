import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="id" suppressHydrationWarning>
      <head>
        <InitTheme />
        <meta name="google-site-verification" content="ESB8v_HEhk4DwSLBWe8tXQ9AOxfAntezbLDCx5XdLNY" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Partai Gerakan Rakyat',
              url: 'https://partai-gerakan-rakyat.vercel.app/',
            }),
          }}
        />
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  applicationName: 'Partai Gerakan Rakyat',
  title: {
    default: 'Partai Gerakan Rakyat - Dewan Pimpinan Cabang Cilegon',
    template: '%s | Partai Gerakan Rakyat',
  },
  openGraph: mergeOpenGraph({
    siteName: 'Partai Gerakan Rakyat',
    title: 'Partai Gerakan Rakyat - Dewan Pimpinan Cabang Cilegon',
  }),
  twitter: {
    card: 'summary_large_image',
    creator: '@partaigerakanrakyat',
  },
}
