'use client'

import React, { useState } from 'react'

export const PublishPostCell: React.FC<{
  cellData: any
  rowData: any
}> = ({ cellData, rowData }) => {
  // Payload draft statuses are typically 'published' or 'draft'
  const [status, setStatus] = useState(cellData === 'published' ? 'published' : 'draft')
  const [isLoading, setIsLoading] = useState(false)

  const isPublished = status === 'published'

  const togglePublish = async (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setIsLoading(true)
    const newStatus = isPublished ? 'draft' : 'published'

    try {
      const res = await fetch(`/api/posts/${rowData.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _status: newStatus,
        }),
      })

      if (res.ok) {
        setStatus(newStatus)
      } else {
        alert('Gagal mengubah status artikel.')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={togglePublish}
      disabled={isLoading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '9999px', // Pill shape
        border: '1px solid',
        backgroundColor: isPublished ? '#ecfdf5' : '#fffbeb',
        borderColor: isPublished ? '#a7f3d0' : '#fde68a',
        color: isPublished ? '#065f46' : '#92400e',
        cursor: isLoading ? 'wait' : 'pointer',
        fontSize: '0.8125rem',
        fontWeight: 600,
        transition: 'all 0.2s ease',
        lineHeight: 1.2,
      }}
      title="Klik untuk mengubah status publikasi"
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: isPublished ? '#10b981' : '#f59e0b',
          display: 'inline-block',
          animation: isLoading ? 'pulse 1s infinite' : 'none',
        }}
      />
      {isLoading ? 'Memproses...' : isPublished ? 'Published' : 'Draft'}
    </button>
  )
}
