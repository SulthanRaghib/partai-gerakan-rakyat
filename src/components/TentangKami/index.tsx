'use client'

import React, { useState, useEffect } from 'react'
import { History, BookOpen, Flag, Target, Users, Flame, ChevronRight, GraduationCap } from 'lucide-react'
import { cn } from '@/utilities/ui'

const tabs = [
  {
    id: 'sejarah',
    label: 'Sejarah Singkat',
    icon: History,
  },
  {
    id: 'latar-belakang',
    label: 'Latar Belakang',
    icon: BookOpen,
  },
  {
    id: 'struktur',
    label: 'Struktur Organisasi',
    icon: Users,
  },
  {
    id: 'visi-misi',
    label: 'Visi dan Misi',
    icon: Target,
  },
]

export const TentangKami: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  useEffect(() => {
    // Membaca query string ?tab=... dari URL jika ada
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const tabParam = params.get('tab')
      if (tabParam && tabs.some(t => t.id === tabParam)) {
        setActiveTab(tabParam)
      }
    }
  }, [])

  return (
    <main className="w-full min-h-screen bg-background font-sans pt-24 pb-32">
      {/* Hero Header */}
      <section className="relative w-full py-20 overflow-hidden mb-16">
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar / Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="sticky top-32 flex flex-col gap-2 p-2 rounded-3xl bg-foreground/[0.02] border border-foreground/5 backdrop-blur-xl">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      window.history.pushState(null, '', `?tab=${tab.id}`)
                    }}
                    className={cn(
                      "flex items-center justify-between w-full p-4 rounded-2xl text-left transition-all duration-300",
                      isActive 
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]" 
                        : "hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <tab.icon className={cn("w-6 h-6", isActive ? "text-white" : "text-red-500")} />
                      <span className="text-lg font-bold">{tab.label}</span>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "rotate-90 opacity-100" : "opacity-0 -translate-x-2"
                    )} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="min-h-[500px] p-8 md:p-12 rounded-3xl bg-background border border-foreground/10 shadow-2xl relative overflow-hidden">
              {/* Decorative background element inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-bl-full z-0" />
              
              <div className="relative z-10 animate-in fade-in zoom-in-95 duration-500" key={activeTab}>
                
                {/* 1. SEJARAH SINGKAT */}
                {activeTab === 'sejarah' && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-8 text-red-600 dark:text-red-400">
                      <History className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah & Akar Gerakan Rakyat</h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Berawal dari semangat kerelawanan yang murni, <strong>Organisasi Masyarakat (Ormas) Gerakan Rakyat</strong> hadir sebagai fenomena politik teranyar di Indonesia. Kami lahir dari rahim perjuangan gagasan para pendukung Anies Baswedan pada Pemilihan Presiden 2024. Deklarasi resmi yang dikumandangkan pada <strong>27 Februari 2025</strong> di Jakarta Selatan, menjadi tonggak sejarah di mana Bapak Sahrin Hamid selaku Ketua Umum, dan Bapak Anies Baswedan sebagai Tokoh Inspirasi, merajut ikatan emosional dan ideologis yang tak terpisahkan.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Gerakan ini sejatinya telah mengakar secara organik sejak tahun 2023. Kami menyadari bahwa cita-cita perubahan tak boleh terhenti usai pemilu. Dengan warna kebanggaan jingga (oranye) yang melambangkan fajar harapan <strong>'Indonesia Menyala'</strong> untuk mengusir bayang-bayang #IndonesiaGelap, kami bertransformasi dari sekadar relawan menjadi kekuatan masyarakat yang terstruktur.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Kini, dengan struktur kepengurusan yang menjangkau 38 provinsi di seluruh Nusantara, perjalanan Gerakan Rakyat berpotensi besar untuk bermetamorfosis menjadi Partai Politik yang tangguh; siap mengusung kembali gagasan perubahan berkelanjutan di panggung politik nasional.
                    </p>
                  </div>
                )}

                {/* 2. LATAR BELAKANG */}
                {activeTab === 'latar-belakang' && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-8 text-orange-600 dark:text-orange-400">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Merespons Keresahan, Menyalakan Harapan</h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Gerakan Rakyat tidak sekadar hadir; kami lahir untuk menjawab dahaga publik akan ruang perjuangan politik yang transparan, modern, dan benar-benar berpihak pada rakyat. Di tengah ketidakpuasan terhadap praktik politik yang elitis—di mana suara masyarakat seringkali tak terdengar dan jarak dengan pengambil kebijakan kian melebar—kami menawarkan jalan alternatif: sebuah gerakan nurani yang dibangun kokoh dari bawah (*grassroots*).
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Kami menolak keras politik transaksional yang mengerdilkan nilai-nilai demokrasi. Dengan mengedepankan integritas, keberanian moral, dan semangat gotong royong, Gerakan Rakyat berikhtiar memulihkan peradaban politik Indonesia menjadi lebih bermartabat. Ini bukan tentang ambisi kelompok tertentu, melainkan mengorganisir energi kolektif warga agar lebih terarah untuk menghasilkan dampak sosial, ekonomi, dan kemanusiaan yang nyata.
                    </p>
                    
                    <div className="mt-8 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                        <Flame className="w-5 h-5" /> Dari Rakyat, Untuk Rakyat
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Kami adalah wadah perjuangan bersama. Bergerak untuk memastikan bahwa suara rakyat kembali menjadi pusat keputusan bangsa. Transformasi kami ke depan menjadi partai politik adalah instrumen dan "kendaraan" strategis agar gagasan-gagasan baik ini dapat diwujudkan melalui kewenangan konstitusional.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. STRUKTUR ORGANISASI */}
                {activeTab === 'struktur' && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
                      <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Struktur Kepengurusan</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Partai Gerakan Rakyat dikelola secara profesional dan inklusif oleh putra-putri terbaik bangsa dari Sabang sampai Merauke.
                    </p>
                    
                    {/* Placeholder Hierarchy Tree */}
                    <div className="flex flex-col items-center gap-4 py-8 border-t border-b border-foreground/10">
                      <div className="w-full max-w-sm p-4 rounded-xl bg-background border-2 border-red-500/50 text-center shadow-lg">
                        <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Ketua Umum</div>
                        <div className="text-xl font-bold">Sahrin Hamid</div>
                      </div>
                      
                      <div className="w-1 h-8 bg-foreground/10" />
                      <div className="w-full max-w-2xl h-1 bg-foreground/10" />
                      
                      <div className="flex w-full max-w-2xl justify-between gap-4 pt-4">
                        <div className="flex-1 p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
                          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Sekretaris Jenderal</div>
                          <div className="text-lg font-bold">[Nama Sekjen]</div>
                        </div>
                        <div className="flex-1 p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
                          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Bendahara Umum</div>
                          <div className="text-lg font-bold">[Nama Bendum]</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground mt-4 italic">
                      *Struktur rinci tingkat pusat, daerah, hingga cabang sedang dalam tahap pembaruan.
                    </p>
                  </div>
                )}

                {/* 4. VISI DAN MISI */}
                {activeTab === 'visi-misi' && (
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-8 text-green-600 dark:text-green-400">
                      <Target className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Misi Menuju Indonesia Menyala</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Tujuan inti Gerakan Rakyat adalah membangun kesadaran politik yang matang dan inklusif di akar rumput melalui semboyan <strong>'Gotong-Royong Untuk Indonesia'</strong>.
                    </p>
                    
                    <div className="grid gap-6">
                      <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5">
                        <div className="p-3 rounded-xl bg-background shadow-sm text-red-500">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">Sekolah Politik Kerakyatan (Spartan)</h4>
                          <p className="text-muted-foreground">Kami menginisiasi program pendidikan politik bagi seluruh lapisan masyarakat, bukan sekadar untuk kalangan internal partai, demi menciptakan pemilih yang cerdas, kritis, dan berdaya saing.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start p-6 rounded-2xl bg-foreground/5">
                        <div className="p-3 rounded-xl bg-background shadow-sm text-red-500">
                          <Flag className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">Transformasi Politik Nasional</h4>
                          <p className="text-muted-foreground">Dengan kepengurusan yang kini menggurita di 38 provinsi dan ratusan kabupaten/kota, kami bersiap menjadi kendaraan politik strategis yang tangguh untuk mengusung gagasan perubahan berkelanjutan di masa depan menuju Pemilu 2029.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
