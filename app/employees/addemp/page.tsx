import React from "react";
import PageTitle from "@/app/components/PageTitle";
import BackButton from "@/app/components/BackButton";

const AddEmployee = () => {
  return (
    <main>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <PageTitle>Add Employee</PageTitle>
          <BackButton />
        </div>
      </div>
    </main>
  );
};

export default AddEmployee;
