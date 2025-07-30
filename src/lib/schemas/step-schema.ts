import * as yup from "yup";

// import { z } from "zod";

export const choosePlatformSchema = yup.object({
  platform: yup.string().min(2),
});
export const adBudgetSchema = yup.object({
  adBudget: yup.string().min(2),
});

export const adDetailsSchema = yup.object({
  adDetails: yup.string().min(2),
});

export const combinedSchema = yup.object({
  platform: yup.string().min(2),
  adBudget: yup.string().min(2),
  adDetails: yup.string().min(2),
});
