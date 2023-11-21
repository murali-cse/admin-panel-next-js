"use client";
import BackButton from "@/app/components/BackButton";
import PageTitle from "@/app/components/PageTitle";
import { createEmployeeSchema } from "@/app/utils/schema";
import axios from "axios";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Params = {
  id: string;
};

const Page = ({ params }: { params: Params }) => {
  const router = useRouter();
  type Employee = z.infer<typeof createEmployeeSchema>;

  const [employee, setEmployee] = useState<Employee>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Employee>();

  const fetchEmployee = useCallback(async () => {
    try {
      let res = await axios.post("/api/employee", {
        id: parseInt(params.id),
      });
      setEmployee(res.data.data);
      let temp = { ...res.data.data, doj: res.data.data.date_of_joining };
      delete temp.createdAt;
      delete temp.updatedAt;
      delete temp.status;
      delete temp.date_of_joining;
      reset(temp);
    } catch (e: any) {
      console.log(e);
    }
  }, [params, reset]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  async function onSubmit(data: any) {
    let res = await axios.post("/api/employee/edit", data);
    if (res.data.status) {
      router.push("/employees");
    }
  }

  return (
    <main>
      <div className="p-4 h-screen">
        <div className="block lg:flex justify-between items-center">
          <PageTitle>Edit Employee</PageTitle>
          <BackButton />
        </div>
        <form
          className="bg-white dark:bg-[#1F2A37] p-5 rounded-md space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* name field start */}
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full text-black"
                  {...register("name", { required: true })}
                />
              </div>
              <sub className="text-red-600"></sub>
            </div>
            {/* name field end */}
            {/* dob field start */}
            <div>
              <label htmlFor="dob" className="text-sm font-medium">
                Date of Birth<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  id="dob"
                  className="ring-1 ring-inset ring-gray-300  dark:text-gray-500 rounded-md px-3 py-2 w-full"
                  {...register("dob", { required: true })}
                />
                <sub className="text-red-600"></sub>
              </div>
            </div>
            {/* dob field end */}
            {/* contact field start */}
            <div>
              <label htmlFor="contact" className="text-sm font-medium">
                Contact No<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="contact"
                  placeholder="Contact no"
                  className="ring-1 ring-inset ring-gray-300 rounded-md border-0 px-3 py-2 w-full text-black"
                  {...register("contact", { required: true })}
                />
              </div>
            </div>
            {/* contact field end */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* email field start */}
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full text-black"
                  {...register("email", { required: true })}
                />
                <sub className="text-red-600"></sub>
              </div>
            </div>
            {/* email field end */}
            {/* doj field start */}
            <div>
              <label htmlFor="doj" className="text-sm font-medium">
                Date of Join<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  id="doj"
                  className="ring-1 ring-inset ring-gray-300  dark:text-gray-500 rounded-md px-3 py-2 w-full"
                  {...register("doj", { required: true })}
                />
                <sub className="text-red-600"></sub>
              </div>
            </div>
            {/* doj field end */}
            {/* designation field start */}
            <div>
              <label htmlFor="designation" className="text-sm font-medium">
                Designation<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="designation"
                  placeholder="Designation"
                  className="ring-1 ring-inset ring-gray-300 rounded-md border-0 px-3 py-2 w-full text-black"
                  {...register("designation", { required: true })}
                />
                <sub className="text-red-600"></sub>
              </div>
            </div>
            {/* designation field end */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* address field start */}
            <div>
              <label htmlFor="address" className="text-sm font-medium">
                Address<span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  placeholder="Address"
                  rows={5}
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full text-black"
                  {...register("address", { required: true })}
                />
                <sub className="text-red-600"></sub>
              </div>
            </div>
            {/* address field end */}
          </div>
          <div className="flex justify-center">
            <Button type="submit" color="success">
              Edit Employee
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
