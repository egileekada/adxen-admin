import CurrencyCombo from "@/components/shared/currency-selector";

import { Formik, Form as FormikForm, ErrorMessage } from "formik";

import { withdrawFormSchema } from "@/lib/schemas/withdraw-schema";
import { Button } from "../ui/button";

const WithdrawForm = () => {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="mt-6">
      <Formik
        initialValues={{ currencyData: { currency: "USD", amount: "" } }}
        validationSchema={withdrawFormSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormikForm>
            <div className="flex flex-col gap-1 px-6">
              <label className="text-sm font-medium font-inter text-default">
                How much do you want to withdraw?
              </label>
              <CurrencyCombo
                value={{
                  currency: values.currencyData.currency,
                  amount: values.currencyData.amount,
                }}
                onChange={(val) => setFieldValue("currencyData", val)}
              />
              <ErrorMessage
                name="currency"
                component="div"
                className="text-destructive text-sm"
              />
            </div>

            <p className="text-sm font-inter font-normal text-muted mt-2 px-6">
              Ad Wallet Balance:{" "}
              <span className="text-blue-infomative tracking-wide">
                $1234.56
              </span>
            </p>

            <div className="p-6 mt-6  bg-[#27272A1A]/10 flex item-center justify-between gap-2 border-t border-[#27272A1A] pt-6">
              <Button
                variant="outline"
                type="button"
                size="sm"
                className=""
                onClick={() => {}}
              >
                Cancel
              </Button>
              <Button size="sm" className="" type="submit">
                Proceed
              </Button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default WithdrawForm;
