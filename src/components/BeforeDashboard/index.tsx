import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Selamat Datang di Pusat Kendali Web!</h4>
      </Banner>
      
      <div className={`${baseClass}__grid`}>
        
        {/* Card 1 */}
        <div className={`${baseClass}__card`}>
          <div className={`${baseClass}__card-header`}>
            <div className={`${baseClass}__icon ${baseClass}__icon--red`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <h5>Tulis Berita</h5>
          </div>
          <p className={`${baseClass}__card-desc`}>Bagikan kabar terbaru, kegiatan partai, atau opini politik ke publik.</p>
          <a href="/admin/collections/posts/create" className={`btn btn--style-primary ${baseClass}__btn`}>
            Buat Artikel Baru
          </a>
        </div>

        {/* Card 2 */}
        <div className={`${baseClass}__card`}>
          <div className={`${baseClass}__card-header`}>
            <div className={`${baseClass}__icon ${baseClass}__icon--blue`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h5>Interaksi Warga</h5>
          </div>
          <p className={`${baseClass}__card-desc`}>Kelola dan moderasi komentar yang masuk dari para pengunjung situs.</p>
          <a href="/admin/collections/comments" className={`btn btn--style-secondary ${baseClass}__btn`}>
            Lihat Komentar
          </a>
        </div>

        {/* Card 3 */}
        <div className={`${baseClass}__card`}>
          <div className={`${baseClass}__card-header`}>
            <div className={`${baseClass}__icon ${baseClass}__icon--green`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v14a2 2 0 0 0 2 2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.5 14.5 14 11l5 5"/></svg>
            </div>
            <h5>Galeri Media</h5>
          </div>
          <p className={`${baseClass}__card-desc`}>Unggah foto kegiatan, dokumen penting, atau video dokumentasi.</p>
          <a href="/admin/collections/media" className={`btn btn--style-secondary ${baseClass}__btn`}>
            Buka Galeri
          </a>
        </div>

      </div>

      <div className={`${baseClass}__guide`}>
        <h5>Panduan Cepat</h5>
        <ul>
          <li>Gunakan menu <strong>Kabar Pergerakan</strong> untuk menambah berita/artikel.</li>
          <li>Setiap komentar yang masuk akan ditahan hingga Anda memberikan tanda <strong>Setuju</strong> di menu Komentar.</li>
          <li>Ubah teks dan tautan menu di bagian atas website Anda melalui menu <strong>Header</strong>.</li>
        </ul>
      </div>

    </div>
  )
}

export default BeforeDashboard
