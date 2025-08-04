import CurrencyCombo from "@/components/shared/currency-selector";
import { ErrorMessage, Formik, Form as FormikForm } from "formik";
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
import { transferFundFormSchema } from "@/lib/schemas/transfer-fund-schema";

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

  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  const initialValues = {
    sourceAccount: "",
    destinationAccount: "",
    allocation: { currency: "USD", amount: 0 },
    receivingAmount: { currency: "USD", amount: 0 },
  };
  return (
    <div className="mx-auto pt-4 overflow-y-auto w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={transferFundFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormikForm className="space-y-5">
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
                      {values.sourceAccount || "Select source ad account"}
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
                              onSelect={() => {
                                setFieldValue("sourceAccount", account.label);
                                // setSourceAccount(account.label);
                                setOpenSourceAdAccount(false);
                              }}
                            >
                              {account.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <ErrorMessage
                  name="sourceAccount"
                  component="div"
                  className="text-destructive text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium font-inter text-default">
                  How much do you want to allocate?
                </label>

                <CurrencyCombo
                  value={{
                    currency: values.allocation.currency,
                    amount: values.allocation.amount.toString(),
                  }}
                  onChange={(val) => setFieldValue("allocation", val)}
                />
                <ErrorMessage
                  name="allocation.amount"
                  component="div"
                  className="text-destructive text-sm"
                />
              </div>

              {/* Info */}
              <p className="text-sm font-normal text-muted">
                Wallet Balance:{" "}
                <span className="text-blue-infomative tracking-wide">
                  $1234.56
                </span>
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
                      {values.destinationAccount ||
                        "Select destination ad account"}
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
                              onSelect={() => {
                                setFieldValue(
                                  "destinationAccount",
                                  account.label
                                );
                                // setDestinationAccount(account.label);
                                setOpenDestinationAdAccount(false);
                              }}
                            >
                              {account.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <ErrorMessage
                  name="destinationAccount"
                  component="div"
                  className="text-destructive text-sm"
                />
              </div>

              {/* Receiving Amount */}
              <div>
                <label className="text-sm font-medium font-inter text-default">
                  Receiving Amount
                </label>
                <CurrencyCombo
                  value={{
                    currency: values.receivingAmount.currency,
                    amount: values.receivingAmount.amount.toString(),
                  }}
                  onChange={(val) => setFieldValue("receivingAmount", val)}
                />
                <ErrorMessage
                  name="receivingAmount.amount"
                  component="div"
                  className="text-destructive text-sm"
                />
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
          </FormikForm>
        )}
      </Formik>
      {/* <Form {...form}>
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
                  <FormLabel className="text-default text-sm font-inter font-medium">
                    Destination account
                  </FormLabel>
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
      </Form> */}
    </div>
  );
};

export default TransferFundForm;
