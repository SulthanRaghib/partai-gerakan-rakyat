'use client'

import React, { useState, useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'
import { Logo } from '@/components/Logo/Logo'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  // Tutup menu saat pindah rute
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileDropdownOpen(false)
  }, [pathname])

  // Lock body scroll saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Helper for active state
  const isActive = (path: string, exact = false) => {
    if (exact) return pathname === path
    return pathname.startsWith(path)
  }

  // Shared active line style
  const activeLine = "absolute -bottom-1.5 left-0 h-[2px] w-full bg-red-600 rounded-full origin-left transition-transform duration-300 ease-out"

  return (
    <>
      {/* ======================= */}
      {/*   DESKTOP NAVIGATION    */}
      {/* ======================= */}
      <nav className="hidden md:flex gap-1 md:gap-2 items-center">
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

      {/* ======================= */}
      {/*   MOBILE SEARCH & BTN   */}
      {/* ======================= */}
      <div className="flex md:hidden items-center gap-2">
        <Link 
          href="/search" 
          className="p-2 rounded-full text-foreground/60 hover:bg-foreground/5 hover:text-red-600 transition-colors"
        >
          <SearchIcon className="w-5 h-5" />
        </Link>
        
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* ======================= */}
      {/* MOBILE MENU FULL SCREEN */}
      {/* ======================= */}
      <div 
        className={cn(
          "fixed inset-0 z-[60] bg-background flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Menu Header */}
        <div className="container flex items-center justify-between py-5 border-b border-border/30">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo loading="eager" priority="high" />
          </Link>
          <div className="flex items-center gap-2">
            <Link 
              href="/search" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-foreground/60 hover:bg-foreground/5 hover:text-red-600 transition-colors"
            >
              <SearchIcon className="w-6 h-6" />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-foreground/5 text-foreground hover:bg-red-50 hover:text-red-600 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className="container py-8 flex flex-col gap-8 flex-grow">
          <Link 
            href="/" 
            className={cn("text-2xl font-bold transition-colors", isActive('/', true) ? "text-red-600" : "text-foreground")}
          >
            Beranda
          </Link>
          
          {/* Dropdown Tentang Kami Mobile */}
          <div className="flex flex-col border-y border-border/50 py-6">
            <button 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between text-2xl font-bold text-foreground"
            >
              Tentang Kami
              <ChevronDown className={cn("w-6 h-6 transition-transform", mobileDropdownOpen ? "rotate-180 text-red-600" : "")} />
            </button>
            
            <div className={cn(
              "flex flex-col gap-5 overflow-hidden transition-all duration-300", 
              mobileDropdownOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
            )}>
              <Link href="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)} className={cn("pl-4 text-xl font-medium transition-colors", isActive('/tentang-kami', true) ? "text-red-600" : "text-foreground/70")}>Sejarah Singkat</Link>
              <Link href="/tentang-kami/latar-belakang" onClick={() => setIsMobileMenuOpen(false)} className={cn("pl-4 text-xl font-medium transition-colors", isActive('/tentang-kami/latar-belakang') ? "text-red-600" : "text-foreground/70")}>Latar Belakang</Link>
              <Link href="/tentang-kami/struktur-organisasi" onClick={() => setIsMobileMenuOpen(false)} className={cn("pl-4 text-xl font-medium transition-colors", isActive('/tentang-kami/struktur-organisasi') ? "text-red-600" : "text-foreground/70")}>Struktur Organisasi</Link>
              <Link href="/tentang-kami/visi-misi" onClick={() => setIsMobileMenuOpen(false)} className={cn("pl-4 text-xl font-medium transition-colors", isActive('/tentang-kami/visi-misi') ? "text-red-600" : "text-foreground/70")}>Visi dan Misi</Link>
            </div>
          </div>
          
          {navItems.map(({ link }, i) => {
            const href = link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug
                ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${link.reference.value.slug}`
                : link.url;
            const isDynamicActive = href && href !== '/' ? pathname.startsWith(href) : false;
            
            return (
               <div key={i} onClick={() => setIsMobileMenuOpen(false)}>
                 <CMSLink 
                   {...link} 
                   appearance="link"
                   className={cn("text-2xl font-bold transition-colors", isDynamicActive ? "text-red-600" : "text-foreground")} 
                 />
               </div>
            )
          })}
          
          <div className="mt-auto pt-8 pb-8">
            <Link 
              href="/hubungi-kami" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-5 rounded-full font-bold text-xl bg-red-600 text-white shadow-lg active:scale-95 transition-transform"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
