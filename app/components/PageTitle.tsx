import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: Props) => {
  return <p className="font-semibold text-3xl my-5">{children}</p>;
};

export default PageTitle;
