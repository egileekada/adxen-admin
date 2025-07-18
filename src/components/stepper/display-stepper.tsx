import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";

export const DisplayStepper = () => {
  const { steps, currentStep } = useStepper();
  console.log(steps, currentStep);
  return (
    <div className="h-full flex flex-col items-start justify-center px-6 gap-4">
      <h2 className="text-base font-inter font-normal text-subtle">
        Request ad account
      </h2>

      {/* start the stepper */}
      <div className="relative w-full space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="relative border size-6 rounded-full flex items-center justify-center shadow-xs">
              <h1>{index + 1}</h1>
              <div
                className={cn(
                  "absolute flex-auto left-1/2 top-1/2 mt-1.5 transition duration-300 ease-in-out translate-y-1/2 w-px h-4.5 bg-bordercolor",
                  index === steps.length - 1 && "hidden"
                )}
              />
            </div>
            <div className="text-base font-inter font-medium text-text-default">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MobileStepper = () => {
  return <div>MobileStepper</div>;
};
