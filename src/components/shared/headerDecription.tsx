import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";

type IHeaderDescription = {
  title: string;
  description: string;
  handleRequestAdAccount?: () => void;
  showActionButton?: boolean;
  showCopyButton?: boolean;
  className?: string;
};

const HeaderDescription = ({
  title,
  description,
  handleRequestAdAccount,
  showActionButton = true,
  showCopyButton = true,
  className,
}: IHeaderDescription) => {
  return (
    <div className={cn("flex items-end justify-between gap-1.5", className)}>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-inter font-medium">{title}</h1>
        <p className="flex items-center gap-2 text-sm text-muted text-balance">
          {description}{" "}
          {showCopyButton && (
            <Button
              className="hidden sm:block cursor-pointer text-sm size-4 font-medium"
              onClick={handleRequestAdAccount}
              variant="ghost"
              size="icon"
            >
              <CopyIcon className="w-4 h-4" />
            </Button>
          )}
        </p>
      </div>
      {showActionButton && (
        <Button
          className="hidden sm:block cursor-pointer text-sm font-medium"
          onClick={handleRequestAdAccount}
        >
          Request Ad Account
        </Button>
      )}
    </div>
  );
};

export default HeaderDescription;
