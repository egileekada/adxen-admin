// lib/schemas/ad-transfer-schema.ts
import * as Yup from "yup";

export const transferFundFormSchema = Yup.object().shape({
  sourceAccount: Yup.string().required("Select a source account"),
  destinationAccount: Yup.string().required("Select a destination account"),
  allocation: Yup.object({
    currency: Yup.string().required(),
    amount: Yup.number().required("Enter amount to allocate"),
  }),
  receivingAmount: Yup.object({
    currency: Yup.string().required(),
    amount: Yup.number().required("Enter receiving amount"),
  }),
});
