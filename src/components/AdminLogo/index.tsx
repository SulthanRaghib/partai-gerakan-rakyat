import React from 'react'
import Image from 'next/image'
import '../../admin.scss'

export const AdminLogo = () => {
  return (
    <div className="admin-logo">
      <img 
        src="/assets/img/logo_text_pgr.png" 
        alt="Logo Partai" 
        style={{ maxWidth: '100%', maxHeight: '40px', objectFit: 'contain' }}
      />
    </div>
  )
}

export const AdminIcon = () => {
  return (
    <div className="admin-icon">
      <img 
        src="/assets/img/logo_pgr.png" 
        alt="Ikon Partai" 
        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
      />
    </div>
  )
}
