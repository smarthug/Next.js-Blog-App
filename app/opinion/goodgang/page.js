import GoodGang from "@/components/opinion/goodgang";
import React from "react";

export async function generateMetadata({
  params,
}) {

  const post = {
    title: "클레이튼-핀시아 개정안, 반전인가 배신인가",
    description: "클레이튼-핀시아 재단,프로젝트 드래곤은 통합되는 방향으로 진행 투표권 15% 가진 ‘굳갱랩스’ 통합 ‘찬성’ 굳갱랩스와 커뮤니티를 위한 마이그레이션 재원 한화 약 37억 원(1500만 PDT)을 확보 논란의 ‘교환비’ 변화는 없어",
    categories: {
      title: "opinion",
    },
  };



  return {
    title: post.title,
    description: post.description,
    // authors: {
    //   name: seoData.author.name,
    //   url: seoData.author.twitterUrl,
    // },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: "https://www.blockmoment.com/opinion/goodgang",
      images: [
        {
          url: "https://lirimnaqhglyehdfwelj.supabase.co/storage/v1/object/public/openGraph/4.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        "https://lirimnaqhglyehdfwelj.supabase.co/storage/v1/object/public/openGraph/4.png",
      ],
    },
  };
}

export default function About() {
  return (
    <>
      <GoodGang />
    </>
  );
}
