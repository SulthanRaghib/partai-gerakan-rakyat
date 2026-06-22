'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'

export async function submitComment(formData: FormData) {
  try {
    const payload = await getPayload({ config: configPromise })

    const postId = formData.get('postId') as string
    const authorName = formData.get('authorName') as string
    const content = formData.get('content') as string

    if (!postId || !authorName || !content) {
      return { success: false, error: 'Mohon isi semua kolom.' }
    }

    await payload.create({
      collection: 'comments',
      data: {
        post: postId,
        authorName,
        content,
        isApproved: false, // Default ke false untuk moderasi
      },
    })

    return { 
      success: true, 
      message: 'Komentar Anda berhasil dikirim dan sedang menunggu persetujuan Admin.' 
    }
  } catch (error) {
    console.error('Error submitting comment:', error)
    return { success: false, error: 'Terjadi kesalahan saat mengirim komentar.' }
  }
}
