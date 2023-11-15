import React from "react";
import PageTitle from "../components/PageTitle";
import AddButton from "./AddButton";

const Projects = () => {
  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Projects</PageTitle>
          <AddButton />
        </div>
        <div className="flex justify-center items-center h-5/6">
          <p>No Projects Found</p>
        </div>
      </div>
    </main>
  );
};

export default Projects;
