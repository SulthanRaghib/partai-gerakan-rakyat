import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { FilterBar } from '@/components/FilterBar'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { SearchX } from 'lucide-react'

// Remove static rendering to allow dynamic query params
export const dynamic = 'force-dynamic'

type Args = {
  searchParams: Promise<{
    q?: string
    category?: string
    page?: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query, category, page } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  // Fetch all categories for the FilterBar
  const categoriesData = await payload.find({
    collection: 'categories',
    limit: 100,
    overrideAccess: false,
  })

  // Build query constraints
  let where: any = {}
  const andConditions = []

  if (category && category !== 'all') {
    andConditions.push({
      categories: {
        in: [category],
      },
    })
  }

  if (query) {
    andConditions.push({
      or: [
        { title: { like: query } },
        { 'meta.description': { like: query } },
      ],
    })
  }

  if (andConditions.length > 0) {
    where.and = andConditions
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: page ? parseInt(page) : 1,
    where,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-12">
        <div className="prose dark:prose-invert max-w-none text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kabar Pergerakan</h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Pusat informasi, siaran pers, opini, dan berita terbaru seputar langkah konkrit Partai Gerakan Rakyat di Cilegon. Tetap terhubung dan awasi langkah kami!
          </p>
        </div>
        
        {/* Render the interactive Filter and Search component */}
        <FilterBar categories={categoriesData.docs as any[]} />
      </div>

      {posts.totalDocs === 0 ? (
        <div className="container mb-16">
          <div className="flex flex-col items-center justify-center py-24 text-center bg-secondary/30 rounded-3xl border border-border border-dashed">
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-sm mb-6">
              <SearchX className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Belum ada Kabar Pergerakan</h3>
            <p className="text-muted-foreground max-w-md">
              {query || (category && category !== 'all')
                ? 'Pencarian atau filter Anda tidak menemukan hasil. Coba gunakan kata kunci lain atau pilih Semua Kategori.'
                : 'Saat ini belum ada artikel, berita, atau rilis pers yang diterbitkan. Silakan kembali lagi nanti!'}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="container mb-8">
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
            />
          </div>

          <CollectionArchive posts={posts.docs as any[]} />

          <div className="container">
            {posts.totalPages > 1 && posts.page && (
              <Pagination page={posts.page} totalPages={posts.totalPages} />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Kabar Pergerakan - Berita & Update Terbaru | Partai Gerakan Rakyat Cilegon`,
    description: 'Pusat informasi, siaran pers, dan berita terbaru seputar kegiatan Partai Gerakan Rakyat di kota Cilegon.'
  }
}
