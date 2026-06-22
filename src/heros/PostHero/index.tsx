import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { Eye, Calendar, User } from 'lucide-react'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  // @ts-ignore - views will be added to the database soon
  const views = post.views || 0

  return (
    <div className="relative pt-12 pb-8 flex flex-col items-center text-center">
      <div className="container z-10 relative max-w-4xl">
        <div className="uppercase text-sm font-bold text-red-600 mb-4 tracking-wider">
          {categories?.map((category, index) => {
            if (typeof category === 'object' && category !== null) {
              const { title: categoryTitle } = category
              const titleToUse = categoryTitle || 'Tak Berkategori'
              const isLast = index === categories.length - 1
              return (
                <React.Fragment key={index}>
                  {titleToUse}
                  {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                </React.Fragment>
              )
            }
            return null
          })}
        </div>

        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-foreground">{title}</h1>

        <div className="flex flex-wrap justify-center items-center gap-6 text-foreground/60 mb-10 text-sm font-medium">
          {hasAuthors && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{formatAuthors(populatedAuthors)}</span>
            </div>
          )}
          {publishedAt && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{views} Dilihat</span>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl">
        {heroImage && typeof heroImage !== 'string' ? (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Media fill priority imgClassName="object-cover" resource={heroImage} />
          </div>
        ) : (
          <div className="w-full h-px bg-border/50 my-8" />
        )}
      </div>
    </div>
  )
}
