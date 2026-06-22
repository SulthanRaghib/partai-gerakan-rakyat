import React from 'react'
import { Users, Scale, Landmark, ChevronRight, Handshake, Eye, Briefcase, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const CilegonHome: React.FC = () => {
  // Schema markup for professional SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PoliticalParty',
    name: 'Partai Gerakan Rakyat - Cabang Cilegon',
    alternateName: 'PGR Cilegon',
    description: 'Partai politik transparan, tanpa mahar, dan fokus pada keadilan sosial. Bergabunglah bersama PGR Cilegon.',
    foundingDate: '2026-01-18',
    founder: {
      '@type': 'Person',
      name: 'Sahrin Hamid'
    },
    location: {
      '@type': 'Place',
      name: 'Cilegon, Banten, Indonesia'
    },
    url: 'https://compro-bapak.com/'
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-background overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/img/hero_bg.png" 
            alt="Semangat kebersamaan rakyat Cilegon" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay so text pops out */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 dark:from-background dark:via-background/90 dark:to-background/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-red-600 dark:text-red-400">Panggilan Pergerakan Cilegon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Saatnya Bersuara.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Saatnya Bergerak.</span>
          </h1>
          
          <p className="max-w-[700px] text-lg md:text-2xl text-foreground/80 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150 font-medium">
            Partai Gerakan Rakyat Cilegon memanggil Anda. Tanpa oligarki, tanpa mahar politik, murni untuk kesejahteraan kita bersama.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300 w-full sm:w-auto">
            <Link href="/hubungi-kami" className="group relative inline-flex items-center justify-center h-14 px-8 text-base font-bold transition-all bg-red-600 hover:bg-red-700 text-white rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.7)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Gabung Pergerakan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a href="#mengapa-kami" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium transition-all border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 rounded-full backdrop-blur-sm text-foreground hover:-translate-y-1">
              Pelajari Visi Kami
            </a>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION (RECRUITMENT FOCUSED) */}
      <section id="mengapa-kami" className="py-24 relative w-full bg-background border-b border-foreground/5">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-foreground/10">
                <Image 
                  src="/assets/img/join_us.png" 
                  alt="Anggota Partai Gerakan Rakyat berkolaborasi" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                    <p className="text-xl font-bold text-foreground">"Politik harus menjadi jalan pengabdian, bukan jalan kekayaan."</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-500/20 to-orange-500/10 blur-[100px] rounded-full" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-600 rounded-full"></span>
                Mengapa Bergabung?
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Kami Membangun Kekuatan dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Rakyat Biasa</span>
              </h3>
              
              <div className="space-y-8 mt-12">
                {[
                  {
                    icon: Handshake,
                    title: "Tanpa Mahar Politik",
                    desc: "Tidak ada biaya untuk mencalonkan diri. Kami mengukur Anda dari integritas, kapasitas, dan rekam jejak, bukan dari tebalnya dompet."
                  },
                  {
                    icon: Briefcase,
                    title: "Fokus Kesejahteraan Rakyat",
                    desc: "Perjuangan kami terpusat pada penciptaan lapangan kerja, dukungan UMKM, dan akses pendidikan yang merata di Cilegon."
                  },
                  {
                    icon: Eye,
                    title: "Transparansi Total",
                    desc: "Sistem pendanaan dan pengambilan keputusan partai bersifat terbuka. Anda memiliki hak untuk tahu ke mana arah perjuangan ini."
                  }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center flex-shrink-0 border border-foreground/10 text-foreground">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISI & MISI (INTERACTIVE CARDS) */}
      <section className="py-32 relative w-full bg-foreground/5">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Visi Perjuangan</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Tiga Pilar Utama Kami</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: Landmark,
                title: "Nasionalisme",
                desc: "Membangun rasa cinta tanah air yang inklusif dan memajukan bangsa di kancah global tanpa mengorbankan identitas lokal Cilegon."
              },
              {
                icon: Scale,
                title: "Konstitusi",
                desc: "Kepatuhan mutlak pada hukum, memastikan pemerintahan yang bersih dari korupsi, adil, dan senantiasa berpihak pada kebenaran."
              },
              {
                icon: Users,
                title: "Ekonomi Kerakyatan",
                desc: "Membangun sistem ekonomi yang memihak rakyat kecil, UMKM, dan perlindungan penuh terhadap hak-hak buruh."
              }
            ].map((feature, i) => (
              <div key={i} className="group relative h-80 rounded-[2rem] bg-background border border-foreground/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-500" />
                
                <div className="relative z-20 p-10 flex flex-col h-full justify-end">
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-background shadow-md border border-foreground/5 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-3xl font-bold mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h4>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground pt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE (MINIMALIST) */}
      <section className="py-24 relative w-full bg-background overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center mb-16">
            <div className="max-w-xl">
              <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Peta Jalan</h2>
              <h3 className="text-4xl font-extrabold">Langkah Menuju Pemilu 2029</h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-md border-l-2 border-red-600 pl-6">
              Kami bekerja secara sistematis dan terstruktur untuk merebut kemenangan yang bermartabat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: "2025", title: "Berdirinya Ormas" },
              { year: "2026", title: "Deklarasi Partai" },
              { year: "2027", title: "Penguatan Ranting" },
              { year: "2029", title: "Kemenangan Rakyat" }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-foreground/5 border border-foreground/5 hover:border-red-500/50 transition-all duration-300">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground/20 to-foreground/5 mb-4">{step.year}</div>
                <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 relative w-full px-4 md:px-6">
        <div className="container relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-red-900 via-red-950 to-black z-0 py-24">
           {/* Decorative elements */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
           <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-red-500/30 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
          <div className="relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
              Perubahan Cilegon Dimulai Dari Keputusan Anda Hari Ini.
            </h2>
            <p className="text-xl text-red-200/80 mb-12 max-w-2xl mx-auto">
              Jangan biarkan suara Anda tidak terdengar. Bergabunglah bersama ribuan orang lainnya yang menginginkan perubahan nyata.
            </p>
            <Link href="/hubungi-kami" className="inline-flex items-center justify-center h-16 px-12 text-lg font-bold transition-all bg-white text-red-900 hover:bg-gray-100 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
              Daftarkan Diri Anda Sekarang
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
