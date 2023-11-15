"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileCardSkeleton = () => {
  var darkTheme;
  if (typeof window !== "undefined") {
    darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  }

  return (
    <div className="w-full h-full">
      <SkeletonTheme
        baseColor={`${darkTheme?.matches ? "#0E1017" : "#ebebeb"} `}
        highlightColor={`${darkTheme?.matches ? "#1C4ED83A" : "#f5f5f5"}`}
      >
        <Skeleton height={300} className="dark:ring-1" />
      </SkeletonTheme>
    </div>
  );
};

export default ProfileCardSkeleton;
