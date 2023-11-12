import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const OutlinedButton = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`border-solid border-2 py-1 w-20 max-w-md text-sm rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
