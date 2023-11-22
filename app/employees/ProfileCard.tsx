import React from "react";
import Image from "next/image";
import OutlinedButton from "../components/OutlinedButton";
import { Status } from "@prisma/client";
import classNames from "classnames";
import { Badge, Button } from "flowbite-react";

interface Props {
  name: string;
  designation: string;
  status: Status;
  onEdit?: () => void;
  onDelete?: () => void;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  ACTIVE: { label: "Active", color: "green" },
  INACTIVE: { label: "Inactive", color: "red" },
  WFH: { label: "WFH", color: "indigo" },
  LEAVE: { label: "Leave", color: "red" },
  DELETED: { label: "Deleted", color: "red" },
};

const ProfileCard = ({
  name,
  status,
  designation,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end m-2">
        <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
      </div>
      <div className="flex flex-col items-center p-10">
        <Image
          className="w-24 h-24 mb-3 object-cover rounded-full shadow-lg"
          src="/images/profile.png"
          alt="Bonnie image"
          width={200}
          height={250}
        />
        <h5 className="mb-1 text-lg lg:text-xl font-medium text-gray-900 dark:text-white capitalize">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {designation}
        </span>
        <div className="flex gap-3 mt-3 flex-wrap justify-center ">
          <OutlinedButton
            className="text-zinc-600 border-zinc-100 dark:border-zinc-200 dark:text-zinc-200"
            onClick={onEdit}
          >
            Edit
          </OutlinedButton>
          <Button color="failure" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
