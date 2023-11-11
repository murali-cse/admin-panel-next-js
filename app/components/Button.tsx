import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`py-2 px-6 rounded-md text-sm  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
