import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4 className="m-0 font-bold text-lg">Selamat Datang di Pusat Kendali Web!</h4>
      </Banner>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <h5 className="font-bold text-lg m-0">Tulis Berita</h5>
          </div>
          <p className="text-sm text-neutral-500 mb-6">Bagikan kabar terbaru, kegiatan partai, atau opini politik ke publik.</p>
          <a href="/admin/collections/posts/create" className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm transition-colors">
            Buat Artikel Baru
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h5 className="font-bold text-lg m-0">Interaksi Warga</h5>
          </div>
          <p className="text-sm text-neutral-500 mb-6">Kelola dan moderasi komentar yang masuk dari para pengunjung situs.</p>
          <a href="/admin/collections/comments" className="inline-block px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium rounded-lg text-sm transition-colors">
            Lihat Komentar
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v14a2 2 0 0 0 2 2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.5 14.5 14 11l5 5"/></svg>
            </div>
            <h5 className="font-bold text-lg m-0">Galeri Media</h5>
          </div>
          <p className="text-sm text-neutral-500 mb-6">Unggah foto kegiatan, dokumen penting, atau video dokumentasi.</p>
          <a href="/admin/collections/media" className="inline-block px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium rounded-lg text-sm transition-colors">
            Buka Galeri
          </a>
        </div>

      </div>

      <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-r-2xl">
        <h5 className="font-bold text-red-800 dark:text-red-400 mb-2">Panduan Cepat</h5>
        <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
          <li>Gunakan menu <strong>Kabar Pergerakan</strong> untuk menambah berita/artikel.</li>
          <li>Setiap komentar yang masuk akan ditahan hingga Anda memberikan tanda <strong>Setuju</strong> di menu Komentar.</li>
          <li>Ubah teks dan tautan menu di bagian atas website Anda melalui menu <strong>Header</strong>.</li>
        </ul>
      </div>

    </div>
  )
}

export default BeforeDashboard
