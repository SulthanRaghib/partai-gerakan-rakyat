const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/kabar-pergerakan-sitemap.xml', '/pages-sitemap.xml', '/*', '/kabar-pergerakan/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [`${SITE_URL}/pages-sitemap.xml`, `${SITE_URL}/kabar-pergerakan-sitemap.xml`],
  },
}
