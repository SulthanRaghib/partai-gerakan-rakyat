'use client'

import React, { useEffect } from 'react'

const BeforeLogin: React.FC = () => {
  useEffect(() => {
    // DOM Manipulation to inject the Eye Icon into the password field
    const checkAndInjectEyeIcon = () => {
      const passwordWrapper = document.querySelector('.field-type.password')
      if (!passwordWrapper) return

      const passwordInput = passwordWrapper.querySelector('input[type="password"], input[type="text"]') as HTMLInputElement
      if (!passwordInput) return

      // Cek apakah sudah ada icon mata (biar tidak duplikat)
      if (passwordWrapper.querySelector('.toggle-password-btn')) return

      // Bungkus input dengan wrapper relatif jika belum
      const inputWrapper = passwordInput.parentElement
      if (inputWrapper) {
        inputWrapper.style.position = 'relative'
        
        // Buat tombol toggle
        const toggleBtn = document.createElement('button')
        toggleBtn.type = 'button'
        toggleBtn.className = 'toggle-password-btn'
        toggleBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `
        toggleBtn.style.position = 'absolute'
        toggleBtn.style.right = '12px'
        toggleBtn.style.top = '50%'
        toggleBtn.style.transform = 'translateY(-50%)'
        toggleBtn.style.background = 'none'
        toggleBtn.style.border = 'none'
        toggleBtn.style.cursor = 'pointer'
        toggleBtn.style.color = '#6b7280'
        toggleBtn.style.padding = '0'
        toggleBtn.style.display = 'flex'
        toggleBtn.style.alignItems = 'center'
        toggleBtn.style.justifyContent = 'center'

        toggleBtn.addEventListener('click', (e) => {
          e.preventDefault()
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
          passwordInput.setAttribute('type', type)
          
          if (type === 'text') {
            toggleBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" y1="2" x2="22" y2="22"></line>
              </svg>
            `
          } else {
            toggleBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            `
          }
        })

        inputWrapper.appendChild(toggleBtn)
        // Beri sedikit padding ke input agar teks tidak menabrak ikon
        passwordInput.style.paddingRight = '40px'
      }
    }

    // Jalankan dengan sedikit delay agar DOM login selesai di-render oleh Payload
    const timer = setTimeout(checkAndInjectEyeIcon, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Floating Back to Home Button */}
      <a 
        href="/"
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid #e5e7eb',
          borderRadius: '9999px',
          color: '#4b5563',
          fontSize: '0.875rem',
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.2s',
          zIndex: 10
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = '#ea580c';
          e.currentTarget.style.borderColor = '#ea580c';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#4b5563';
          e.currentTarget.style.borderColor = '#e5e7eb';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Kembali ke Web
      </a>

      <div className="custom-login-header" style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#111827', letterSpacing: '-0.5px' }}>
          Portal Admin PGR
        </h2>
        <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>
          Silakan masukkan email dan sandi Anda untuk mengakses dashboard.
        </p>
      </div>
    </>
  )
}

export default BeforeLogin
