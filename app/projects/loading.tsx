import React from "react";
import PageTitle from "../components/PageTitle";

const ProjectsLoading = () => {
  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Projects</PageTitle>
        </div>
        <div className="flex justify-center items-center h-5/6">
          <p>Loading ...</p>
        </div>
      </div>
    </main>
  );
};

export default ProjectsLoading;
