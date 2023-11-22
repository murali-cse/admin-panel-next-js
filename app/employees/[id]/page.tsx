"use client";
import PageTitle from "@/app/components/PageTitle";
import { Employee } from "@prisma/client";
import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";

type Params = {
  id: string;
};

const EmployeeDetails = ({ params }: { params: Params }) => {
  const [details, setDetails] = useState<Employee>();

  const getDetails = useCallback(async () => {
    let res = await axios.post("/api/employee/", {
      id: parseInt(params.id),
    });
    setDetails(res.data.data);
  }, [params.id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Details</PageTitle>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <p className="text-sm mb-1">Name</p>
            <p className="font-bold capitalize">{details?.name}</p>
          </div>
          <div>
            <p className="text-sm mb-1">Email</p>
            <p className="font-bold">{details?.email}</p>
          </div>
          <div>
            <p className="text-sm mb-1">Phone</p>
            <p className="font-bold">{details?.contact}</p>
          </div>
          <div>
            <p className="text-sm mb-1">Designation</p>
            <p className="font-bold">{details?.designation}</p>
          </div>
          <div>
            <p className="text-sm mb-1">Date of Birth</p>
            <p className="font-bold">
              {moment(details?.dob).format("DD-MM-YYYY")}
            </p>
          </div>
          <div>
            <p className="text-sm mb-1">Date of Joining</p>
            <p className="font-bold">
              {moment(details?.date_of_joining).format("DD-MM-YYYY")}
            </p>
          </div>
          <div>
            <p className="text-sm mb-1">Address</p>
            <p className="font-bold">{details?.address}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmployeeDetails;
