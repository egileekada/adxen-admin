"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Check,
  MoreHorizontal,
  X,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BsBing } from "react-icons/bs";
import type { JSX } from "react";
import { RiGoogleFill, RiInstagramLine, RiMetaFill, RiTiktokFill, RiSnapchatFill } from "react-icons/ri";

export type TableData = {
  id: number;
  accountId: string;
  accountName: string;
  platform: Platform;
  timezone: string;
  status: string;
  balance: number;
};

// enum for platform
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

const statusIcons = {
  [StatusEnum.APPROVED]: <Check className="size-3.5 text-basic-green" />,
  [StatusEnum.AT_RISK]: <AlertTriangle className="size-3.5 text-basic-fusia" />,
  [StatusEnum.DRAFT]: <Check className="size-3.5 text-icon-muted" />,
  [StatusEnum.PRE_APPROVED]: (
    <RefreshCcw className="size-3.5 text-basic-orange" />
  ),
  [StatusEnum.REVOKED]: <X className="size-3.5 text-basic-red" />,
};

const statusColors = {
  [StatusEnum.APPROVED]: "bg-badge-green-10",
  [StatusEnum.AT_RISK]: "bg-badge-fusia-10",
  [StatusEnum.DRAFT]: "bg-badge-yellow-10",
  [StatusEnum.PRE_APPROVED]: "bg-badge-orange-10",
  [StatusEnum.REVOKED]: "bg-badge-red-10",
};

const statusTextColors = {
  [StatusEnum.APPROVED]: "text-basic-green",
  [StatusEnum.AT_RISK]: "text-basic-fusia",
  [StatusEnum.DRAFT]: "text-subtle",
  [StatusEnum.PRE_APPROVED]: "text-basic-orange",
  [StatusEnum.REVOKED]: "text-basic-red",
};

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

const AccountColumn: ColumnDef<TableData>[] = [
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
    accessorKey: "timezone",
    header: "Timezone",
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
    accessorKey: "action",
    header: () => <div className="" />,
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-end">
          <Button variant={"ghost"} className="text-blue-500 hover:bg-transparent">Top Up</Button>
          <Button
            className="px-1.5 text-sm text-blue-500 hover:bg-transparent"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation()
              console.log("more button clicked")
            }}
          >
          <MoreHorizontal className="text-muted" />
          </Button>
        </div>
      );
    },
  },
];


export default AccountColumn