"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Check,
  MoreHorizontal,
  X,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RiCornerUpRightLine, RiGoogleFill, RiInstagramLine, RiMetaFill, RiSnapchatFill, RiTiktokFill } from "react-icons/ri";
import { BsBing } from "react-icons/bs";
import type { JSX } from "react";

export type TableData = {
  id: number;
  accountId: string;
  accountName: string;
  platform: Platform,
  timezone: string,
  status: string;
  balance: number;
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
  ACTIVE = "active",
  AT_RISK = "at-risk",
  PENDING = "pending",
  SUSPENDED = "suspended",
}

const statusIcons = {
  [StatusEnum.ACTIVE]: <Check className="size-3.5 text-basic-green" />,
  [StatusEnum.AT_RISK]: <AlertTriangle className="size-3.5 text-basic-fusia" />,
  [StatusEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
  [StatusEnum.SUSPENDED]: <X className="size-3.5 text-basic-red" />,
};

const statusColors = {
  [StatusEnum.ACTIVE]: "bg-badge-green-10",
  [StatusEnum.AT_RISK]: "bg-badge-fusia-10",
  [StatusEnum.PENDING]: "bg-badge-orange-10",
  [StatusEnum.SUSPENDED]: "bg-badge-red-10",
};

const statusTextColors = {
  [StatusEnum.ACTIVE]: "text-basic-green",
  [StatusEnum.AT_RISK]: "text-basic-fusia",
  [StatusEnum.PENDING]: "text-basic-orange",
  [StatusEnum.SUSPENDED]: "text-basic-red",
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

const AccessAdAccountColumns: ColumnDef<TableData>[] = [
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
    cell: ({ row }) => {
      return (
        <p className="text-sm font-inter font-medium text-default">
          {row.original.accountName}
        </p>
      );
    },
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {platformIcons[row.original.platform]}
          <p>{row.original.platform}</p>
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
    header: "",
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-center">
          <Button variant="ghost" className="text-blue-500 hover:bg-transparent">Top up</Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="px-1.5 text-sm text-blue-500 hover:bg-transparent"
                variant="ghost"
              >
                <MoreHorizontal className="text-muted" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-45 flex flex-col p-0">
              <Button
                variant="ghost"
                className="w-full inline-flex items-center justify-start gap-2 rounded-none"
              >
                <RiCornerUpRightLine className="size-4" />
                <span className="text-sm font-normal text-default">
                  Go to account
                </span>
              </Button>
              <Button
                variant="ghost"
                className="w-full inline-flex items-center justify-start gap-2 rounded-none"
              >
                <X className="size-4 text-destructive" />
                <span className="text-sm font-normal text-destructive">
                  Remove account
                </span>
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      );
    },
  },
];

export default AccessAdAccountColumns