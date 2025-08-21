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
import { useState } from "react";
import Pagination from "../shared/pagination";
import { useLocation } from "react-router-dom";
import TableFilter from "../shared/table-filter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showPagination?: boolean;
}

function BudgetTable<TData, TValue>({
  columns,
  data,
  showPagination = false,
}: DataTableProps<TData, TValue>) {
  const location = useLocation();
  const isBudget = location.pathname.includes("budget");

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
      {!isBudget && (
        <TableFilter
          options={["Account ID", "Platform", "Date"]}
          showRefreshButton={false}
        />
      )}
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
            {showPagination && <Pagination table={table} />}
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


export default BudgetTable