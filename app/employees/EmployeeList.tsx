import { Employee } from "@prisma/client";
import React, { ReactNode } from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";

const EmployeeList = ({
  list,
  onEdit,
  onDelete,
}: {
  list: Employee[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {list.map<ReactNode>((emp, index) => {
        return (
          <Link key={emp.id} href={`/employees/${emp.id}`}>
            <ProfileCard
              key={emp.id}
              name={emp.name}
              designation={emp.designation}
              status={emp.status}
              onDelete={() => onDelete(index)}
              onEdit={() => onEdit(index)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default EmployeeList;
