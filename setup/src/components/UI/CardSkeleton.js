import React from "react";

const CardSkeleton = () => {
  return (
    <div
      className="relative w-[320px] h-[518px] space-y-3 overflow-hidden rounded-md bg-blue-50 p-3 shadow-md
   before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
    before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] mt-[2rem]"
    >
      <div className="h-64 w-full mb-[56px] rounded-lg bg-neutral-200"></div>
      <div className="space-y-3">
        <div className="h-5 w-8/12 rounded-full bg-neutral-200 mt-[2rem]"></div>
        <div className="space-y-1">
          <div className="h-4 w-full rounded-full bg-neutral-200 shadow"></div>
          <div className="h-4 w-full rounded-full bg-neutral-200 shadow"></div>
          <div className="h-4 w-full rounded-full bg-neutral-200 shadow"></div>
          <div className="h-4 w-7/12 rounded-full bg-neutral-200 shadow"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-5 w-16 rounded-full bg-neutral-200"></div>
          <div className="h-5 w-12 rounded-full bg-neutral-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
