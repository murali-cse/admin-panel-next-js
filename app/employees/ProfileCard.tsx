import React from "react";
import Image from "next/image";
import OutlinedButton from "../components/OutlinedButton";

interface Props {
  name: string;
  designation: string;
}

const ProfileCard = ({ name, designation }: Props) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-10">
        <Image
          className="w-24 h-24 mb-3 object-cover rounded-full shadow-lg"
          src="/images/profile.png"
          alt="Bonnie image"
          width={200}
          height={250}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white capitalize">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {designation}
        </span>
        <div className="flex gap-3 mt-3">
          <OutlinedButton className="text-blue-400 border-blue-400 text-sm">
            Edit
          </OutlinedButton>
          <OutlinedButton className="text-green-400 border-green-400 text-sm">
            Active
          </OutlinedButton>
          <button className="bg-red-600 py-2 px-6 text-white rounded-md text-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
