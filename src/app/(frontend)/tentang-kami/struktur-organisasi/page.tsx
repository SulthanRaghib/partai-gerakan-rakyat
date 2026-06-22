import type { Metadata } from 'next'
import React from 'react'
import { Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Struktur Organisasi - Partai Gerakan Rakyat',
  description: 'Mengenal struktur kepengurusan Partai Gerakan Rakyat dari pusat hingga ke daerah.',
  keywords: 'Struktur Organisasi, Pengurus Partai Gerakan Rakyat, Sahrin Hamid',
}

export default function StrukturOrganisasiPage() {
  return (
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
  )
}
