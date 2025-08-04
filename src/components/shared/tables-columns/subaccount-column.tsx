"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Check, RefreshCcw } from "lucide-react";

import { cn } from "@/lib/utils";

export type RequestData = {
  subaccountId: string;
  accountName: string;
  balance: string;
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
  [StatusEnum.PENDING]: "bg-badge-red-10",
};

const statusTextColors = {
  [StatusEnum.APPROVED]: "text-basic-green",
  [StatusEnum.PENDING]: "text-basic-red",
};

export const subaccountColumns: ColumnDef<RequestData>[] = [
  {
    accessorKey: "subaccountId",
    header: "Subaccount ID",
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
  },
  {
    accessorKey: "balance",
    header: "Balance",
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
  },
];
