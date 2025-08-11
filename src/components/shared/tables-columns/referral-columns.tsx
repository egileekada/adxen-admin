"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Check, X, LucideTimer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type ReferralData = {
  referralName: string;
  type: string;
  status: string;
  total_topup: string;
  commission: string;
  date_joined: string;
};

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  ACTIVE = "active",
  INACTIVE = "inactive",
  "NO TOP-UPS" = "no top-ups",
}

const statusIcons = {
  [StatusEnum.ACTIVE]: <Check className="size-3.5 text-basic-green-strong" />,
  [StatusEnum.INACTIVE]: <X className="size-3.5 text-basic-red" />,
  [StatusEnum["NO TOP-UPS"]]: <LucideTimer className="size-3.5 text-muted" />,
};

const statusColors = {
  [StatusEnum.ACTIVE]: "bg-badge-green-10",
  [StatusEnum.INACTIVE]: "bg-badge-red-10",
  [StatusEnum["NO TOP-UPS"]]: "bg-white",
};

const statusTextColors = {
  [StatusEnum.ACTIVE]: "text-basic-green-strong",
  [StatusEnum.INACTIVE]: "text-basic-red",
  [StatusEnum["NO TOP-UPS"]]: "text-subtle",
};

export const referralColumns: ColumnDef<ReferralData>[] = [
  {
    accessorKey: "referralName",
    header: "Referral Name",
    cell: ({ row }) => {
      return <p>{row.original.referralName}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
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
    accessorKey: "total_topup",
    header: "Total Topup",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <p>{row.original.total_topup || "--"}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "commission",
    header: "Commission",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <p>{row.original.commission}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted">{row.original.date_joined}</p>
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
