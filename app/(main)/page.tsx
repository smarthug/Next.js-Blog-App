import { MainPostItem, MainPostItemLoading } from "@/components/main";
import Opinion from "@/components/opinion/main-opinion";
import { SharedPagination } from "@/components/shared";
import { PostWithCategoryWithProfile } from "@/types/collection";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { v4 } from "uuid";

export const revalidate = 0;

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log(user);

  // Fetch total pages
  // const { count } = await supabase
  //   .from("news")
  //   .select("*", { count: "exact", head: true });

  // console.log(count);
  const count = 100;

  // // Pagination
  const limit = 10;
  const totalPages = count ? Math.ceil(count / limit) : 0;
  const page =
    typeof searchParams.page === "string" &&
    +searchParams.page > 1 &&
    +searchParams.page <= totalPages
      ? +searchParams.page
      : 1;
  const from = (page - 1) * limit;
  const to = page ? from + limit : limit;

  // console.log(from, to, page, totalPages, count)

  // // Fetch posts
  const { data, error } = await supabase
    .from("news")
    .select(`*`)
    .match({  published: true })
    .order("created_at", { ascending: false })
    .range(from, to)
    .returns<PostWithCategoryWithProfile[]>();

  // Fetch posts
  // const { data, error } = await supabase
  // .from("posts")
  // .select(`*`)
  // // .eq("published", true)
  // // .order("created_at", { ascending: false })
  // // .range(from, to)
  // .returns<PostWithCategoryWithProfile[]>();

  // console.log(data);

  // if (!data || error || !data.length) {
  //   notFound;
  // }

  return (
    <>
      <div className="space-y-6">
        {/* <div>Articles</div> */}
        <Suspense key={v4()} fallback={<MainPostItemLoading />}>
          
          <div className="container mx-auto px-4  ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
              <Opinion
                to={"/opinion/goodgang"}
                title={"클레이튼-핀시아 개정안, `반전`인가 `배신`인가"}
              />
            
           
            <Opinion
              to={"/opinion/dragon"}
              title={"핀시아와 클레이튼 1:1? `2배를 줘도 안합니다.`"}
            />
            </div>
          </div>
        </Suspense>
        {data?.map((post) => (
          <Suspense key={v4()} fallback={<MainPostItemLoading />}>
            <MainPostItem post={post} />
          </Suspense>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <SharedPagination
          page={page}
          totalPages={totalPages}
          baseUrl="/"
          pageUrl="?page="
        />
      )}
    </>
  );
}
