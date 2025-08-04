import { Formik, Form as FormikForm, ErrorMessage } from "formik";

import { initialFundingFormSchema } from "@/lib/schemas/initial-fund-schema";
import { Button } from "../ui/button";
import { Popover } from "../ui/popover";
import { PopoverTrigger } from "../ui/popover";
import { ChevronRight, ChevronsUpDownIcon } from "lucide-react";
import { PopoverContent } from "../ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  RiGoogleLine,
  RiMetaLine,
  RiSnapchatFill,
  RiTiktokLine,
} from "@remixicon/react";

const platforms = [
  {
    label: "Meta",
    value: "meta",
    icon: <RiMetaLine className="text-blue-400 size-5" />,
  },
  {
    label: "Google",
    value: "google",
    icon: <RiGoogleLine className="text-default size-5" />,
  },
  {
    label: "TikTok",
    value: "tiktok",
    icon: <RiTiktokLine className="text-muted size-5" />,
  },
  {
    label: "Snapchat",
    value: "snapchat",
    icon: <RiSnapchatFill className="text-orange-300 size-5" />,
  },
];

const BusinessManagerForm = () => {
  const [openDestinationAdAccount, setOpenDestinationAdAccount] =
    useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  const initialValues = {
    allocations: { currency: "USD", amount: "" },
    adBudget: { currency: "USD", amount: "" },
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={initialFundingFormSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <FormikForm className="space-y-5 mb-6">
            <div className="flex flex-col gap-4 px-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium font-inter text-default">
                  Platform
                </label>
                <Popover
                  open={openDestinationAdAccount}
                  onOpenChange={setOpenDestinationAdAccount}
                >
                  <PopoverTrigger asChild>
                    <Button className="w-full justify-between bg-accent border hover:bg-accent/80 border-border-darker text-subtle shadow-xs">
                      {selectedPlatform ? (
                        <p className="flex items-center gap-2">
                          {
                            platforms.find(
                              (platform) => platform.label === selectedPlatform
                            )?.icon
                          }
                          {selectedPlatform}
                        </p>
                      ) : (
                        "Select platform"
                      )}
                      <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-full">
                    <Command>
                      <CommandInput placeholder="Search account" />
                      <CommandList>
                        <CommandEmpty>No account found.</CommandEmpty>
                        <CommandGroup>
                          {platforms.map((platform) => (
                            <CommandItem
                              key={platform.value}
                              onSelect={() => {
                                setFieldValue(
                                  "destinationAccount",
                                  platform.label
                                );
                                setSelectedPlatform(platform.label);
                                setOpenDestinationAdAccount(false);
                              }}
                            >
                              <span className="flex items-center gap-2">
                                {platform.icon}
                                {platform.label}
                              </span>
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

              <div className="flex gap-3 items-stretch rounded-sm p-3 w-full bg-blue-subtle">
                <div className="min-w-1 rounded-full bg-basic-blue-accent" />
                <div className="inline-flex flex-wrap items-center text-sm text-subtle">
                  <span>
                    Go to{" "}
                    <span className="text-blue-500">business.facebook.com</span>
                  </span>
                  <ChevronRight className="h-4 w-4" />
                  <span>Click Business Settings </span>
                  <ChevronRight className="h-4 w-4" />
                  <span>Business Info</span>{" "}
                  <ChevronRight className="h-4 w-4" />
                  <span>Copy your Business Manager ID</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-normal font-inter text-default">
                  Access manager name
                </label>
                <Input
                  placeholder="Enter your access manager name"
                  className="bg-accent border border-border-darker outline-none shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                />
                <ErrorMessage
                  name="destinationAccount"
                  component="div"
                  className="text-destructive text-sm"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-normal font-inter text-default">
                  Organisation ID
                </label>
                <Input
                  placeholder="Enter your organization ID"
                  className="bg-accent border border-border-darker outline-none shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                />
                <ErrorMessage
                  name="destinationAccount"
                  component="div"
                  className="text-destructive text-sm"
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-4 border-t border-border-darker">
              <Button variant="outline" size="sm" type="button" className="h-8">
                Cancel
              </Button>
              <Button type="submit" size="sm" className="h-8">
                Request connection
              </Button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default BusinessManagerForm;
