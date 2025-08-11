"use client";

import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { Check, RefreshCcw, X } from "lucide-react";

export type TableData = {
  id: number | string;
  datehour: string;
  adaccountid: string;
  adaccountname: string;
  status: string;
  note: string;
};

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  PASSED = "passed",
  FAILED = "failed",
  PENDING = "pending",
}

const statusIcons = {
  [StatusEnum.PASSED]: <Check className="size-3.5 text-basic-green" />,
  [StatusEnum.FAILED]: <X className="size-3.5 text-basic-red" />,
  [StatusEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
};

const statusColors = {
  [StatusEnum.PASSED]: "bg-badge-green-10",
  [StatusEnum.FAILED]: "bg-badge-red-10",
  [StatusEnum.PENDING]: "bg-badge-orange-10",
};

const statusTextColors = {
  [StatusEnum.PASSED]: "text-basic-green",
  [StatusEnum.FAILED]: "text-basic-red",
  [StatusEnum.PENDING]: "text-basic-orange",
};

export const accessLogColumns: ColumnDef<TableData>[] = [
  {
    accessorKey: "datehour",
    header: "Date & Hour",
    cell: ({ row }) => {
      return (
        <p className="text-sm font-inter font-normal ">
          {row.original.datehour}
        </p>
      );
    },
  },
  {
    accessorKey: "adaccountid",
    header: "Account ID",
    cell: ({ row }) => {
      return (
        <p className="text-sm font-inter font-normal text-default">
          {row.original.adaccountid}
        </p>
      );
    },
  },
  {
    accessorKey: "adaccountname",
    header: "Account Name",
    cell: ({ row }) => {
      return (
        <p className="text-sm font-inter font-normal text-default">
          {row.original.adaccountname}
        </p>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <div
            className={cn(
              "bg-badge-green-10 rounded-sm px-1.5 border flex gap-1 items-center",
              statusColors[row.original.status as StatusEnum]
            )}
          >
            {statusIcons[row.original.status as StatusEnum]}
            <p
              className={cn(
                "text-sm capitalize font-inter font-normal",
                statusTextColors[row.original.status as StatusEnum]
              )}
            >
              {row.original.status}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "note",
    header: "Note",
    cell: ({ row }) => {
      return (
        <p className="text-sm font-inter font-normal text-muted">
          {row.original.note}
        </p>
      );
    },
  },
];
