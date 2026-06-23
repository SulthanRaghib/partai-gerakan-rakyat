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
      <style>{`
        /* Memaksa layout payload-login menjadi split screen */
        html, body {
          background-color: #f9fafb !important;
        }
        
        /* Container utama Payload 3 login */
        .payload-default-layout,
        main,
        #app {
          display: flex;
          justify-content: flex-end;
          min-height: 100vh;
        }

        /* Latar belakang sisi kiri */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 55%;
          height: 100vh;
          background: url('/assets/img/organisasi.png') center/cover no-repeat;
          z-index: 0;
          box-shadow: inset -20px 0 50px -10px rgba(0,0,0,0.3);
          display: none;
        }

        @media (min-width: 1024px) {
          body::before { display: block; }
        }

        /* Kotak form di sisi kanan */
        form, .payload-form {
          position: relative;
          z-index: 10;
          background: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 20px !important;
          padding: 2.5rem 2rem !important;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05) !important;
          margin-top: 1.5rem !important;
          width: 100% !important;
          max-width: 440px !important;
        }

        /* Container form agarkeh margin right */
        @media (min-width: 1024px) {
          form, .payload-form {
            margin-right: 5vw !important;
            margin-top: auto !important;
            margin-bottom: auto !important;
          }
        }

        /* Input modern */
        input[type="text"],
        input[type="password"],
        input[type="email"] {
          border-radius: 10px !important;
          padding: 0.875rem 1.25rem !important;
          border: 1.5px solid #d1d5db !important;
          background: #f9fafb !important;
          transition: all 0.25s ease !important;
        }

        input:focus {
          border-color: #ea580c !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.1) !important;
        }

        /* Tombol submit modern */
        button[type="submit"] {
          background: linear-gradient(135deg, #f97316 0%, #c2410c 100%) !important;
          color: white !important;
          border-radius: 10px !important;
          padding: 1rem 1.5rem !important;
          font-weight: 700 !important;
          font-size: 1.05rem !important;
          margin-top: 1rem !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 10px 15px -3px rgba(234, 88, 12, 0.3) !important;
        }

        button[type="submit"]:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 15px 25px -5px rgba(234, 88, 12, 0.4) !important;
        }
      `}</style>
      
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
