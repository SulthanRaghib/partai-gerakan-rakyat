'use client'

import React, { useState } from 'react'

export const ApproveCommentCell: React.FC<{
  cellData: any
  rowData: any
}> = ({ cellData, rowData }) => {
  const [isApproved, setIsApproved] = useState(Boolean(cellData))
  const [isLoading, setIsLoading] = useState(false)

  const toggleApproval = async (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent row click navigation
    e.preventDefault()

    setIsLoading(true)
    try {
      const res = await fetch(`/api/comments/${rowData.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isApproved: !isApproved,
        }),
      })

      if (res.ok) {
        setIsApproved(!isApproved)
      } else {
        alert('Gagal mengubah status komentar.')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={toggleApproval}
      disabled={isLoading}
      style={{
        padding: '6px 12px',
        borderRadius: '6px',
        border: '1px solid',
        backgroundColor: isApproved ? '#d1fae5' : '#f3f4f6',
        borderColor: isApproved ? '#34d399' : '#d1d5db',
        color: isApproved ? '#065f46' : '#374151',
        cursor: isLoading ? 'wait' : 'pointer',
        fontSize: '0.875rem',
        fontWeight: 600,
        transition: 'all 0.2s',
      }}
    >
      {isLoading ? 'Memproses...' : isApproved ? '✓ Disetujui' : 'Tersembunyi'}
    </button>
  )
}
