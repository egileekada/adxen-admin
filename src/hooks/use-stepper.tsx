import { createContext, useContext } from "react";
import type { FormData } from "@/lib/schemas/step-schema";

interface StepperContextType {
  steps: string[];
  currentStep: number;
  data: Partial<FormData>;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: number) => void;
  setData: (data: Partial<FormData>) => void;
}
export const StepperContext = createContext<StepperContextType | undefined>(
  undefined
);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
