import { create } from "zustand";

export type Platform = "meta" | "google" | "tiktok" | "snapchat" | "bing";

type StepperStore = {
  steps: string[];
  currentStep: string;
  data: Record<string, unknown>;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: string) => void;
  setData: (data: Partial<Record<string, unknown>>) => void;
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
};

export const useStepperStore = create<StepperStore>((set, get) => ({
  steps: ["choose", "ad-details", "ad-budget", "summary"],
  currentStep: "choose",
  data: {},

  nextStep: () => {
    const { currentStep, steps } = get();
    const currentStepIndex = steps.indexOf(currentStep);
    if (currentStepIndex < steps.length - 1) {
      set({ currentStep: steps[currentStepIndex + 1] });
    }
  },

  prevStep: () => {
    const { currentStep, steps } = get();
    const currentStepIndex = steps.indexOf(currentStep);
    if (currentStepIndex > 0) {
      set({ currentStep: steps[currentStepIndex - 1] });
    }
  },

  setCurrentStep: (step) => {
    const { steps } = get();
    if (steps.includes(step)) {
      set({ currentStep: step });
    }
  },

  setData: (newData) =>
    set((state) => ({
      data: {
        ...state.data,
        ...newData,
      },
    })),
  isFirstStep: () => get().currentStep === get().steps[0],
  isLastStep: () => get().currentStep === get().steps.at(-1),
}));

export const useSelectPlatform = create<{
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}>((set) => ({
  selectedPlatform: "meta",
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
}));

export const usePlatformSelect = create<{
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}>((set) => ({
  selectedPlatform: "meta",
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
}));
