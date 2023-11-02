import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const OutlinedButton = ({ className, children }: Props) => {
  return (
    <button className={`border-solid border-2 px-6 ${className} text-sm`}>
      {children}
    </button>
  );
};

export default OutlinedButton;
