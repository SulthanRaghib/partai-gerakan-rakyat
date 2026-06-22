'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={[
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      ].join(" ")}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className={[
        "container flex items-center justify-between transition-all duration-500",
        isScrolled ? "py-3" : "py-6"
      ].join(" ")}>
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
