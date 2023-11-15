"use client";
import React, { useState } from "react";
import PageTitle from "@/app/components/PageTitle";
import BackButton from "@/app/components/BackButton";
import { z } from "zod";
import { createEmployeeSchema } from "@/app/utils/schema";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "@/app/components/Spinner";
import { Button } from "flowbite-react";

const AddEmployee = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  type Employee = z.infer<typeof createEmployeeSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();

  async function onSubmit(data: Employee) {
    setLoading(true);
    const res = await axios.post("/api/employee/add", data);
    console.log(res.data);
    if (res.data.status) {
      router.push("/employees");
    } else {
      setLoading(false);
      setShowError(true);
    }
  }

  return (
    <main>
      <div className="p-4">
        <div className="block lg:flex justify-between items-center">
          <PageTitle>Add Employee</PageTitle>
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
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full"
                  {...register("name", { required: true })}
                />
              </div>
              <sub className="text-red-600">
                {errors.name && "Name is required"}
              </sub>
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
                <sub className="text-red-600">
                  {errors.dob && "Date of Birth is required"}
                </sub>
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
                  className="ring-1 ring-inset ring-gray-300 rounded-md border-0 px-3 py-2 w-full"
                  {...register("contact", { required: true })}
                />
                <sub className="text-red-600">
                  {errors.contact && "Contact No is required"}
                </sub>
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
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full"
                  {...register("email", { required: true })}
                />
                <sub className="text-red-600">
                  {errors.email && "Email is required"}
                </sub>
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
                <sub className="text-red-600">
                  {errors.doj && "Date of Joining is required"}
                </sub>
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
                  className="ring-1 ring-inset ring-gray-300 rounded-md border-0 px-3 py-2 w-full"
                  {...register("designation", { required: true })}
                />
                <sub className="text-red-600">
                  {errors.designation && "Designation is required"}
                </sub>
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
                  className="ring-1 ring-inset ring-gray-300 rounded-md px-3 py-2 w-full"
                  {...register("address", { required: true })}
                />
                <sub className="text-red-600">
                  {errors.address && "Address is required"}
                </sub>
              </div>
            </div>
            {/* address field end */}
          </div>

          <div className="text-center">
            {showError ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                Something Went Wrong
              </div>
            ) : null}
            <Button type="submit"> Add Employee</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddEmployee;
