import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    group: 'Interaksi Publik',
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'post', 'isApproved', 'createdAt'],
  },
  access: {
    // Anyone can create a comment (guests included)
    create: () => true,
    // Only authenticated users can read all comments.
    // The frontend will use a local API call to fetch approved comments bypassing this if needed, or we can allow reading approved comments.
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        isApproved: {
          equals: true,
        },
      }
    },
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
      label: 'Nama Penulis',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Komentar',
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      defaultValue: false,
      label: 'Disetujui (Tampil di Publik)',
      admin: {
        position: 'sidebar',
        components: {
          Cell: '@/components/ApproveCommentCell#ApproveCommentCell',
        },
      },
    },
  ],
}
