import { StepperContext } from "@/hooks/use-stepper";
import type { FormData } from "@/lib/schemas/step-schema";
import { useState } from "react";

export const StepperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const steps = ["Choose Platform", "Ad Budget", "Ad Details", "Ad Summary"];

  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Partial<FormData>>({});

  const nextStep = () => {
    setCurrentStep((step) => step + 1);
  };

  const prevStep = () => {
    setCurrentStep((step) => step - 1);
  };

  return (
    <StepperContext.Provider
      value={{
        steps,
        currentStep,
        data,
        nextStep,
        prevStep,
        setCurrentStep,
        setData,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
