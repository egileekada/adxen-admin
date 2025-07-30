import type { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Check, MoreHorizontal, X, RefreshCcw, Undo2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type PaymentData = {
  description: string;
  amount: number;
  payment: string;
  method: string;
  fee: number;
  date: string;
};

// @ts-expect-error @tanstack/react-table
enum PaymentEnum {
  SUCCESS = "Success",
  PENDING = "Pending",
  FAILED = "Failed",
  REFUNDED = "Refunded",
}

const paymentIcons = {
  [PaymentEnum.SUCCESS]: <Check className="size-3.5 text-basic-green" />,
  [PaymentEnum.PENDING]: <RefreshCcw className="size-3.5 text-basic-orange" />,
  [PaymentEnum.FAILED]: <X className="size-3.5 text-basic-red" />,
  [PaymentEnum.REFUNDED]: <Undo2 className="size-3.5 text-muted" />,
};

const paymentColors = {
  [PaymentEnum.SUCCESS]: "bg-badge-green-10",
  [PaymentEnum.PENDING]: "bg-badge-orange-10",
  [PaymentEnum.FAILED]: "bg-badge-red-10",
  [PaymentEnum.REFUNDED]: "bg-badge-red-10",
};

const paymentTextColors = {
  [PaymentEnum.SUCCESS]: "text-basic-green",
  [PaymentEnum.PENDING]: "text-basic-orange",
  [PaymentEnum.FAILED]: "text-basic-red",
  [PaymentEnum.REFUNDED]: "text-default",
};

export const transactionColumns: ColumnDef<PaymentData>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <p>
          {row.original.amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "payments",
    header: "Payments",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <div
            className={cn(
              "bg-badge-green-10 rounded-sm px-1.5 border flex gap-1 items-center",
              paymentColors[row.original.payment as PaymentEnum]
            )}
          >
            {paymentIcons[row.original.payment as PaymentEnum]}
            <p
              className={cn(
                "text-sm capitalize",
                paymentTextColors[row.original.payment as PaymentEnum]
              )}
            >
              {row.original.payment}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "fee",
    header: "Fee",
    cell: ({ row }) => {
      return (
        <p>
          {row.original.fee.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
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
    accessorKey: "action",
    header: () => <div className="" />,
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-end">
          <Button
            className="px-1.5 text-sm text-blue-500 hover:bg-transparent"
            variant="ghost"
          ></Button>
          <MoreHorizontal className="text-muted" />
        </div>
      );
    },
  },
];
