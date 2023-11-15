import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import PageTitle from "../components/PageTitle";
import ProfileCardSkeleton from "./ProfileCardSkeleton";

const LoadingEmployees = () => {
  return (
    <main>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <PageTitle>Employees</PageTitle>
          <Link href={"/employees/addemp"}>
            <button className="flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-white text-sm">
              <span>
                <AiOutlinePlus
                  className="text-white"
                  style={{ width: "18px", height: "18px" }}
                />
              </span>
              Add
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
          {[1, 2, 3, 4, 5, 6].map((v) => {
            return <ProfileCardSkeleton key={v} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default LoadingEmployees;
