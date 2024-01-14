import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')


  // 여기다가 , 다이나믹하게 , 블로그 id 들을 가져와서 , 뿌려주기
  return getServerSideSitemap([
    {
      loc: 'https://blockmoment.com',
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: 'https://blockmoment.com/posts/431',
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
  ])
}
