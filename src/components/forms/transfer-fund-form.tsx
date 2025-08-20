import CurrencyCombo from "@/components/shared/currency-selector";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { PopoverContent } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useState } from "react";

const adAccounts = [
  {
    label: "Meta Shein NG",
    value: "meta-shein-ng",
  },
  {
    label: "Meta Shein-2 NG",
    value: "meta-shein-2-ng",
  },
  {
    label: "Google Service NG",
    value: "google-service-ng",
  },
];

const TransferFundForm = () => {
  const [openSourceAdAccount, setOpenSourceAdAccount] = useState(false);
  const [openDestinationAdAccount, setOpenDestinationAdAccount] =
    useState(false);
  const [sourceAccount, setSourceAccount] = useState("");
  const [destinationAccount, setDetinationAccount] = useState("");

  return (
    <div className="mx-auto pt-4 overflow-y-auto w-full">
      <form className="space-y-5">
        <div className="flex flex-col gap-4 px-6">
          <div className="">
            <label className="text-sm  font-medium font-inter text-default">
              Source Ad Account
            </label>
            <Popover
              open={openSourceAdAccount}
              onOpenChange={setOpenSourceAdAccount}
            >
              <PopoverTrigger asChild>
                <Button className="w-full mt-2 justify-between bg-accent border border-border-darker hover:bg-accent/80 text-subtle shadow-xs">
                  {sourceAccount || "Select source ad account"}
                  <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 min-w-[var(--radix-popover-trigger-width)]">
                <Command>
                  <CommandInput placeholder="Search account" />
                  <CommandList>
                    <CommandEmpty>No account found.</CommandEmpty>
                    <CommandGroup>
                      {adAccounts.map((account) => (
                        <CommandItem
                          key={account.value}
                          onSelect={() => setSourceAccount(account.value)}
                        >
                          {account.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium font-inter text-default">
              How much do you want to allocate?
            </label>

            <CurrencyCombo />
          </div>

          {/* Info */}
          <p className="text-sm font-normal text-muted">
            Wallet Balance:{" "}
            <span className="text-blue-infomative tracking-wide">$1234.56</span>
          </p>

          <Separator className="bg-border-darker" />

          {/* Cost Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-subtle text-sm">Commission Fee (4.99%)</p>
              <p>50 USD</p>
            </div>
            <div className="flex justify-between">
              <p className="text-subtle text-sm">Amount to convert</p>
              <p>950 USD</p>
            </div>
            <div className="flex justify-between">
              <p className="text-blue-infomative text-sm underline">
                Exchange Rate
              </p>
              <p>1</p>
            </div>
          </div>

          <Separator className="bg-border-darker" />

          {/* Destination Account */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium font-inter text-default">
              Destination Ad Account
            </label>
            <Popover
              open={openDestinationAdAccount}
              onOpenChange={setOpenDestinationAdAccount}
            >
              <PopoverTrigger asChild>
                <Button className="w-full justify-between bg-accent border hover:bg-accent/80 border-border-darker text-subtle shadow-xs">
                  {destinationAccount || "Select destination ad account"}
                  <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-full">
                <Command>
                  <CommandInput placeholder="Search account" />
                  <CommandList>
                    <CommandEmpty>No account found.</CommandEmpty>
                    <CommandGroup>
                      {adAccounts.map((account) => (
                        <CommandItem
                          key={account.value}
                          onSelect={() => setDetinationAccount(account.value)}
                        >
                          {account.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Receiving Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium font-inter text-default">
              Receiving Amount
            </label>
            <CurrencyCombo />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between p-6 border-t border-border-darker">
          <Button variant="outline" size="sm" type="button">
            Cancel
          </Button>
          <Button type="submit" size="sm">
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TransferFundForm;
