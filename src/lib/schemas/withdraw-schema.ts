import * as yup from "yup";

export const withdrawFormSchema = yup.object({
  currencyData: yup.object({
    currency: yup.string().required("Currency is required"),
    amount: yup
      .string()
      .required("Amount is required")
      .matches(/^\d+$/, "Amount must be a valid number"),
  }),
});
