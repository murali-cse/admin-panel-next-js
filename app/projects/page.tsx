import dynamic from "next/dynamic";
import PageTitle from "../components/PageTitle";
import AddButton from "./AddButton";
const DataTable = dynamic(() => import("./table"), { ssr: false });

const Page = () => {
  return (
    <main>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center">
          <PageTitle>Projects</PageTitle>
          <AddButton />
        </div>
        <div>
          <DataTable />
        </div>
        {/* <div className="flex justify-center items-center h-5/6">
          <p>No Projects Found</p>
        </div> */}
      </div>
    </main>
  );
};

export default Page;
