'use client'

import React from 'react'
import { History, BookOpen, Flag, Target, Users, ChevronRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  {
    id: '/tentang-kami',
    label: 'Sejarah Singkat',
    icon: History,
  },
  {
    id: '/tentang-kami/latar-belakang',
    label: 'Latar Belakang',
    icon: BookOpen,
  },
  {
    id: '/tentang-kami/struktur-organisasi',
    label: 'Struktur Organisasi',
    icon: Users,
  },
  {
    id: '/tentang-kami/visi-misi',
    label: 'Visi dan Misi',
    icon: Target,
  },
]

export const TentangKamiNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-32 flex flex-col gap-2 p-2 rounded-3xl bg-foreground/[0.02] border border-foreground/5 backdrop-blur-xl">
      {tabs.map((tab) => {
        const isActive = pathname === tab.id
        return (
          <Link
            key={tab.id}
            href={tab.id}
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
          </Link>
        )
      })}
    </div>
  )
}
