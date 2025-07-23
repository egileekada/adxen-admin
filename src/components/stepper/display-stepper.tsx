import { useStepperStore } from "@/hooks/use-stepper-store";

import { cn } from "@/lib/utils";

export const DisplayStepper = () => {
  const { steps, currentStep } = useStepperStore();
  const currentStepIndex = steps.indexOf(currentStep);

  const stepNames = {
    choose: "Choose Platform",
    "ad-details": "Ad Details",
    "ad-budget": "Ad Budget",
    summary: "Ad Summary",
  } as const;

  return (
    <div className="h-full flex flex-col items-start justify-center px-6 gap-4">
      <h2 className="text-base font-inter font-normal text-subtle">
        Request ad account
      </h2>

      {/* start the stepper */}
      <div className="relative w-full space-y-6">
        {steps.map((step, index) => (
          <div key={step} className="flex gap-6 items-start">
            <div
              className={cn(
                "relative border size-6 rounded-full flex items-center justify-center shadow-xs",
                currentStepIndex === index && "bg-basic-blue-accent",
                currentStepIndex > index &&
                  "bg-basic-green-accent border-border-darker text-white"
              )}
            >
              <h1
                className={cn(
                  "text-xs font-inter font-medium",
                  currentStepIndex === index && "text-white"
                )}
              >
                {index + 1}
              </h1>
              <div
                className={cn(
                  "absolute flex-auto left-1/2 top-1/2 mt-1.5 transition duration-300 ease-in-out translate-y-1/2 w-px h-4.5 bg-bordercolor",
                  index === steps.length - 1 && "hidden"
                )}
              />
            </div>
            <div className="text-base font-inter font-medium text-text-default">
              {stepNames[step as keyof typeof stepNames]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MobileStepper = () => {
  const { steps, currentStep } = useStepperStore();
  const currentStepIndex = steps.indexOf(currentStep);

  const stepNames = {
    choose: "Choose Platform",
    "ad-details": "Ad Details",
    "ad-budget": "Ad Budget",
    summary: "Ad Summary",
  } as const;

  return (
    <div className="absolute bottom-0 w-full flex h-14 gap-4 bg-bg-subtle items-center justify-center px-4">
      <div
        className={cn(
          "relative border-2 size-6 rounded-full flex items-center text-subtle justify-center shadow-xs",
          currentStep === steps[0] && "bg-basic-blue-accent",
          currentStep > steps[0] &&
            "bg-basic-green-accent border-border-darker text-white"
        )}
      >
        <h1
          className={cn(
            "text-xs font-inter font-medium",
            currentStep === steps[0] && "text-white"
          )}
        >
          {currentStepIndex + 1}
        </h1>
      </div>
      <div className="text-base font-inter font-medium text-text-default">
        {stepNames[steps[currentStepIndex] as keyof typeof stepNames]}
      </div>
    </div>
  );
};
