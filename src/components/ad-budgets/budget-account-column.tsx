"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  // Check,
  MoreHorizontal,
  // X,
  // AlertTriangle,
  // RefreshCcw,
} from "lucide-react";

export type TableData = {
  id: number;
  accountId: string;
  accountName: string;
  platform: string;
  domain: string;
  balance: number;
  spent: number;
};

// enum for platform
// @ts-expect-error @tanstack/react-table
enum PlatformEnum {
  GOOGLE = "Google",
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
  TIKTOK = "TikTok",
}

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  APPROVED = "approved",
  AT_RISK = "at risk",
  DRAFT = "draft",
  PRE_APPROVED = "pre-approved",
  REVOKED = "revoked",
}

// const statusIcons = {
//   [StatusEnum.APPROVED]: <Check className="size-3.5 text-basic-green" />,
//   [StatusEnum.AT_RISK]: <AlertTriangle className="size-3.5 text-basic-fusia" />,
//   [StatusEnum.DRAFT]: <Check className="size-3.5 text-icon-muted" />,
//   [StatusEnum.PRE_APPROVED]: (
//     <RefreshCcw className="size-3.5 text-basic-orange" />
//   ),
//   [StatusEnum.REVOKED]: <X className="size-3.5 text-basic-red" />,
// };

// const statusColors = {
//   [StatusEnum.APPROVED]: "bg-badge-green-10",
//   [StatusEnum.AT_RISK]: "bg-badge-fusia-10",
//   [StatusEnum.DRAFT]: "bg-badge-yellow-10",
//   [StatusEnum.PRE_APPROVED]: "bg-badge-orange-10",
//   [StatusEnum.REVOKED]: "bg-badge-red-10",
// };

// const statusTextColors = {
//   [StatusEnum.APPROVED]: "text-basic-green",
//   [StatusEnum.AT_RISK]: "text-basic-fusia",
//   [StatusEnum.DRAFT]: "text-subtle",
//   [StatusEnum.PRE_APPROVED]: "text-basic-orange",
//   [StatusEnum.REVOKED]: "text-basic-red",
// };

const platformIcons = {
  [PlatformEnum.GOOGLE]: <FaGoogle />,
  [PlatformEnum.FACEBOOK]: <FaFacebook />,
  [PlatformEnum.INSTAGRAM]: <FaInstagram />,
  [PlatformEnum.TIKTOK]: <FaTiktok />,
};

const BudgetAccountColumn: ColumnDef<TableData>[] = [
  {
    accessorKey: "checkbox",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "accountId",
    header: "Account ID",
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {platformIcons[row.original.platform as PlatformEnum]}
          <p>{row.original.platform}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "domain",
    header: "Domain",
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => {
      return (
        <p>
          {row.original.balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "spent",
    header: "Spent",
    cell: ({ row }) => {
      return (
        <p>
          {row.original.spent.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
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
            Top Up
          </Button>
          <MoreHorizontal className="text-muted" />
        </div>
      );
    },
  },
];


export default BudgetAccountColumn