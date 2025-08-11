import * as yup from "yup";

export const initialFundingFormSchema = yup.object({
  allocations: yup.object({
    currency: yup.string().required("Currency is required"),
    amount: yup
      .string()
      .required("Amount is required")
      .matches(/^\d+$/, "Amount must be a valid number"),
  }),
  adBudget: yup.object({
    currency: yup.string().required("Currency is required"),
    amount: yup
      .string()
      .required("Amount is required")
      .matches(/^\d+$/, "Amount must be a valid number"),
  }),
});
