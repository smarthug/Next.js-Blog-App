import Dragon from "@/components/opinion/dragon";
import React from "react";

export async function generateMetadata({
  params,
}) {

  const post = {
    title: "핀시아와 클레이튼 1:1? 2배를 줘도 안합니다.",
    description: "바로 클레이튼(Klaytn)과 핀시아(Finschia)의 통합 제안 발의 였는데요. 1월 16일 핀시아의 FGP(Finschia Governance Proposal)과 KGP(Klaytn Governance Proposal)에는 각각 핀시아와 클레이튼을 통합해 새로운 프로젝트 드래곤으로 탄생시킨다는 제안이 올라왔습니다.",
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
      url: "https://www.blockmoment.com/opinion",
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
      <Dragon />
    </>
  );
}
