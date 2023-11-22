import React from "react";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

const Holidays = () => {
  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Holidays</PageTitle>
        </div>
        <div className="h-4/5 flex justify-center items-center">
          <div className="text-center">
            <Image
              src={"vectors/coming_soon.svg"}
              alt="coming soon"
              width={250}
              height={250}
              className="mb-4"
            />
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Holidays;
