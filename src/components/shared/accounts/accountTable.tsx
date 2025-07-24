"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ListFilter, RefreshCcw } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-wrap md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between mb-4">
        <div className="flex items-center flex-wrap gap-1">
          <Button
            variant="ghost"
            className="bg-white border border-dashed border-border-darker rounded-full text-muted py-1 px-2"
          >
            <ListFilter className="w-4 h-4" />
            Account ID
          </Button>
          <Button
            variant="ghost"
            className="bg-white border border-dashed border-border-darker rounded-full text-muted"
          >
            <ListFilter className="w-4 h-4" />
            Platform
          </Button>
          <Button
            variant="ghost"
            className="bg-white border border-dashed border-border-darker rounded-full text-muted"
          >
            <ListFilter className="w-4 h-4" />
            Date
          </Button>
          <Button
            variant="ghost"
            className="bg-white border border-dashed border-border-darker rounded-full text-muted"
          >
            <ListFilter className="w-4 h-4" />
            Status
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-soft text-subtle border-none"
        >
          <RefreshCcw className="w-4 h-4 text-muted" />
          Refresh
        </Button>
      </div>
      {data.length > 0 ? (
        <>
          <div>
            <Table className="border-y">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="hover:bg-transparent"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          className="text-muted text-sm"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getPaginationRowModel().rows?.length ? (
                  table.getPaginationRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="text-default text-sm"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={columns.length}></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-muted-foreground flex-1 text-sm">
              {table.getFilteredRowModel().rows.length} of {table.getRowCount()}{" "}
              results.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className={cn(
                  "text-subtle bg-soft flex-1 text-sm rounded-sm py-1.5 px-2.5",
                  !table.getCanPreviousPage() && "bg-disabled text-hint"
                )}
              >
                Prev
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "rounded-sm text-subtle bg-soft py-1.5 px-2.5",
                  !table.getCanNextPage() && "bg-disabled text-hint"
                )}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-subtle text-sm flex text-center flex-col items-center justify-center py-16 gap-6 border-t">
          <div>
            <p className="text-subtle text-sm max-w-[400px] md:inline-flex text-center flex-wrap items-center justify-center">
              You haven't created or requested any ad accounts yet.
              <span>
                Start by requesting an ad account on your preferred platform.
              </span>
            </p>
          </div>
          <Button className="py-1.5 px-2.5 text-sm cursor-pointer">
            Request an Ad Account
          </Button>
        </div>
      )}
    </div>
  );
}
