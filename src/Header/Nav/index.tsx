'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  // Helper for active state
  const isActive = (path: string, exact = false) => {
    if (exact) return pathname === path
    return pathname.startsWith(path)
  }

  // Shared active line style
  const activeLine = "absolute -bottom-1.5 left-0 h-[2px] w-full bg-red-600 rounded-full origin-left transition-transform duration-300 ease-out"

  return (
    <nav className="flex gap-1 md:gap-2 items-center">
      {/* Beranda */}
      <Link 
        href="/" 
        className={cn(
          "relative px-3 py-2 font-medium transition-colors hover:text-red-600 group",
          isActive('/', true) ? "text-red-600" : "text-foreground/80"
        )}
      >
        Beranda
        <span className={cn(activeLine, isActive('/', true) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
      </Link>
      
      {/* Dropdown Tentang Kami */}
      <div className="relative group px-1">
        <button 
          className={cn(
            "relative flex items-center gap-1.5 px-3 py-2 font-medium transition-colors group-hover:text-red-600",
            isActive('/tentang-kami') ? "text-red-600" : "text-foreground/80"
          )}
        >
          Tentang Kami
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
          <span className={cn(activeLine, isActive('/tentang-kami') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
        </button>

        {/* Dropdown Menu Container */}
        <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1 overflow-hidden">
            <Link 
              href="/tentang-kami" 
              className={cn(
                "relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden group/item",
                isActive('/tentang-kami', true) ? "bg-red-50 text-red-600 dark:bg-red-950/30" : "hover:bg-foreground/5"
              )}
            >
              <span className="relative z-10">Sejarah Singkat</span>
              {isActive('/tentang-kami', true) && <span className="absolute left-0 top-0 w-1 h-full bg-red-600 rounded-r-full" />}
            </Link>
            
            <Link 
              href="/tentang-kami/latar-belakang" 
              className={cn(
                "relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden group/item",
                isActive('/tentang-kami/latar-belakang') ? "bg-red-50 text-red-600 dark:bg-red-950/30" : "hover:bg-foreground/5"
              )}
            >
              <span className="relative z-10">Latar Belakang</span>
              {isActive('/tentang-kami/latar-belakang') && <span className="absolute left-0 top-0 w-1 h-full bg-red-600 rounded-r-full" />}
            </Link>
            
            <Link 
              href="/tentang-kami/struktur-organisasi" 
              className={cn(
                "relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden group/item",
                isActive('/tentang-kami/struktur-organisasi') ? "bg-red-50 text-red-600 dark:bg-red-950/30" : "hover:bg-foreground/5"
              )}
            >
              <span className="relative z-10">Struktur Organisasi</span>
              {isActive('/tentang-kami/struktur-organisasi') && <span className="absolute left-0 top-0 w-1 h-full bg-red-600 rounded-r-full" />}
            </Link>
            
            <Link 
              href="/tentang-kami/visi-misi" 
              className={cn(
                "relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all overflow-hidden group/item",
                isActive('/tentang-kami/visi-misi') ? "bg-red-50 text-red-600 dark:bg-red-950/30" : "hover:bg-foreground/5"
              )}
            >
              <span className="relative z-10">Visi dan Misi</span>
              {isActive('/tentang-kami/visi-misi') && <span className="absolute left-0 top-0 w-1 h-full bg-red-600 rounded-r-full" />}
            </Link>
          </div>
        </div>
      </div>

      {navItems.map(({ link }, i) => {
        // Evaluate dynamic href for active state
        const href =
          link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug
            ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${link.reference.value.slug}`
            : link.url;
            
        const isDynamicActive = href && href !== '/' ? pathname.startsWith(href) : false;

        return (
          <div key={i} className="relative group px-1">
            <CMSLink 
              {...link} 
              appearance="link" 
              className={cn(
                "relative px-3 py-2 font-medium transition-colors group-hover:text-red-600 block",
                isDynamicActive ? "text-red-600" : "text-foreground/80"
              )} 
            />
            <span className={cn(activeLine, "ml-3 w-[calc(100%-24px)]", isDynamicActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
          </div>
        )
      })}
      
      {/* Hubungi Kami Button */}
      <Link 
        href="/hubungi-kami" 
        className={cn(
          "ml-4 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm",
          isActive('/hubungi-kami') 
            ? "bg-red-700 text-white shadow-md ring-2 ring-red-200 dark:ring-red-900 ring-offset-2 ring-offset-background" 
            : "bg-red-600 text-white hover:bg-red-700 hover:shadow-md hover:-translate-y-0.5"
        )}
      >
        Hubungi Kami
      </Link>

      {/* Search Icon */}
      <Link 
        href="/search" 
        className={cn(
          "ml-3 p-2.5 rounded-full transition-all duration-300",
          isActive('/search')
            ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
            : "text-foreground/60 hover:bg-foreground/5 hover:text-red-600"
        )}
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 h-5" />
      </Link>
    </nav>
  )
}
