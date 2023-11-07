import React from "react";
import ProfileCard from "./ProfileCard";
import PageTitle from "../components/PageTitle";

import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const Employees = () => {
  return (
    <main>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <PageTitle>Employees</PageTitle>
          <Link href={"/employees/addemp"}>
            <button className="flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-white text-sm">
              <span>
                <AiOutlinePlus
                  className="text-white"
                  style={{ width: "18px", height: "18px" }}
                />
              </span>
              Add
            </button>
          </Link>
        </div>
        <div className="">
          <ProfileCard />
        </div>
      </div>
    </main>
  );
};

export default Employees;
