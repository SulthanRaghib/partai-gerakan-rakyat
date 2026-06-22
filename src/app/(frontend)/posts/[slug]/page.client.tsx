'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useRef } from 'react'
import { incrementPostViews } from '@/actions/incrementViews'

export const PageClient: React.FC<{ postId?: string }> = ({ postId }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const hasIncremented = useRef(false)

  useEffect(() => {
    // Kita gunakan tema terang karena PostHero sekarang berwarna putih
    setHeaderTheme('light')
  }, [setHeaderTheme])

  useEffect(() => {
    if (postId && !hasIncremented.current) {
      incrementPostViews(postId).catch(console.error)
      hasIncremented.current = true
    }
  }, [postId])

  return <React.Fragment />
}

export default PageClient
