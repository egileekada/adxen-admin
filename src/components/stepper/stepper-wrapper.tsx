import { useStepperStore } from "@/hooks/use-stepper-store";
import ChoosePlatform from "./steps/choose-platform";
import AdBudget from "./steps/ad-budget";
import AdDetails from "./steps/ad-details";
import AdSummary from "./steps/summary";
import { ForwardIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileStepper } from "./display-stepper";

const StepperWrapper = () => {
  const isMobile = useIsMobile();
  const { currentStep, nextStep, prevStep, isLastStep } = useStepperStore();

  const stepComponents = [
    <ChoosePlatform />,
    <AdDetails />,
    <AdBudget />,
    <AdSummary />,
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col items-center justify-center">
      <div className="pb-16">
        {stepComponents[currentStep]}

        <div className="flex gap-4 px-4 sm:px-0">
          {currentStep > 0 && (
            <Button
              onClick={() => prevStep()}
              className="flex gap-2 bg-white hover:bg-transparent cursor-pointer border border-border-darker text-text-default rounded-md"
            >
              Back
            </Button>
          )}

          <Button
            onClick={() => nextStep()}
            className="flex gap-2 bg-accent-foreground text-white rounded-md cursor-pointer"
          >
            {isLastStep ? "Submit" : "Continue"}

            <ForwardIcon className="size-4" />
          </Button>
        </div>
      </div>
      {isMobile && <MobileStepper />}
    </div>
  );
};

export default StepperWrapper;
