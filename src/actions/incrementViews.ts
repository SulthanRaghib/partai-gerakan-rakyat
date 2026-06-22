'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function incrementPostViews(postId: string) {
  try {
    const payload = await getPayload({ config: configPromise })

    // Dapatkan data post saat ini
    const post = await payload.findByID({
      collection: 'posts',
      id: postId,
      depth: 0,
    })

    if (!post) {
      return { success: false, error: 'Post tidak ditemukan' }
    }

    // Tambahkan 1 ke views (pastikan fallback ke 0 jika belum ada)
    const currentViews = typeof post.views === 'number' ? post.views : 0
    const newViews = currentViews + 1

    // Update post dengan view baru
    await payload.update({
      collection: 'posts',
      id: postId,
      data: {
        views: newViews,
      },
    })

    return { success: true, views: newViews }
  } catch (error) {
    console.error('Error incrementing views:', error)
    return { success: false, error: 'Terjadi kesalahan saat menambah view' }
  }
}
