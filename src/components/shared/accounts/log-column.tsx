"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type TableData = {
  timestamp: string;
  event: string;
  triggerBy: string;
};

export const logColumns: ColumnDef<TableData>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "event",
    header: "Event",
  },

  {
    accessorKey: "triggerBy",
    header: "Trigger By",
  },
];
