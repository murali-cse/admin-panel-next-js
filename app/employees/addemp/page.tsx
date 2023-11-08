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
        <div className="grid grid-cols-3 gap-3 mt-3">
          {/* name field start */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name=""
                id="name"
                placeholder="Name"
                className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          {/* name field end */}
          {/* contact field start */}
          <div>
            <label htmlFor="dob" className="text-sm font-medium">
              Date of Birth
            </label>
            <div className="mt-1">
              <input
                type="date"
                name=""
                id="name"
                className="ring-1 ring-inset ring-gray-300  dark:text-gray-500 rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          {/* contact field end */}
          {/* contact field start */}
          <div>
            <label htmlFor="contact" className="text-sm font-medium">
              Contact No
            </label>
            <div className="mt-1">
              <input
                type="number"
                name=""
                id="contact"
                placeholder="Contact no"
                className="ring-1 ring-inset ring-gray-300 rounded-md border-0 px-3 py-2 w-full"
              />
            </div>
          </div>
          {/* contact field end */}
        </div>
      </div>
    </main>
  );
};

export default AddEmployee;
