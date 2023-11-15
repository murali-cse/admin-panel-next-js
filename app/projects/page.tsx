import React from "react";
import PageTitle from "../components/PageTitle";
import { Button } from "flowbite-react";
import AddButton from "./AddButton";

const Projects = () => {
  return (
    <main>
      <div className="p-4 flex justify-between items-center">
        <PageTitle>Projects</PageTitle>
        <AddButton />
      </div>
      <div className=""></div>
    </main>
  );
};

export default Projects;
