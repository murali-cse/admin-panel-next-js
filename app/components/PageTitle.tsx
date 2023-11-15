import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: Props) => {
  return (
    <p className="font-semibold text-xl md:text-2xl lg:text-3xl my-5 text-black dark:text-zinc-50">
      {children}
    </p>
  );
};

export default PageTitle;
