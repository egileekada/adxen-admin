"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Check, RefreshCcw } from "lucide-react";

import { cn } from "@/lib/utils";

export type RequestData = {
  subaccountId: string;
  accountName: string;
  initBalance: string;
  status: string;
  createdOn: string;
};

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  APPROVED = "approved",
  PENDING = "pending",
}

const statusIcons = {
  [StatusEnum.APPROVED]: <Check className="size-3.5 text-basic-green" />,
  [StatusEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
};

const statusColors = {
  [StatusEnum.APPROVED]: "bg-badge-green-10",
  [StatusEnum.PENDING]: "bg-badge-orange-10",
};

const statusTextColors = {
  [StatusEnum.APPROVED]: "text-basic-green",
  [StatusEnum.PENDING]: "text-basic-orange",
};

const AccountSubaccountColumns: ColumnDef<RequestData>[] = [
  {
    accessorKey: "subaccountId",
    header: "Subaccount ID",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-normal">{row.original.subaccountId}</p>
      )
    }
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-normal">{row.original.accountName}</p>
      )
    }
  },
  {
    accessorKey: "initial-balance",
    header: "Initial Balance",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-medium">{row.original.initBalance}</p>
      )
    }
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
                "text-sm capitalize",
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
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-normal">{row.original.createdOn}</p>
      )
    }
  },
];


export default AccountSubaccountColumns