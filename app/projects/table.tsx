"use client";
import { Project } from "@prisma/client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react/lib/esm/components/Table/Table";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import React, { useEffect, useState } from "react";

const columnHelper = createColumnHelper<Project>();

const columns = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("name", {
    header: "Project Name",
  }),
  columnHelper.accessor("client_name", {
    header: "Client Name",
  }),
  columnHelper.accessor("client_cmpny_name", {
    header: "Client Company Name",
  }),
  columnHelper.accessor("duration", {
    header: "Duration (Months) ",
  }),
  columnHelper.accessor("budget", {
    header: "Budget",
  }),
];

const DataTable = () => {
  const [data, setData] = useState<Project[]>([]);

  async function fetchProjects() {
    const res = await fetch("api/project");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const table = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <>
            <Table.Head key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeadCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y">
              {data &&
                table.getRowModel().rows.map((row) => (
                  <Table.Row
                    key={row.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Table.Cell key={cell.id} className="font-medium">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))}
            </Table.Body>
          </>
        );
      })}
    </Table>
  );
};

export default DataTable;
