'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function incrementPostViews(postId: string | number) {
  try {
    const payload = await getPayload({ config: configPromise })

    // Payload Postgres uses number for IDs
    const id = typeof postId === 'string' ? parseInt(postId, 10) : postId

    // Dapatkan data post saat ini
    const post = await payload.findByID({
      collection: 'posts',
      id: id,
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
      id: id,
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
