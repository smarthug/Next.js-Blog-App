"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { voteUpdateConfig } from "@/config/vote";
import { UpdateVote } from "@/actions/vote/update-vote";

const DetailPostVote: React.FC = ({ id,point = 0 }) => {
  const [upvotes, setUpvotes] = useState<number>(0);
  const [downvotes, setDownvotes] = useState<number>(0);

  const [voteNum, setVoteNum] = useState<number>(0);

  const router = useRouter();


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
  }

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

    console.log(id, voteNum);
    const response = await UpdateVote(id, point + voteNum);

    if (response) {
      toast.success(voteUpdateConfig.successMessage);
      // router.push(`/editor/posts?search=refresh`);
      // router.reload();
    } else {
      toast.error(voteUpdateConfig.errorMessage);
    }

    // setIsSaving(false);
    // setShowLoadingAlert(false);
  }


  const handleChange = (event) => {
    if (event.target.value < 0) {
      setVoteNum(0);
      
    }else{

      setVoteNum(Number(event.target.value));
    }
  };

  return (
    <>
      <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
       
        <button
          className="flex w-12  items-center justify-center rounded  px-4 py-2 text-2xl border border-black/5 bg-white py-2 hover:bg-gray-50 hover:shadow-sm"
          onClick={handleDownvote}
        >
          -
        </button>
        {/* <span className="text-2xl font-bold">{point}</span> */}
        <input type="number" min={0} onChange={handleChange} className="form-input text-2xl font-bold block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" value={voteNum} />

        <button
          className="flex w-12  items-center justify-center rounded  px-4 py-2 text-2xl border border-black/5 bg-white py-2 hover:bg-gray-50 hover:shadow-sm"
          onClick={handleUpvote}
        >
          +
        </button>
        {/* <span>{downvotes} Downvotes</span> */}
        {/* <span>{upvotes} Upvotes</span> */}
      </div>

      <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
      <button
          className="flex w-24 text-2xl font-bold  items-center justify-center border border-black/5 bg-white py-2 hover:bg-gray-50 hover:shadow-sm"
          onClick={handleVote}
        >
          Vote
        </button>

      </div>
    </>
  );
};

export default DetailPostVote;
