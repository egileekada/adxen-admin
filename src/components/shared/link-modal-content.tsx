"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  "business-manager-name": z
    .string()
    .min(1, "Business manager name is required"),
  "meta-business-manager-id": z
    .string()
    .min(1, "Meta Business Manager ID is required"),
});

interface LinkingModalContentProps {
  onClose?: () => void;
}

export const LinkingModalContent = ({ onClose }: LinkingModalContentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "business-manager-name": "",
      "meta-business-manager-id": "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    // Handle form submission here
    onClose?.();
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-2 p-6 bg-soft">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Request ad account</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Ad Details</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2
          className="text-xl font-semibold text-foreground"
          aria-label="Add Meta Business Manager ID"
        >
          Add Meta Business Manager ID
        </h2>
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-6 right-4 size-6 rounded-none text-muted-foreground cursor-pointer p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Separator />

      <div className="p-6">
        <div className="flex flex-col gap-4">
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
              <span>Business Info</span> <ChevronRight className="h-4 w-4" />
              <span>Copy your Business Manager ID</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="business-manager-name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Business manager name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter business manager name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meta-business-manager-id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Meta Business Manager ID
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter Meta Business Manager ID"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Separator />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="px-4 py-2 text-sm h-8 rounded-sm cursor-pointer bg-transparent"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={form.handleSubmit(onSubmit)}
            className="cursor-pointer px-4 py-2 text-sm h-8 rounded-sm"
          >
            Request connection
          </Button>
        </div>
      </div>
    </div>
  );
};
