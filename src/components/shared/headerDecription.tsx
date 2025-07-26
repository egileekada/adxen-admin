<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";
=======
import { Button } from "../ui/button";
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))

type IHeaderDescription = {
  title: string;
  description: string;
<<<<<<< HEAD
  handleRequestAdAccount?: () => void;
  showActionButton?: boolean;
  showCopyButton?: boolean;
  className?: string;
=======
  handleRequestAdAccount: () => void;
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
};

const HeaderDescription = ({
  title,
  description,
  handleRequestAdAccount,
<<<<<<< HEAD
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
=======
}: IHeaderDescription) => {
  return (
    <div className="flex items-end justify-between gap-1.5">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-inter font-medium">{title}</h1>
        <p className="text-sm text-muted text-balance">{description}</p>
      </div>
      <Button
        className="hidden sm:block cursor-pointer text-sm font-medium"
        onClick={handleRequestAdAccount}
      >
        Request Ad Account
      </Button>
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
    </div>
  );
};

export default HeaderDescription;
