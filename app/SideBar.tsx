"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsGrid, BsPeople, BsFiles, BsDisplay } from "react-icons/bs";

type SidebarProps = {
  title: string;
  icon?: React.ReactElement;
  path: string;
};

const SideBar = () => {
  const pathname = usePathname();

  const sidebar: SidebarProps[] = [
    {
      title: "Dashboard",
      path: "/",
      icon: <BsGrid />,
    },
    {
      title: "Employees",
      path: "/employees",
      icon: <BsPeople />,
    },
    {
      title: "Projects",
      path: "/projects",
      icon: <BsDisplay />,
    },
    {
      title: "Leaves",
      path: "/leave",
      icon: <BsFiles />,
    },
  ];

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 ">
            {sidebar.map((val) => {
              let isSelected: boolean = false;
              if (val.path !== "/") {
                isSelected = pathname.includes(val.path);
              } else {
                isSelected = pathname == "/";
              }

              return (
                <li key={val.path}>
                  <Link
                    href={val.path}
                    className={`flex items-center p-2 ${
                      isSelected ? "bg-blue-800 text-gray-50" : "text-gray-900"
                    }  rounded-lg dark:text-white`}
                  >
                    {val.icon}
                    <span className="ml-3">{val.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
