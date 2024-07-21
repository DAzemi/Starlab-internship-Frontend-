import React from "react";
import CardSkeleton from "./CardSkeleton";

const LoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap gap-2 justify-center">
        {[...Array(8)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
