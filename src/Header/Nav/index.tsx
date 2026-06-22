'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-4 md:gap-6 items-center">
      <Link href="/" className="font-semibold text-foreground/80 hover:text-red-600 transition-colors">
        Beranda
      </Link>
      
      {/* Dropdown Tentang Kami */}
      <div className="relative group">
        <button className="flex items-center gap-1 font-semibold text-foreground/80 group-hover:text-red-600 transition-colors py-2">
          Tentang Kami
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </button>
        {/* Invisible padding area to prevent hover from breaking */}
        <div className="absolute left-0 top-full w-full h-4" />
        <div className="absolute left-0 top-[calc(100%+0.5rem)] w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-background border border-border rounded-xl shadow-xl p-2 flex flex-col gap-1">
            <Link href="/tentang-kami?tab=sejarah" className="px-4 py-2 hover:bg-foreground/5 rounded-lg text-sm font-medium transition-colors">
              Sejarah Singkat
            </Link>
            <Link href="/tentang-kami?tab=latar-belakang" className="px-4 py-2 hover:bg-foreground/5 rounded-lg text-sm font-medium transition-colors">
              Latar Belakang
            </Link>
            <Link href="/tentang-kami?tab=struktur" className="px-4 py-2 hover:bg-foreground/5 rounded-lg text-sm font-medium transition-colors">
              Struktur Organisasi
            </Link>
            <Link href="/tentang-kami?tab=visi-misi" className="px-4 py-2 hover:bg-foreground/5 rounded-lg text-sm font-medium transition-colors">
              Visi dan Misi
            </Link>
          </div>
        </div>
      </div>

      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <Link href="/search" className="ml-2">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary hover:text-red-600 transition-colors" />
      </Link>
    </nav>
  )
}
