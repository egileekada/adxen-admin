<<<<<<< HEAD
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

=======
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";

export const DisplayStepper = () => {
  const { steps, currentStep } = useStepper();
  console.log(steps, currentStep);
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
  return (
    <div className="h-full flex flex-col items-start justify-center px-6 gap-4">
      <h2 className="text-base font-inter font-normal text-subtle">
        Request ad account
      </h2>

      {/* start the stepper */}
      <div className="relative w-full space-y-6">
        {steps.map((step, index) => (
<<<<<<< HEAD
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
=======
          <div key={index} className="flex gap-6 items-start">
            <div className="relative border size-6 rounded-full flex items-center justify-center shadow-xs">
              <h1>{index + 1}</h1>
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
              <div
                className={cn(
                  "absolute flex-auto left-1/2 top-1/2 mt-1.5 transition duration-300 ease-in-out translate-y-1/2 w-px h-4.5 bg-bordercolor",
                  index === steps.length - 1 && "hidden"
                )}
              />
            </div>
            <div className="text-base font-inter font-medium text-text-default">
<<<<<<< HEAD
              {stepNames[step as keyof typeof stepNames]}
=======
              {step}
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MobileStepper = () => {
<<<<<<< HEAD
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
          currentStepIndex === 0 && "bg-basic-blue-accent",
          currentStepIndex > 0 &&
            "bg-basic-green-accent border-border-darker text-white"
        )}
      >
        <h1
          className={cn(
            "text-xs font-inter font-medium",
            currentStepIndex === 0 && "text-white"
          )}
        >
          {currentStepIndex + 1}
        </h1>
      </div>
      <div className="text-base font-inter font-medium text-text-default">
        {stepNames[currentStep as keyof typeof stepNames]}
      </div>
    </div>
  );
=======
  return <div>MobileStepper</div>;
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
};
