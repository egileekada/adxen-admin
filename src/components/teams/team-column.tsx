"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"; 
import { 
  MoreHorizontal, 
} from "lucide-react"; 

export type TableData =  {
  id: number,
  accountId: string,
  accountName: string, 
  email: string,
  role: string,
  active: string
}

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

const teamColumns: ColumnDef<TableData>[] = [
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
    accessorKey: "accountname",
    header: "Customer Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className=" w-5 h-5 rounded-full bg-gray-500 " />
          <p>{row.original?.accountName}</p>
        </div>
      );
    },
  }, 
  {
    accessorKey: "email",
    header: "Email"
  }, 
  {
    accessorKey: "role",
    header: "Role", 
  },
  {
    accessorKey: "active",
    header: "Last Active", 
  },
  {
    accessorKey: "action",
    header: () => <div className="" />,
    cell: () => {
      return (
        <div className="flex items-center gap-8 w-full justify-end"> 
        {/* <RefreshCcw /> */}
          <MoreHorizontal className="text-muted" />
        </div>
      );
    },
  },
];

export default teamColumns