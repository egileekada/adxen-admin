import { z } from "zod";

export const choosePlatformSchema = z.object({
  fullName: z.string().min(2),
});

export const adBudgetSchema = z.object({
  fullName: z.string().min(2),
});

export const adDetailsSchema = z.object({
  email: z.string().email(),
});

export const adSummarySchema = z.object({
  password: z.string().min(6),
});

export const combinedSchema = choosePlatformSchema
  .and(adBudgetSchema)
  .and(adDetailsSchema)
  .and(adSummarySchema);

export type FormData = z.infer<typeof combinedSchema>;
