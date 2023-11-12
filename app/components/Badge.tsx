import React, { ReactNode } from "react";

interface Props {
  color: "green" | "red";
  children: ReactNode;
}

const Badge = ({ color, children }: Props) => {
  return (
    <>
      <span
        className={`bg-${color}-100 text-${color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
