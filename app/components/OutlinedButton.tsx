import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const OutlinedButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`border-solid border-2 px-6 ${className} text-sm rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
