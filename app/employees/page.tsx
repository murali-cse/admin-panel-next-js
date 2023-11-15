"use client";
import { ReactNode, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import PageTitle from "../components/PageTitle";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import ProfileCardSkeleton from "./ProfileCardSkeleton";
import { Employee } from "@prisma/client";
import axios from "axios";
import { Modal, Button } from "flowbite-react";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import { useRouter } from "next/navigation";

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {[1, 2, 3, 4, 5, 6].map((v) => {
        return <ProfileCardSkeleton key={v} />;
      })}
    </div>
  );
}

function NoEmployeesFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <p>No Employees Found</p>
    </div>
  );
}

function EmployeeList({
  list,
  onDelete,
}: {
  list: Employee[];
  onDelete: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {list.map<ReactNode>((emp, index) => {
        return (
          <ProfileCard
            key={emp.id}
            name={emp.name}
            designation={emp.designation}
            status={emp.status}
            onDelete={() => onDelete(index)}
          />
        );
      })}
    </div>
  );
}

const Employees = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [employee, setEmployee] = useState<Employee>();

  async function fetch() {
    setLoading(true);
    const res = await axios.get("/api/employee");
    setLoading(false);
    setEmployees(res.data.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  function handleDelete(id: number) {
    setShowDeleteModal(true);
    setEmployee(employees[id]);
  }

  async function deleteEmployee(id: number) {
    try {
      await axios.post("/api/employee/del", {
        id: id,
      });
      setShowDeleteModal(false);
      fetch();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Employees</PageTitle>
          <Link href={"/employees/addemp"}>
            <Button color="blue">
              <span className="pr-2">
                <AiOutlinePlus
                  className="text-white"
                  style={{ width: "18px", height: "18px" }}
                />
              </span>
              Add
            </Button>
          </Link>
        </div>
        {!loading ? (
          <>
            {employees.length == 0 ? (
              <NoEmployeesFound />
            ) : (
              <EmployeeList list={employees} onDelete={handleDelete} />
            )}
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <ModalHeader>Delete Employee</ModalHeader>
        <ModalBody>
          Are you sure? Do you want to delete {`${employee?.name}`}
        </ModalBody>
        <ModalFooter>
          <Button
            color="failure"
            onClick={() => deleteEmployee(employee?.id ?? 0)}
          >
            Yes, Delete
          </Button>
          <Button
            outline
            color="gray"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </main>
  );
};

export default Employees;
