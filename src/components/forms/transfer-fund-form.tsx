import CurrencyCombo from "@/components/shared/currency-selector";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronsUpDownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
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
  const [openDestinationAdAccount, setOpenDestinationAdAccount] =
    useState(false);
  const [openSourceAdAccount, setOpenSourceAdAccount] = useState(false);
  const [sourceAdAccount, setSourceAdAccount] = useState("");
  const [destinationAdAccount, setDestinationAdAccount] = useState("");
  const form = useForm({
    defaultValues: {},
  });

  const handleSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div className="mx-auto mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-5">
          <div className="flex flex-col gap-4">
            <FormField
              // control={form.control}
              name="addacount"
              render={() => (
                <FormItem>
                  <FormLabel className="text-default text-sm font-inter font-medium">
                    Source Ad Account
                  </FormLabel>
                  <FormControl>
                    <Popover
                      open={openSourceAdAccount}
                      onOpenChange={setOpenSourceAdAccount}
                    >
                      <PopoverTrigger asChild>
                        <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-xs">
                          {sourceAdAccount || "Select source ad account"}
                          <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 w-full min-w-[var(--radix-popover-trigger-width)]">
                        <Command>
                          <CommandInput placeholder="Search for a category" />
                          <CommandList>
                            <CommandEmpty>No category found.</CommandEmpty>
                            <CommandGroup>
                              {adAccounts.map((account) => (
                                <CommandItem
                                  key={account.value}
                                  value={account.value}
                                  onSelect={() => {
                                    setSourceAdAccount(account.label);
                                    setOpenDestinationAdAccount(false);
                                  }}
                                >
                                  <p>{account.label}</p>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="addacount"
              render={() => (
                <FormItem>
                  <FormLabel className="text-default text-sm font-inter font-medium">
                    How much do you want to allocate?
                  </FormLabel>
                  <FormControl>
                    <CurrencyCombo />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm font-inter font-normal text-muted ">
              Wallet Balance:{" "}
              <span className="text-blue-infomative tracking-wide">
                $1234.56
              </span>
            </p>
          </div>
          <Separator className="bg-border-darker" />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-subtle text-sm font-inter font-normal">
                Commission Fee (4.99%)
              </p>
              <p>50 USD</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-subtle text-sm font-inter font-normal">
                Amount to convert
              </p>
              <p>950.00 USD</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm font-inter font-normal underline underline-offset-2 text-blue-infomative">
                Exchange Rate
              </p>
              <p>1</p>
            </div>
          </div>
          <Separator className="bg-border-darker" />
          <div className="flex flex-col gap-4">
            <FormField
              // control={form.control}
              name="addacount"
              render={() => (
                <FormItem>
                  <Popover
                    open={openDestinationAdAccount}
                    onOpenChange={setOpenDestinationAdAccount}
                  >
                    <PopoverTrigger asChild>
                      <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-xs">
                        {destinationAdAccount ||
                          "Select destination ad account"}
                        <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-full min-w-[var(--radix-popover-trigger-width)]">
                      <Command>
                        <CommandInput placeholder="Search for a category" />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {adAccounts.map((account) => (
                              <CommandItem
                                key={account.value}
                                value={account.value}
                                onSelect={() => {
                                  setDestinationAdAccount(account.label);
                                  setOpenDestinationAdAccount(false);
                                }}
                              >
                                <p>{account.label}</p>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={form.control}
              name="addacount"
              render={() => (
                <FormItem>
                  <FormLabel className="text-default text-sm font-inter font-medium">
                    Receiving Amount
                  </FormLabel>
                  <FormControl>
                    <CurrencyCombo />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TransferFundForm;
