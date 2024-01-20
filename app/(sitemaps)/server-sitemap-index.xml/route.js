import { getServerSideSitemapIndex } from 'next-sitemap'

export async function GET(request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex([
    'https://blockmoment.com/server-sitemap.xml',
    // 'https://blockmoment.com/path-2.xml',
  ])
}
