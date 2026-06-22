'use client'

import React, { useState } from 'react'
import { submitComment } from '@/actions/comments'

type Comment = {
  id: string
  authorName: string
  content: string
  createdAt: string
}

export const CommentsSection: React.FC<{
  postId: string | number
  initialComments: Comment[]
}> = ({ postId, initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    formData.append('postId', postId.toString())

    const result = await submitComment(formData)

    if (result.success) {
      setMessage({ type: 'success', text: result.message! })
      ;(e.target as HTMLFormElement).reset()
    } else {
      setMessage({ type: 'error', text: result.error! })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 border-t border-border mt-16">
      <h3 className="text-2xl font-bold mb-8">Komentar ({comments.length})</h3>

      {/* List of Comments */}
      <div className="space-y-6 mb-12">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-foreground/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-foreground">{comment.authorName}</span>
                <span className="text-xs text-foreground/60">
                  {new Date(comment.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-foreground/50 italic">Belum ada komentar. Jadilah yang pertama memberikan tanggapan!</p>
        )}
      </div>

      {/* Comment Form */}
      <div className="bg-foreground/5 p-6 md:p-8 rounded-3xl">
        <h4 className="text-xl font-bold mb-6">Tinggalkan Komentar</h4>
        
        {message && (
          <div className={`p-4 rounded-xl mb-6 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="authorName" className="block text-sm font-semibold mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              id="authorName"
              name="authorName"
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-semibold mb-2">Komentar</label>
            <textarea 
              id="content"
              name="content"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-y"
              placeholder="Tuliskan tanggapan atau opini Anda..."
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Komentar'}
          </button>
        </form>
      </div>
    </div>
  )
}
