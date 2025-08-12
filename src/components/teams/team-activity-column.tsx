"use client";

import type { ColumnDef } from "@tanstack/react-table"; 

export type TableData =  { 
  timestamp: string,
  event: string, 
  result: string, 
}
 
const teamActivityColumns: ColumnDef<TableData>[] = [ 
  {
    accessorKey: "timestamp",
    header: "Timestamp"
  }, 
  {
    accessorKey: "event",
    header: "Event", 
  },
  {
    accessorKey: "result",
    header: "Result", 
  }, 
];

export default teamActivityColumns