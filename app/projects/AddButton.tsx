"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const AddButton = () => {
  return (
    <Link href={"./projects/add"}>
      <Button color="blue">Add Project</Button>
    </Link>
  );
};

export default AddButton;
