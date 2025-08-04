import { Button } from "@/components/ui/button";
import { ListFilter, RefreshCcw } from "lucide-react";

const TableFilter = ({
  showRefreshButton = true,
}: {
  showRefreshButton?: boolean;
}) => {
  return (
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
      {showRefreshButton && (
        <Button
          variant="outline"
          size="sm"
          className="bg-soft text-subtle border-none"
        >
          <RefreshCcw className="w-4 h-4 text-muted" />
          Refresh
        </Button>
      )}
    </div>
  );
};

export default TableFilter;
