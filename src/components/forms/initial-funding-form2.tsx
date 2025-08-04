import CurrencyCombo from "@/components/shared/currency-selector";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { Separator } from "@/components/ui/separator";
import { initialFundingFormSchema } from "@/lib/schemas/initial-fund-schema";

const InitialFundingForm2 = () => {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  const initialValues = {
    allocations: { currency: "USD", amount: "" },
    adBudget: { currency: "USD", amount: "" },
  };

  return (
    <div className="mt-6">
      <Formik
        initialValues={initialValues}
        validationSchema={initialFundingFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormikForm className="space-y-5 mb-6">
            <div className="flex flex-col gap-4">
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

export default InitialFundingForm2;
