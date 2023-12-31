import React from "react";
import PageTitle from "../components/PageTitle";

const LeaveLoading = () => {
  return (
    <main>
      <div className="p-4 h-screen">
        <div>
          <PageTitle>Leave</PageTitle>
        </div>
        <div className="flex justify-center items-center h-5/6">
          <p>Loading ...</p>
        </div>
      </div>
    </main>
  );
};

export default LeaveLoading;
