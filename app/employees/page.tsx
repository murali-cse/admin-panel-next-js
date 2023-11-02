import React from "react";
import ProfileCard from "./ProfileCard";
import PageTitle from "../components/PageTitle";

const Employees = () => {
  return (
    <main>
      <div className="p-4">
        <PageTitle>Employees</PageTitle>
        <div className="">
          <ProfileCard />
        </div>
      </div>
    </main>
  );
};

export default Employees;
