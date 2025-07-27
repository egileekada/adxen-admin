import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Table } from "@tanstack/react-table";

interface PaginationProps<TData> {
  table: Table<TData>;
}

const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="text-muted-foreground flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} results.
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
  );
};

export default Pagination;
