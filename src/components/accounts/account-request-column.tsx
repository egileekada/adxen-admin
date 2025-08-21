"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { RiGoogleFill, RiInstagramLine, RiMetaFill, RiTiktokFill, RiSnapchatFill } from "react-icons/ri";
import { Settings, Trash, X } from "lucide-react";
import { RiSendPlaneLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { JSX } from "react";
import { BsBing } from "react-icons/bs";

export type RequestData = {
  date: string;
  requestId: string;
  accountName: string;
  platform: Platform;
  timezone: string;
  status: string;
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
  PENDING = "pending",
  REJECTED = "rejected",
}

const statusIcons = {
  [StatusEnum.PENDING]: (
    <AlertTriangle className="size-3.5 text-basic-orange" />
  ),
  [StatusEnum.REJECTED]: <X className="size-3.5 text-basic-red" />,
};

const statusColors = {
  [StatusEnum.PENDING]: "bg-badge-orange-10",
  [StatusEnum.REJECTED]: "bg-badge-red-10",
};

const statusTextColors = {
  [StatusEnum.PENDING]: "text-basic-orange",
  [StatusEnum.REJECTED]: "text-basic-red",
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

const AccountRequestColumns: ColumnDef<RequestData>[] = [
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
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "requestId",
    header: "Request ID",
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
    accessorKey: "action",
    header: () => <div className="" />,
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="px-1.5 text-sm text-blue-500 hover:bg-transparent"
                variant="ghost"
              >
                <MoreHorizontal className="text-muted" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-50 p-0">
              <div className="p-1.5">
                <Button className="w-full flex items-center justify-start gap-2 bg-transparent hover:bg-soft hover:rounded-sm text-default shadow-none rounded-none">
                  <Settings className="size-4" />
                  <span className="text-sm font-normal">
                    Edit Configuration
                  </span>
                </Button>
                <Button className="w-full flex items-center justify-start gap-2 bg-transparent hover:bg-soft hover:rounded-sm text-default shadow-none rounded-none">
                  <RiSendPlaneLine className="size-4" />
                  <span className="text-sm font-normal">Resubmit</span>
                </Button>
                <Button className="w-full flex items-center justify-start gap-2 bg-transparent hover:bg-soft hover:rounded-sm text-default shadow-none rounded-none">
                  <Trash className="size-4 text-basic-red" />
                  <span className="text-sm text-basic-red font-normal">
                    Delete
                  </span>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      );
    },
  },
];


export default AccountRequestColumns