"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import OutlinedButton from "@/app/components/OutlinedButton";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const route = useRouter();
  const goBack = () => route.back();
  return (
    <OutlinedButton
      className="py-2 border-blue-700 text-blue-700 dark:text-white flex items-center gap-2"
      onClick={goBack}
    >
      <span>
        <BiArrowBack className="w-4 h-4" />
      </span>
      Back
    </OutlinedButton>
  );
};

export default BackButton;
