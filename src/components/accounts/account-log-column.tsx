"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type TableData = {
  timestamp: string;
  event: string;
  triggerBy: string;
};

const AccountLogColumns: ColumnDef<TableData>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-medium">{row.original.timestamp}</p>
      )
    }
  },
  {
    accessorKey: "event",
    header: "Event",
    cell: ({row} ) => {
      return (
        <p className="text-default text-sm font-normal">{row.original.event}</p>
      )
    }
  },

  {
    accessorKey: "triggerBy",
    header: "Trigger By",
    cell: ({row} ) => {
      return (
        <p className="text-muted text-sm font-normal">{row.original.timestamp}</p>
      )
    }
  },
  
];


export default AccountLogColumns