import * as yup from "yup";

export const adAccountSchema = yup.object({
  adAccountName: yup.string().required("Ad account name is required"),
  timezone: yup.string().required("Timezone is required"),
  currency: yup.string().required("Currency is required"),
  numOfAccounts: yup.string().required("Number of accounts is required"),
  estimatedSpend: yup.string().required("Estimated spend is required"),
  websiteUrl: yup
    .string()
    .url("Enter a valid URL")
    .required("Website URL is required"),
  targetCountries: yup.array().min(1, "Select at least one country"),
  businessCategory: yup.string().required("Business category is required"),
});
