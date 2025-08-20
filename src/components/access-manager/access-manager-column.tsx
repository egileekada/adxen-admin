"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import {
  RiMetaFill,
  RiGoogleFill,
  RiInstagramLine,
  RiTiktokFill,
  RiSnapchatFill,
} from "@remixicon/react";
import { Check, RefreshCcw, MoreHorizontal, X, TriangleAlert } from "lucide-react";
import { BsBing } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// @ts-expect-error @tanstack/react-table
enum PlatformEnum {
  GOOGLE = "Google",
  INSTAGRAM = "Instagram",
  TIKTOK = "TikTok",
  SNAPCHAT = "Snapchat",
  META = "Meta",
  BING = "Bing",
}

// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  PENDING = "pending",
  ACTIVE = "active",
  UNUSED = "unused",
  REJECTED = "rejected",
}

const businessStatusIcons = {
  [StatusEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
  [StatusEnum.ACTIVE]: <Check className="size-3.5 text-basic-green" />,
  [StatusEnum.UNUSED]: <X className="size-3.5 text-icon-muted" />,
  [StatusEnum.REJECTED]: <TriangleAlert className="size-3.5 text-basic-orange" />,
};

const businessStatusColors = {
  [StatusEnum.PENDING]: "bg-badge-orange-10",
  [StatusEnum.ACTIVE]: "bg-badge-green-10",
  [StatusEnum.UNUSED]: "bg-badge-yellow-10",
  [StatusEnum.REJECTED]: "bg-badge-orange-10",
};

const businessStatusTextColors = {
  [StatusEnum.PENDING]: "text-basic-orange",
  [StatusEnum.ACTIVE]: "text-basic-green",
  [StatusEnum.UNUSED]: "text-subtle",
  [StatusEnum.REJECTED]: "text-basic-orange",
};

const businessPlatformIcons = {
  [PlatformEnum.GOOGLE]: <RiGoogleFill className="size-4" />,
  [PlatformEnum.INSTAGRAM]: <RiInstagramLine className="size-4" />,
  [PlatformEnum.TIKTOK]: <RiTiktokFill className="size-4" />,
  [PlatformEnum.SNAPCHAT]: (
    <RiSnapchatFill className="size-4 fill-yellow-300" />
  ),
  [PlatformEnum.META]: <RiMetaFill className="size-4 bg-blue-500" />,
  [PlatformEnum.BING]: <BsBing className="size-4" />,
};

export type TableData = {
  accessId: string;
  managerName: string;
  platform: string;
  status: string;
  date: string;
  adAccount: number;
};

const AccessManagerColumn: ColumnDef<TableData>[] = [
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
    accessorKey: "accessId",
    header: "Access ID",
    cell: ({row}) => {
      return (
        <p className="w-[200px] text-default text-sm font-normal">{row.original.accessId}</p>
      )
    }
  },
  {
    accessorKey: "managerName",
    header: "Manager Name",
    cell: ({row}) => {
      return (
        <p className="w-[200px] text-default text-sm font-normal">{row.original.managerName}</p>
      )
    }
  },

  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2 w-[160px]">
          {businessPlatformIcons[row.original.platform as PlatformEnum]}
          <p>{row.original.platform}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center w-[125px]">
          <div
            className={cn(
              "bg-badge-green-10 rounded-sm px-1.5 border flex gap-1 items-center",
              businessStatusColors[row.original.status as StatusEnum]
            )}
          >
            {businessStatusIcons[row.original.status as StatusEnum]}
            <p
              className={cn(
                "text-xs font-medium p-0.5 capitalize",
                businessStatusTextColors[row.original.status as StatusEnum]
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
    accessorKey: "date",
    header: "Date",
    cell: ({row}) => {
      return (
        <p className="w-[200px]">{row.original.date}</p>
      )
    }
  },
  {
    accessorKey: "adAccount",
    header: "Ad Account",
    cell: ({ row }) => {
      return (
        <div className="flex items-center w-[100px]">
          <p className="text-sm ">{row.original.adAccount}</p>
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


export default AccessManagerColumn