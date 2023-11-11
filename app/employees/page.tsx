import React, { ReactNode } from "react";
import ProfileCard from "./ProfileCard";
import PageTitle from "../components/PageTitle";

import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import prisma from "@/prisma/client";

const Employees = async () => {
  const employees = await prisma.employee.findMany();

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
          {employees.map<ReactNode>((emp) => {
            return (
              <ProfileCard
                key={emp.id}
                name={emp.name}
                designation={emp.designation}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Employees;
