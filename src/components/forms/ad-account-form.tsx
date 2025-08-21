
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDownIcon, PlusIcon, XIcon } from "lucide-react";
import { CountryDropdown } from "@/components/shared/country-dropdown";
import { useState } from "react";
import { useModal } from "@/hooks/use-modal";
import { useCountry } from "@/hooks/use-country";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CircleFlag } from "react-circle-flags";
import { Badge } from "../ui/badge";

const timezones = [
  {
    value: "America/New_York",
    label: "America/New_York",
  },
  {
    value: "America/Los_Angeles",
    label: "America/Los_Angeles",
  },
  {
    value: "America/Chicago",
    label: "America/Chicago",
  },
];

const businessCategories = [
  { label: "E-commerce", value: "ecommerce" },
  { label: "Software Developer", value: "developer" },
  { label: "Content Creator", value: "content_creator" },
  { label: "Freelancer", value: "freelancer" },
  { label: "Consultant", value: "consultant" },
];

const AdAccountForm = () => {
  const [open, setOpen] = useState(false);
  const [openBusinessCategory, setOpenBusinessCategory] = useState(false);
  const [openGoogleBusinessManagerId, setOpenGoogleBusinessManagerId] =
    useState(false);
  const [timezone, setTimezone] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");

  const { selectedCountries, removeSelectedCountry } = useCountry();
  const { openModal } = useModal();

  const handleAddBusinessManager = (platform: string) => {
    console.log("add business manager", platform);
    openModal();
  };

  return (
    <div className="mx-auto overflow-y-auto">
        <form className="">
          <div className="flex flex-col">
            <h2 className="mb-6 text-default font-semibold text-lg font-inter">
              Ad Account Setup
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Ad Account Name</Label>
                <Input
                  placeholder="Enter your ad account name"
                  className="bg-accent border border-border-darker outline-none shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Timezone</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild className="">
                    <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-xs">
                      {timezone || "Select Timezone"}
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
                          {timezones.map((timezone) => (
                            <CommandItem
                              key={timezone.value}
                              value={timezone.value}
                              onSelect={() => {
                                setTimezone(timezone.value);
                                setOpen(false);
                              }}
                            >
                              <CheckIcon className="w-4 h-4" />
                              <span>{timezone.label}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Currency</Label>
                <Select>
                    <SelectTrigger className="w-full bg-accent text-subtle border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                      <SelectValue
                        placeholder="Select a currency"
                        className=""
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col">
            <Label className="mb-6  text-default font-semibold text-lg font-inter">
              Business & Campaign Info
            </Label>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Business Category</Label>
                <Popover
                  open={openBusinessCategory}
                  onOpenChange={setOpenBusinessCategory}
                  >
                    <PopoverTrigger asChild>
                      <Button className="w-full bg-accent font-normal shadow-xs font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker">
                        {businessCategory || "Select a category"}
                        <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-full min-w-[var(--radix-popover-trigger-width)]">
                      <Command>
                        <CommandInput placeholder="Search for a category" />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {businessCategories.map((category) => (
                              <CommandItem
                                key={category.value}
                                value={category.value}
                                onSelect={() => {
                                  setBusinessCategory(category.label);
                                  setOpenBusinessCategory(false);
                                }}
                              >
                                {category.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Website URL</Label>
                <div>
                  <div className="relative">
                    <Input
                      placeholder="Enter your ad account name"
                      className="bg-accent border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle pl-20"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                      https://
                    </span>
                  </div>
                  <span className="text-muted text-xs/4 font-inter font-normal">Make sure your page least 03 to 05 Posts (Image + Link +
                    Text){" "}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Target Country</Label>
                <div>
                {selectedCountries.length > 0 && (
                  <div className="max-w-full flex flex-wrap gap-2 mb-2 bg-accent py-1.5 px-2 rounded-md">
                    {selectedCountries.map((c) => (
                      <div className="flex items-center bg-white px-1 rounded-full shadow-sm">
                        <Badge
                          className="bg-transparent text-sm text-subtle"
                          key={c.alpha2}
                        >
                          <CircleFlag
                            countryCode={c.alpha2.toLowerCase()}
                            className="w-4 h-4"
                          />
                          {c.name}
                        </Badge>
                        <XIcon
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => removeSelectedCountry(c)}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <CountryDropdown className="bg-accent border border-border-darker shadow-xs" />
                  <span className="text-muted text-xs font-inter font-normal">
                    One or more geo-locations where ads will run. ad account
                    will target worldwide, entered countries is for informative purpose
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-6" />

          {/* this is gonna created base on the user previous selection while creating ad account*/}
            <div>
              <h2 className="mb-6  text-default font-semibold text-lg font-inter">
                Google Linking &amp; Access
              </h2>
              <div className="flex flex-col gap-2">
                <Label>Google Ads Email or Client ID</Label>
                <Popover
                  open={openGoogleBusinessManagerId}
                  onOpenChange={setOpenGoogleBusinessManagerId}
                >
                  <PopoverTrigger asChild>
                    <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-xs">
                      {"Choose"}
                      <ChevronsUpDownIcon className="w-4 h-4 opacity-35" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-full min-w-[var(--radix-popover-trigger-width)]">
                    <Command>
                      <CommandInput placeholder="Search for a category" />
                      <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup></CommandGroup>
                      </CommandList>
                    </Command>
                    <Button
                      className="w-full bg-accent rounded-none rounded-b-md font-normal font-inter hover:bg-accent text-subtle inline-flex items-center border border-border-darker"
                      onClick={() => handleAddBusinessManager("google")}
                    >
                      <PlusIcon className="w-4 h-4 text-muted" />
                      <p className="text-default text-sm font-medium">
                        Add business manager
                      </p>
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
        </form>
    </div>
  );
};

export default AdAccountForm;
