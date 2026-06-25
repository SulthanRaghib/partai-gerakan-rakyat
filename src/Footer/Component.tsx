import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link className="flex items-center" href="/">
              <Logo />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Partai Gerakan Rakyat (PGR) Dewan Pimpinan Cabang Cilegon. Membangun demokrasi gotong royong dan ekonomi kerakyatan untuk kesejahteraan masyarakat Cilegon yang transparan dan berkeadilan.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-300" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (from CMS) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Tautan Cepat</h3>
            <nav className="flex flex-col gap-3">
              {navItems.map(({ link }, i) => {
                return (
                  <div key={i} className="flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <CMSLink className="text-white/70 hover:text-white transition-colors" {...link} />
                  </div>
                )
              })}
              <div className="flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <Link href="/hubungi-kami" className="text-white/70 hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </div>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Kantor DPC Cilegon</h3>
            <address className="not-italic flex flex-col gap-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Jl. Pandawa 02 Rt.06/03.<br />
                  Kel. Bendungan Kec. Cilegon<br />
                  Kota Cilegon Banten.
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href="https://wa.me/6289510379131" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">
                  089510379131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span>halo@pgr-cilegon.id</span>
              </div>
            </address>
          </div>

          {/* Column 4: Newsletter / SEO Block */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">Bergabunglah</h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Dapatkan pembaruan terbaru tentang pergerakan kami dan acara-acara di Cilegon. Suara Anda menentukan masa depan.
            </p>
            <div className="flex items-center mt-2">
              <ThemeSelector />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Partai Gerakan Rakyat Cabang Cilegon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
