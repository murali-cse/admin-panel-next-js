import { ReactNode } from "react";

type Props = {
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Button = ({ disabled = false, className, onClick, children }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`py-2 w-20 max-w-lg rounded-md text-sm  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
