import React from 'react'
import { Users, Scale, Landmark, ChevronRight, CheckCircle2, History, MapPin } from 'lucide-react'

export const CilegonHome: React.FC = () => {
  // Schema markup for professional SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PoliticalParty',
    name: 'Partai Gerakan Rakyat - Cabang Cilegon',
    alternateName: 'PGR Cilegon',
    description: 'Partai politik yang mewujudkan demokrasi gotong royong dan ekonomi kerakyatan, berbasis di Cilegon.',
    foundingDate: '2026-01-18',
    founder: {
      '@type': 'Person',
      name: 'Sahrin Hamid'
    },
    location: {
      '@type': 'Place',
      name: 'Cilegon, Banten, Indonesia'
    },
    url: 'https://compro-bapak.com/' // Placeholder URL
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-background overflow-hidden font-sans">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients & Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-blue-500/10 dark:from-red-900/20 dark:to-blue-900/20 z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] mix-blend-screen z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen z-0" />

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium tracking-wide text-foreground">Dewan Pimpinan Cabang Cilegon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">Partai </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Gerakan Rakyat</span>
          </h1>
          
          <p className="max-w-[800px] text-lg md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            Mewujudkan demokrasi gotong royong yang anti-elitis. Saatnya rakyat Cilegon bersatu membangun ekonomi kerakyatan dan keadilan sosial bagi seluruh bangsa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <a href="#about" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium transition-colors bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-500/25">
              Pelajari Lebih Lanjut
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#bergabung" className="inline-flex items-center justify-center h-14 px-8 text-base font-medium transition-colors border-2 border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 rounded-full backdrop-blur-sm">
              Bergabung Bersama Kami
            </a>
          </div>
        </div>
      </section>

      {/* About / History Section */}
      <section id="about" className="py-24 relative w-full bg-foreground/5 border-y border-foreground/10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative group backdrop-blur-xl bg-background/50 border border-foreground/10 p-8 shadow-2xl flex flex-col justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-transparent" />
                 <History className="w-16 h-16 text-red-500 mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Lahir dari Akar Rumput</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Berawal dari kelompok relawan kuat pendukung Anies Baswedan pada Pilpres 2024, gerakan ini tumbuh menjadi sebuah Organisasi Massa (Ormas) "Gerakan Rakyat" pada 27 Februari 2025. Menyikapi kondisi politik nasional yang dinilai elitis, kami mengambil langkah berani untuk mendeklarasikan partai ini pada 18 Januari 2026, yang dipimpin oleh <strong>Sahrin Hamid</strong>.
                 </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">Tentang Kami</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Suara Murni untuk Rakyat Cilegon</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Partai Gerakan Rakyat hadir sebagai jawaban dan wadah aspirasi murni bagi masyarakat yang merindukan perpolitikan yang transparan, merakyat, dan jauh dari oligarki. Cabang Cilegon berkomitmen penuh untuk mengawal aspirasi daerah ini menuju pentas nasional.
              </p>
              <ul className="space-y-4">
                {[
                  'Berasal langsung dari inisiatif rakyat.',
                  'Anti-elitis dan mengedepankan gotong royong.',
                  'Berkomitmen pada transparansi dan keadilan.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 relative w-full">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">Ideologi & Visi</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Pondasi Pergerakan Kami</h3>
            <p className="text-xl text-muted-foreground">
              Kami berdiri tegak di atas nilai-nilai luhur bangsa, mengusung semangat pembaruan dan kesejahteraan untuk semua golongan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Nasionalisme Indonesia",
                desc: "Mengedepankan cinta tanah air yang inklusif, menjaga persatuan dalam keberagaman, dan memajukan bangsa di kancah global."
              },
              {
                icon: Scale,
                title: "Konstitusionalisme",
                desc: "Kepatuhan mutlak pada hukum dan konstitusi, memastikan pemerintahan yang bersih, adil, dan berpihak pada kebenaran."
              },
              {
                icon: Users,
                title: "Ekonomi Kerakyatan",
                desc: "Membangun sistem ekonomi yang memihak rakyat kecil, UMKM, dan pekerja, bukan segelintir elit pemilik modal."
              }
            ].map((feature, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/5 hover:border-red-500/30 hover:bg-foreground/[0.04] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative w-full bg-black text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-red-500/10 blur-[100px] z-0 pointer-events-none" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-3">Peta Jalan</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Menuju Pemilu 2029</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-white/20 pl-8 ml-4 space-y-12">
              {[
                {
                  date: "27 Februari 2025",
                  title: "Pendirian Ormas Gerakan Rakyat",
                  desc: "Mengkonsolidasi relawan Anies Baswedan menjadi wadah organisasi resmi."
                },
                {
                  date: "18 Januari 2026",
                  title: "Deklarasi Partai Politik",
                  desc: "Langkah bersejarah mendirikan Partai Gerakan Rakyat secara nasional."
                },
                {
                  date: "Juni 2026 - Sekarang",
                  title: "Legalitas Kemenkumham",
                  desc: "Pemenuhan persyaratan administratif secara menyeluruh di seluruh pelosok termasuk Cabang Cilegon."
                },
                {
                  date: "2029",
                  title: "Peserta Pemilu Nasional",
                  desc: "Berkompetisi secara sehat untuk membawa suara rakyat ke Parlemen."
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-red-500 ring-4 ring-black" />
                  <span className="text-red-400 font-bold tracking-wider text-sm mb-2 block">{step.date}</span>
                  <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
