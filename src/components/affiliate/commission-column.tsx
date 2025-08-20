"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Check, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type CommissionData = {
  date: string;
  type: string;
  referralName: string;
  commission: string;
  status: string;
  payout: string;
  payoutDate: string;
};

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  PENDING = "pending",
  EARNED = "earned",
  PAID = "paid",
}

const statusIcons = {
  [StatusEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
  [StatusEnum.EARNED]: <Check className="size-3.5 text-basic-green-strong" />,
  [StatusEnum.PAID]: <Check className="size-3.5 text-basic-green-strong" />,
};

const statusColors = {
  [StatusEnum.PENDING]: "bg-badge-orange-10",
  [StatusEnum.EARNED]: "bg-badge-green-10",
  [StatusEnum.PAID]: "bg-badge-green-10",
};

const statusTextColors = {
  [StatusEnum.PENDING]: "text-basic-orange",
  [StatusEnum.EARNED]: "text-basic-green-strong",
  [StatusEnum.PAID]: "text-basic-green-strong",
};

const AffiliateCommissionColumns: ColumnDef<CommissionData>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <p>{row.original.date}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "referralName",
    header: "Referral Name",
    cell: ({ row }) => {
      return <p>{row.original.referralName}</p>;
    },
  },
  {
    accessorKey: "commission",
    header: "Commission",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <p>{row.original.commission || "--"}</p>
        </div>
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
    accessorKey: "payout",
    header: "Payout",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <div
            className={cn(
              "bg-badge-green-10 rounded-sm px-1.5 border flex gap-1 items-center",
              statusColors[row.original.payout as StatusEnum]
            )}
          >
            {statusIcons[row.original.payout as StatusEnum]}
            <p
              className={cn(
                "text-sm capitalize",
                statusTextColors[row.original.payout as StatusEnum]
              )}
            >
              {row.original.payout}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "payout-date",
    header: "Payout Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <p>{row.original.payoutDate}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="" />,
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-end">
          <Button
            className="px-1.5 text-sm text-blue-500 hover:bg-transparent"
            variant="ghost"
          >
            <MoreHorizontal className="text-muted" />
          </Button>
        </div>
      );
    },
  },
];


export default AffiliateCommissionColumns