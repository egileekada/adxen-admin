import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDownIcon, PlusIcon, XIcon } from "lucide-react";
import {
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CountryDropdown } from "@/components/shared/country-dropdown";
import { useCountry } from "@/hooks/use-country";
import { CircleFlag } from "react-circle-flags";
import { Badge } from "@/components/ui/badge";
import { usePlatformSelect } from "@/hooks/use-stepper-store";
import { useModal } from "@/hooks/use-modal";
import { LinkingModal } from "@/components/shared/linking-modal";

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

const AdDetails = () => {
  const [open, setOpen] = useState(false);
  const [openBusinessCategory, setOpenBusinessCategory] = useState(false);
  const [openMetaBusinessManagerId, setOpenMetaBusinessManagerId] =
    useState(false);
  const [openTiktokBusinessManagerId, setOpenTiktokBusinessManagerId] =
    useState(false);
  const [openBingBusinessManagerId, setOpenBingBusinessManagerId] =
    useState(false);
  const [openSnapchatBusinessManagerId, setOpenSnapchatBusinessManagerId] =
    useState(false);
  const [openGoogleBusinessManagerId, setOpenGoogleBusinessManagerId] =
    useState(false);
  const [timezone, setTimezone] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");

  const { selectedCountries, removeSelectedCountry } = useCountry();
  const { selectedPlatform } = usePlatformSelect();

  const { openModal } = useModal();

  const handleAddBusinessManager = (platform: string) => {
    console.log("add business manager", platform);
    openModal();
  };

  return (
    <div className="sm:px-0 max-w-[478px] mx-auto mb-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-default font-inter">
        Set up your ad account
      </h1>
      <p className="text-sm sm:text-base font-inter font-normal text-subtle mt-2 sm:mt-4 sm:max-w-md">
        These help us configure and submit your request accurately.
      </p>
      <div className="mx-auto mt-6 overflow-y-auto">
        <form className="">
          <div className="flex flex-col">
            <h2 className="mb-6 text-default font-semibold text-lg font-inter">
              Ad Account Setup
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="ad-account-name">Ad Account Name</Label>
                <Input
                  id="ad-account-name"
                  placeholder="Enter your ad account name"
                  className="bg-accent border border-border-darker outline-none shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="timezone">Timezone</Label>
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
                    <Command className="">
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
                              className="cursor-pointer hover:bg-soft"
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
                <Label htmlFor="currency">Currency</Label>
                <Select>
                  <SelectTrigger className="w-full bg-accent text-subtle border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a currency" />
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
            <h1 className="mb-6  text-default font-semibold text-lg font-inter">
              Ad Account Planning
            </h1>
            <div className="flex flex-col gap-4">
              <div>
                <Label>
                  How much do you estimate your monthly ad spend to be?
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-accent text-subtle border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a spend" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000">0 - $1k /month</SelectItem>
                    <SelectItem value="2000">$1k - $5k /month</SelectItem>
                    <SelectItem value="3000">$5k - $10k /month</SelectItem>
                    <SelectItem value="4000">$10k - $25k /month</SelectItem>
                    <SelectItem value="5000">$25k - $50k /month</SelectItem>
                    <SelectItem value="6000">$50k - $100k /month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col">
            <h1 className="mb-6  text-default font-semibold text-lg font-inter">
              Business & Campaign Info
            </h1>
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
                <div className="relative">
                  <Input
                    placeholder="Enter your ad account name"
                    className="bg-accent border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle pl-20"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                    https://
                  </span>
                </div>
              </div>
              <span className="text-muted text-xs/4 font-inter font-normal">
                Make sure your page least 03 to 05 Posts (Image + Link + Text)
              </span>
              <div className="flex flex-col gap-2">
                <Label>Target Countries</Label>
                {selectedCountries.length > 0 && (
                  <div className="max-w-120 flex flex-wrap gap-2 mb-2 bg-accent py-1.5 px-2 rounded-md">
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
                <span className="text-muted text-xs/4 font-inter font-normal">
                  One or more geo-locations where ads will run. ad account will
                  target worldwide, entered countries is for informative purpose
                </span>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          {selectedPlatform === "meta" && (
            <div className="flex flex-col">
              <h1 className="mb-6  text-default font-semibold text-lg font-inter">
                Meta Linking Access
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Meta Business Manager ID</Label>
                  <Popover
                    open={openMetaBusinessManagerId}
                    onOpenChange={setOpenMetaBusinessManagerId}
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
                        onClick={() => handleAddBusinessManager("meta")}
                      >
                        <PlusIcon className="w-4 h-4 text-muted" />
                        <p className="text-default text-sm font-medium">
                          Add business manager
                        </p>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Facebook Page Links</Label>
                  <Textarea
                    placeholder="Enter your ad account name"
                    className="bg-accent border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                  ></Textarea>
                  <span className="text-muted text-xs/4 font-inter font-normal">
                    Must include at least one (admin access required
                    temporarily)
                  </span>
                </div>
              </div>
            </div>
          )}
          {selectedPlatform === "google" && (
            <div>
              <h1 className="mb-6  text-default font-semibold text-lg font-inter">
                Google Linking &amp; Access
              </h1>
              <div className="flex flex-col gap-2">
                <Label>Google Ads Email &amp; Access</Label>
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
          )}
          {selectedPlatform === "tiktok" && (
            <div>
              <h1 className="mb-6  text-default font-semibold text-lg font-inter">
                TikTok Linking &amp; Access
              </h1>
              <div className="flex flex-col gap-2">
                <Label>TikTok Business Center ID</Label>
                <Popover
                  open={openTiktokBusinessManagerId}
                  onOpenChange={setOpenTiktokBusinessManagerId}
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
                      onClick={() => handleAddBusinessManager("tiktok")}
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
          )}
          {selectedPlatform === "snapchat" && (
            <div>
              <h1 className="mb-6  text-default font-semibold text-lg font-inter">
                Snapchat Linking &amp; Access
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Public Profile name</Label>
                  <Popover
                    open={openSnapchatBusinessManagerId}
                    onOpenChange={setOpenSnapchatBusinessManagerId}
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
                        onClick={() => handleAddBusinessManager("snapchat")}
                      >
                        <PlusIcon className="w-4 h-4 text-muted" />
                        <p className="text-default text-sm font-medium">
                          Add business manager
                        </p>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Organization ID</Label>
                  <Input
                    placeholder="Enter your ad account name"
                    className="bg-accent border border-border-darker shadow-xs outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                  />
                </div>
              </div>
            </div>
          )}
          {selectedPlatform === "bing" && (
            <div>
              <h1 className="mb-6  text-default font-semibold text-lg font-inter">
                Bing Linking &amp; Access
              </h1>
              <div className="flex flex-col gap-2">
                <Label>Bing Business Center ID</Label>
                <Popover
                  open={openBingBusinessManagerId}
                  onOpenChange={setOpenBingBusinessManagerId}
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
                      onClick={() => handleAddBusinessManager("bing")}
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
          )}
        </form>
      </div>
      <LinkingModal />
    </div>
  );
};

export default AdDetails;
