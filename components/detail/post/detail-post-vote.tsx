"use client";

import { UpdateUserPoint } from "@/actions/vote/update-user-point";
import { UpdateVote } from "@/actions/vote/update-vote";
import { voteUpdateConfig } from "@/config/vote";
import { createClient } from "@/utils/supabase/client";
import { daoUtil } from "@/utils/web3/daoUtil";
import { Session } from "@supabase/supabase-js";
import { DivideCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAccount } from "wagmi";

interface DetailPostVoteProps {
  id: string;
  point: number;
}

const DetailPostVote: React.FC<DetailPostVoteProps> = ({ id, point = 0 }) => {
  const supabase = createClient();
  const [upvotes, setUpvotes] = useState<number>(0);
  const [downvotes, setDownvotes] = useState<number>(0);

  const [voteNum, setVoteNum] = useState<number>(0);

  const router = useRouter();

  const [nftNum, setNftNum] = useState<number>(0);
  const { address } = useAccount();

  const [session, setSession] = useState<Session | null>(null);

  // Check authentitication and bookmark states
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [session?.user.id, supabase.auth]);

  useEffect(() => {
    const fetchNFTNum = async () => {
      const num = await daoUtil(address);
      console.log(num);
      setNftNum(num);
    };

    fetchNFTNum();
  });

  // Set post views
  // const slug = params?.slug?.join("/");

  // const [value, setValue] = useState(0);

  // const handleUpvote = () => {
  //   const amout = prompt("How much you want to upvote?");
  //   if (amout) {
  //     //   setUpvotes(upvotes + Number(amout));

  //     // 그만 큼 가지고 있는 지 확인 필요
  //     // profile 에서 차감

  //     const sum = point + Number(amout);
  //     if (sum > 500) {
  //       // true 로 바꾸기
  //     }
  //   }
  // };

  const handleUpvote = () => setVoteNum(voteNum + 1);
  // const handleDownvote = () => setVoteNum(voteNum - 1);

  const handleDownvote = () => {
    if (voteNum > 0) {
      setVoteNum(voteNum - 1);
    }
  };

  // const handleVote = () => {
  //   // 투표하기
  // };

  async function handleVote() {
    // setShowLoadingAlert(true);
    // setIsSaving(true);

    // const response = await UpdatePost({
    //   id: post.id,
    //   title: data.title,
    //   slug: data.slug,
    //   image: data.image,
    //   description: data.description,
    //   content: content,
    //   categoryId: data.categoryId,
    // });

    // if (response) {
    //   toast.success(protectedEditorConfig.successMessage);
    //   router.push(`/editor/posts?search=refresh`);
    // } else {
    //   toast.error(protectedEditorConfig.errorMessage);
    // }

    if (session?.user.id) {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .match({ id: session?.user.id })
        .single();
      // const post = {
      //   title: protectedPostConfig.untitled,
      //   user_id: session?.user.id,
      // };

      // const response = await CreatePost(post);

      if (data.point < voteNum) {
        toast.error("You don't have enough point");
        return;
      }

      console.log(id, voteNum);
      const response = await UpdateVote(id, point + voteNum);

      const response2 = await UpdateUserPoint(
        session?.user.id,
        data.point - voteNum,
      );

      if (response) {
        toast.success(voteUpdateConfig.successMessage);

        setVoteNum(0);

        router.refresh();
        // window.reload()
        // router.push(`/editor/posts?search=refresh`);
        // router.reload();
      } else {
        toast.error(voteUpdateConfig.errorMessage);
      }
    }

    // setIsSaving(false);
    // setShowLoadingAlert(false);
  }

  const handleChange = (event) => {
    if (event.target.value < 0) {
      setVoteNum(0);
    } else {
      setVoteNum(Number(event.target.value));
    }
  };

  return (
    <>
      {nftNum > 0 && (
        <>
          <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
            <div className="flex w-24 items-center justify-center  border border-black/5 py-2 text-2xl font-bold hover:bg-gray-50 hover:shadow-sm">
              {point}
            </div>
          </div>
          <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
            <button
              className="flex w-12  items-center justify-center rounded  border border-black/5 bg-white px-4 py-2 py-2 text-2xl hover:bg-gray-50 hover:shadow-sm"
              onClick={handleDownvote}
            >
              -
            </button>
            {/* <span className="text-2xl font-bold">{point}</span> */}
            <input
              type="number"
              min={0}
              onChange={handleChange}
              className="form-input block w-24 rounded-md border-gray-300 text-2xl font-bold shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              value={voteNum}
            />

            <button
              className="flex w-12  items-center justify-center rounded  border border-black/5 bg-white px-4 py-2 py-2 text-2xl hover:bg-gray-50 hover:shadow-sm"
              onClick={handleUpvote}
            >
              +
            </button>
            {/* <span>{downvotes} Downvotes</span> */}
            {/* <span>{upvotes} Upvotes</span> */}
          </div>

          <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
            <button
              className="flex w-24 items-center justify-center  border border-black/5 bg-white py-2 text-2xl font-bold hover:bg-gray-50 hover:shadow-sm"
              onClick={handleVote}
            >
              Vote
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPostVote;
