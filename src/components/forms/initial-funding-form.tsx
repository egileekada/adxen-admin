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
import { useForm } from "react-hook-form";

const InitialFundingForm = () => {
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
      </Form>
    </div>
  );
};

export default InitialFundingForm;
