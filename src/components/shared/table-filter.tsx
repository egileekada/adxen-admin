import { Button } from "@/components/ui/button";
import { ListFilter, RefreshCcw } from "lucide-react";

type TableFilterProps = {
  options?: string[];
  showRefreshButton?: boolean;
};

const TableFilter = ({
  showRefreshButton = true,
  options,
}: TableFilterProps) => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between mb-4">
      <div className="flex items-center flex-wrap gap-1">
        {options?.map((option, index) => (
          <Button
            key={index}
            variant="ghost"
            className="bg-white border border-dashed border-border-darker rounded-full text-muted py-1 px-2"
          >
            <ListFilter className="w-4 h-4" />
            {option}
          </Button>
        ))}
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
