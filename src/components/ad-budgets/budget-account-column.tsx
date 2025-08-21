"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
} from "lucide-react";
import { RiGoogleFill, RiInstagramLine, RiMetaFill, RiTiktokFill, RiSnapchatFill } from "react-icons/ri";
import type { JSX } from "react";
import { BsBing } from "react-icons/bs";

export type BudgetTableData = {
  id: number;
  accountId: string;
  accountName: string;
  platform: Platform;
  domain: string;
  balance: number;
  spent: number;
};

const Platform = {
  GOOGLE: "google",
  INSTAGRAM: "instagram",
  TIKTOK: "tikTok",
  SNAPCHAT: "snapchat",
  META: "meta",
  BING: "bing",
} as const;

type Platform = typeof Platform[keyof typeof Platform];

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  APPROVED = "approved",
  AT_RISK = "at risk",
  DRAFT = "draft",
  PRE_APPROVED = "pre-approved",
  REVOKED = "revoked",
}

const platformIcons: Record<Platform, JSX.Element> = {
  [Platform.GOOGLE]: <RiGoogleFill className="size-4" />,
  [Platform.INSTAGRAM]: <RiInstagramLine className="size-4" />,
  [Platform.TIKTOK]: <RiTiktokFill className="size-4" />,
  [Platform.SNAPCHAT]: (
    <RiSnapchatFill className="size-4" />
  ),
  [Platform.META]: <RiMetaFill className="size-4" />,
  [Platform.BING]: <BsBing className="size-4" />,
};
const BudgetAccountColumn: ColumnDef<BudgetTableData>[] = [
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
          {platformIcons[row.original.platform]}
          <p className="capitalize">{row.original.platform}</p>
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