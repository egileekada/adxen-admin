import CurrencyCombo from "@/components/shared/currency-selector";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { Separator } from "@/components/ui/separator";
import { initialFundingFormSchema } from "@/lib/schemas/initial-fund-schema";
import { Button } from "../ui/button";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandGroup,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandItem,
} from "../ui/command";
import { ChevronsUpDownIcon } from "lucide-react";
import { RiGoogleLine, RiMetaLine } from "@remixicon/react";
import { useState } from "react";

const TopupAdForm = () => {
  const [open, setOpen] = useState(false);
  const [selectedAdAccount, setSelectedAdAccount] = useState<string | null>(
    null
  );
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  const initialValues = {
    allocations: { currency: "USD", amount: "" },
    adBudget: { currency: "USD", amount: "" },
  };

  const adAccounts = [
    {
      id: 1,
      name: "Meta - 1234567890",
      icon: <RiMetaLine className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Google - 1234567890",
      icon: <RiGoogleLine className="text-blue-400" />,
    },
  ];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={initialFundingFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormikForm className="space-y-5 mb-6">
            <div className="flex flex-col gap-4 px-6">
              <div className="flex flex-col gap-4">
                <label htmlFor="allocations">Select Ad Account</label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild className="">
                    <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-xs">
                      {selectedAdAccount || "Select Ad Account"}
                      <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0 w-full min-w-[var(--radix-popover-trigger-width)]"
                    align="start"
                  >
                    <Command className="bg-accent">
                      <CommandInput placeholder="Search timezone" />
                      <CommandList>
                        <CommandEmpty>No timezone found.</CommandEmpty>
                        <CommandGroup>
                          {adAccounts.map((adAccount) => (
                            <CommandItem
                              key={adAccount.id}
                              value={adAccount.name}
                              onSelect={() => {
                                setOpen(false);
                                setSelectedAdAccount(adAccount.name);
                              }}
                            >
                              {adAccount.icon}
                              <span>{adAccount.name}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <ErrorMessage name="allocations" component="div" />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="allocations">
                  How much do you want to allocate?
                </label>
                <CurrencyCombo
                  value={values.allocations}
                  onChange={(val) => setFieldValue("allocations", val)}
                />
                <ErrorMessage name="allocations" component="div" />
              </div>
              <p className="text-sm font-inter font-normal text-muted ">
                Wallet Balance:{" "}
                <span className="text-blue-infomative tracking-wide">
                  $1234.56
                </span>
              </p>
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
                  <p>1.00</p>
                </div>
              </div>
              <Separator className="bg-border-darker" />
              <div className="flex flex-col gap-4">
                <label htmlFor="adBudget">Ad Budget</label>
                <CurrencyCombo
                  value={values.adBudget}
                  onChange={(val) => setFieldValue("adBudget", val)}
                />
                <ErrorMessage name="adBudget" component="div" />
              </div>
            </div>
            <div className="flex justify-between px-6 py-4 border-t border-border-darker">
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
                    Ad Budget
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

export default TopupAdForm;
