import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
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
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
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
import { useSelectPlatform } from "@/hooks/use-stepper-store";

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
  const [timezone, setTimezone] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const { selectedCountries, removeSelectedCountry } = useCountry();
  const { selectedPlatform } = useSelectPlatform();
  const form = useForm({
    defaultValues: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="px-4 pb-6 sm:px-0 sm:max-w-md mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold text-text-default font-inter">
        Set up your ad account
      </h1>
      <p className="text-sm sm:text-base font-inter font-normal text-subtle mt-2 sm:mt-4 sm:max-w-md">
        These help us configure and submit your request accurately.
      </p>
      <div className="mx-auto mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="">
            <div className="flex flex-col">
              <Label className="mb-6 text-text-default font-semibold text-lg font-inter">
                Ad Account Setup
              </Label>
              <div className="flex flex-col gap-4">
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem>
                      <FormLabel>Ad Account Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your ad account name"
                          className="bg-accent border border-border-darker tracking-wide outline-none shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem className="w-full">
                      <FormLabel>Timezone</FormLabel>
                      <FormControl>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild className="">
                            <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-sm">
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem className="w-full">
                      <FormLabel>Currency</FormLabel>
                      <FormControl className="w-full">
                        <Select>
                          <SelectTrigger className="w-full bg-accent text-subtle border border-border-darker shadow-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col">
              <Label className="mb-6  text-text-default font-semibold text-lg font-inter">
                Ad Account Planning
              </Label>
              <div className="flex flex-col gap-4">
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem>
                      <FormLabel className="">How many ad accounts?</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your ad account name"
                          className="bg-accent border border-border-darker tracking-wide shadow-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                        />
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
                      <FormLabel>
                        How much do you estimate your monthly ad spend to be?
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full bg-accent text-subtle border border-border-darker shadow-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                            <SelectValue placeholder="Select a spend" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1000">0 - $1k /month</SelectItem>
                            <SelectItem value="2000">
                              $1k - $5k /month
                            </SelectItem>
                            <SelectItem value="3000">
                              $5k - $10k /month
                            </SelectItem>
                            <SelectItem value="4000">
                              $10k - $25k /month
                            </SelectItem>
                            <SelectItem value="5000">
                              $25k - $50k /month
                            </SelectItem>
                            <SelectItem value="6000">
                              $50k - $100k /month
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col">
              <Label className="mb-6  text-text-default font-semibold text-lg font-inter">
                Business & Campaign Info
              </Label>
              <div className="flex flex-col gap-4">
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem>
                      <FormLabel>Business Category</FormLabel>
                      <FormControl>
                        <Popover
                          open={openBusinessCategory}
                          onOpenChange={setOpenBusinessCategory}
                        >
                          <PopoverTrigger asChild>
                            <Button className="w-full bg-accent font-normal font-inter hover:bg-accent text-subtle inline-flex items-center justify-between border border-border-darker shadow-sm">
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
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter your ad account name"
                            className="bg-accent border tracking-wide border-border-darker shadow-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle pl-20"
                          />
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                            https://
                          </span>
                        </div>
                      </FormControl>
                      <FormDescription className="text-muted text-xs/4 font-inter font-normal">
                        Make sure your page least 03 to 05 Posts (Image + Link +
                        Text){" "}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  // control={form.control}
                  name="addacount"
                  render={() => (
                    <FormItem className="w-full">
                      <FormLabel>Target Countries</FormLabel>
                      {selectedCountries.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2 bg-accent py-1.5 px-2 rounded-md max-w-full">
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
                      <FormControl>
                        <CountryDropdown className="bg-accent border border-border-darker shadow-sm" />
                      </FormControl>
                      <FormDescription className="text-muted text-xs/4 font-inter font-normal">
                        One or more geo-locations where ads will run. ad account
                        will target worldwide, entered countries is for
                        informative purpose
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator className="my-6" />
            {selectedPlatform === "meta" && (
              <div className="flex flex-col">
                <Label className="mb-6  text-text-default font-semibold text-lg font-inter">
                  Meta Linking Access
                </Label>
                <div className="flex flex-col gap-4">
                  <FormField
                    // control={form.control}
                    name="addacount"
                    render={() => (
                      <FormItem>
                        <FormLabel>Meta Business Manager ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your ad account name"
                            className="bg-accent border border-border-darker shadow-sm tracking-wide outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                          />
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
                        <FormLabel>Facebook Page Links</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your ad account name"
                            rows={10}
                            maxLength={1000}
                            minLength={10}
                            className="bg-accent border border-border-darker shadow-sm tracking-wide outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-subtle"
                          ></Textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            {selectedPlatform === "google" && <div>google form</div>}
            {selectedPlatform === "tiktok" && <div>tiktok form</div>}
            {selectedPlatform === "snapchat" && <div>snapchat form</div>}
            {selectedPlatform === "bing" && <div>bing form</div>}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdDetails;
