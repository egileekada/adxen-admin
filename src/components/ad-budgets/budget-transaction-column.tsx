"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Check, RefreshCcw, Settings, Trash, Undo2 } from "lucide-react";
import { RiSendPlaneLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type BudgetTransactionProps = {
  accountId: string;
  accountName: string;
  amount: string;
  type: string;
  status: string;
  date: string;
  action: null
};


// @ts-expect-error @tanstack/react-table
enum StatusEnum {
  COMPLETED= "completed",
  PENDING = "pending",
  REFUNDED = "refunded",
}

const statusIcons = {
  [StatusEnum.COMPLETED]: (
    <Check className="size-3.5 text-basic-green"/>
  ),
  [StatusEnum.PENDING]: (
    <RefreshCcw className="size-3.5 text-basic-orange" />
  ),
  [StatusEnum.REFUNDED]: <Undo2 className="size-3.5 text-muted" />,
};

const statusColors = {
  [StatusEnum.COMPLETED]: "bg-badge-green-10",
  [StatusEnum.PENDING]: "bg-badge-orange-10",
  [StatusEnum.REFUNDED]: "bg-white",
};

const statusTextColors = {
  [StatusEnum.COMPLETED]: "text-basic-green",
  [StatusEnum.PENDING]: "text-basic-orange",
  [StatusEnum.REFUNDED]: "text-subtle",
};


const BudgetTransactionColumns: ColumnDef<BudgetTransactionProps>[] = [
  {
    accessorKey: "accountId",
    header: "Account ID"
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
    cell: ({row}) => {
      return (
        <p className="text-default text-sm font-medium">{row.original.accountName}</p>
      )
    }
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({row}) => {
      return (
        <p className="text-default text-sm font-medium">{`$${row.original.amount}`}</p>
      )
    }
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({row}) => {
      return (
        <p className="text-default text-sm font-medium">{row.original.type}</p>
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
    accessorKey: "date",
    header: "Date"
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


export default BudgetTransactionColumns