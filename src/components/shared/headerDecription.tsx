import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";

type IHeaderDescription = {
  title: string;
  description: string;
  actionText?: string;
  handleAction?: () => void;
  showActionButton?: boolean;
  showCopyButton?: boolean;
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  actionName?: string;
  subtitle?: boolean
};

const HeaderDescription = ({
  title,
  description,
  actionText,
  handleAction,
  showActionButton = true,
  showCopyButton = true,
  className,
  icon,
  showIcon = true,
  actionName, 
}: IHeaderDescription) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col sm:flex-row items-start sm:items-end gap-4",
        className
      )}
    >
      <div className="flex flex-col gap-1.5">
        <h1 className=" text-lg lg:text-2xl font-inter font-medium">{title}</h1>
        <div className="flex items-end lg:mt-0 -mt-1 gap-2 ">
          <p className="text-sm text-muted">{description} </p>
          {showCopyButton && (
            <Button
              className="cursor-pointer text-sm size-4 font-medium"
              onClick={() => {}}
              variant="ghost"
              size="icon"
            >
              <CopyIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
      {showActionButton && (
        <Button
          className="inline-flex items-center cursor-pointer text-sm font-medium sm:ml-auto"
          onClick={handleAction}
        >
          {showIcon && icon}
          {actionText ?? actionName }
        </Button>
      )}
    </div>
  );
};

export default HeaderDescription;
