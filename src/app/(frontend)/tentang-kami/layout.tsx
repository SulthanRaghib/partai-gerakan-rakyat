import React from 'react'
import { Flame } from 'lucide-react'
import { TentangKamiNav } from '@/components/TentangKami/Nav'

export default function TentangKamiLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-background font-sans pb-32">
      {/* Hero Header */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-background to-orange-500/5 dark:from-red-900/20 dark:to-orange-900/10 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] mix-blend-screen z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Flame className="w-4 h-4" />
            <span>Indonesia Menyala</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Mengenal Lebih Dekat <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Partai Gerakan Rakyat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            Sebuah wadah aspirasi murni dari rakyat, oleh rakyat, dan untuk kesejahteraan bangsa. Pelajari akar sejarah, identitas, dan visi besar kami untuk masa depan Indonesia.
          </p>
        </div>
      </section>

      {/* Interactive Content Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar / Tabs Navigation */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <TentangKamiNav />
          </div>

          {/* Dynamic Content Area (Pages) */}
          <div className="w-full lg:flex-1 min-w-0">
            <div className="min-h-[500px] p-8 md:p-12 rounded-3xl bg-background border border-foreground/10 shadow-2xl relative overflow-hidden">
              {/* Decorative background element inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-bl-full z-0" />
              
              <div className="relative z-10 animate-in fade-in zoom-in-95 duration-500">
                {children}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
