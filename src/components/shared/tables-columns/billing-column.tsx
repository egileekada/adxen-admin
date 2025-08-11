import type { ColumnDef } from "@tanstack/react-table";

import { Check, RefreshCcw, Undo2 } from "lucide-react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// @ts-expect-error @tanstack/react-table
enum PaymentEnum {
  PAID = "paid",
  PENDING = "pending",
  REFUNDED = "refunded",
}

const paymentStatusIcons = {
  [PaymentEnum.PAID]: <Check className="size-3.5 text-basic-green" />,
  [PaymentEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
  [PaymentEnum.REFUNDED]: <Undo2 className="size-3.5 text-subtle" />,
};

const paymentStatusColors = {
  [PaymentEnum.PAID]: "bg-badge-green-10",
  [PaymentEnum.PENDING]: "bg-badge-orange-10",
  [PaymentEnum.REFUNDED]: "bg-badge-yellow-10",
};

const paymentStatusTextColors = {
  [PaymentEnum.PAID]: "text-basic-green",
  [PaymentEnum.PENDING]: "text-basic-orange",
  [PaymentEnum.REFUNDED]: "text-subtle",
};

export type PaymentMethod = {
  accountNumber: string;
  cardType: string;
};

export type TableData = {
  description: string;
  amount: string;
  paymentStatus: string;
  paymentMethod: PaymentMethod;
  date: string;
  refundedDate: string;
};

export const billingColumns: ColumnDef<TableData>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <div
            className={cn(
              "bg-badge-green-10 rounded-sm px-1.5 border flex gap-1 items-center",
              paymentStatusColors[row.original.paymentStatus as PaymentEnum]
            )}
          >
            {paymentStatusIcons[row.original.paymentStatus as PaymentEnum]}
            <p
              className={cn(
                "text-sm capitalize",
                paymentStatusTextColors[
                  row.original.paymentStatus as PaymentEnum
                ]
              )}
            >
              {row.original.paymentStatus}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <p>{row.original.paymentMethod.cardType}</p>
          <div className="flex items-center gap-1">
            <p>
              <span className="text-default">•</span>
              <span className="text-default">•</span>
              <span className="text-default">•</span>
              <span className="text-default">•</span>
            </p>
            <p>{row.original.paymentMethod.accountNumber.slice(-4)}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return <p>{row.original.date}</p>;
    },
  },
  {
    accessorKey: "refundedDate",
    header: "Refunded Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <p className="text-sm ">{row.original.refundedDate || "---"}</p>
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
            <MdOutlineCloudDownload className="text-muted" />
          </Button>
        </div>
      );
    },
  },
];
