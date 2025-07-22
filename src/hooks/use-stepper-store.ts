import { create } from "zustand";

type StepperStore = {
  steps: string[];
  currentStep: number;
  data: object;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: number) => void;
  setData: (data: Partial<FormData>) => void;
  isLastStep: boolean;
  isFirstStep: boolean;
};

export const useStepperStore = create<StepperStore>((set, get) => ({
  steps: ["Choose Platform", "Ad Details", "Ad Budget", "Ad Summary"],
  currentStep: 0,
  data: {},
  nextStep: () => {
    const { currentStep, steps } = get();
    if (currentStep < steps.length - 1) {
      set({ currentStep: currentStep + 1 });
    }
  },
  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 0) {
      set({ currentStep: currentStep - 1 });
    }
  },
  setCurrentStep: (step: number) => {
    const { steps } = get();
    if (step >= 0 && step < steps.length) {
      set({ currentStep: step });
    }
  },
  setData: (data) => set({ data }),
  isLastStep: false,
  isFirstStep: false,
}));
