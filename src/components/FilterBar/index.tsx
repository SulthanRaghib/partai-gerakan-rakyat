'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'

export type Category = {
  id: string
  title: string
}

export const FilterBar: React.FC<{
  categories: Category[]
}> = ({ categories }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const currentCategory = searchParams.get('category') || 'all'
  const currentQuery = searchParams.get('q') || ''
  
  const [searchValue, setSearchValue] = useState(currentQuery)

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === 'all') {
      params.delete('category')
    } else {
      params.set('category', categoryId)
    }
    params.delete('page') // Reset page on filter change
    router.push(`/kabar-pergerakan?${params.toString()}`)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchValue.trim()) {
      params.set('q', searchValue.trim())
    } else {
      params.delete('q')
    }
    params.delete('page') // Reset page on search
    router.push(`/kabar-pergerakan?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-8 mb-12">
      {/* Search Input */}
      <form onSubmit={handleSearchSubmit} className="relative w-full max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Cari kabar pergerakan..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-full border border-border bg-background shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all text-base"
        />
        <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-red-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* Categories Tabs */}
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentCategory === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Semua
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
