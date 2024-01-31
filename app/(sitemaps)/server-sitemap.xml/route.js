import { getServerSideSitemap } from 'next-sitemap'
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  // const { data, error } = await supabase
  //   .from("news")
  //   .select(`*`)

  // console.log(data)

  // const loc = data.map((item) => {
  //   return {
  //     loc: `https://blockmoment.com/posts/${item.id}`,
  //     lastmod: new Date().toISOString(),
  //     changefreq: "daily",
  //     priority: 0.7,
  //   }
  // }
  // )


  const loc = [
    {
      loc: `https://blockmoment.com/posts/${1967}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }

  ]


  // 여기다가 , 다이나믹하게 , 블로그 id 들을 가져와서 , 뿌려주기
  return getServerSideSitemap(loc)
}
