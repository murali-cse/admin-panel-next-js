import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileCardSkeleton = () => {
  return (
    <div className="w-full h-full">
      <Skeleton height={300} />
    </div>
  );
};

export default ProfileCardSkeleton;
