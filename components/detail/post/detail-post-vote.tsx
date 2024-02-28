"use client";

import React, { useState } from "react";

const DetailPostVote: React.FC = ({ point = 0 }) => {
  const [upvotes, setUpvotes] = useState<number>(0);
  const [downvotes, setDownvotes] = useState<number>(0);

  const handleUpvote = () => {
    const amout = prompt("How much you want to upvote?");
    if (amout) {
      //   setUpvotes(upvotes + Number(amout));

      // 그만 큼 가지고 있는 지 확인 필요
      // profile 에서 차감

      const sum = point + Number(amout);
      if (sum > 500) {
        // true 로 바꾸기
      }
    }
  };
  const handleDownvote = () => setDownvotes(downvotes + 1);

  return (
    <div className="flex  items-center justify-center space-x-4 rounded-md bg-gray-100 p-4">
      <button
        className="flex w-32 items-center justify-center rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={handleUpvote}
      >
        Upvote
      </button>
      <span className="text-2xl font-bold">{point}</span>
      <button
        className="flex w-32 items-center justify-center rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={handleDownvote}
      >
        Downvote
      </button>
      {/* <span>{downvotes} Downvotes</span> */}
      {/* <span>{upvotes} Upvotes</span> */}
    </div>
  );
};

export default DetailPostVote;
