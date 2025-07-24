import { useStepperStore } from "@/hooks/use-stepper-store";
import ChoosePlatform from "./steps/choose-platform";
import AdBudget from "./steps/ad-budget";
import AdDetails from "./steps/ad-details";
import AdSummary from "./steps/summary";
import { ForwardIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileStepper } from "./display-stepper";
import { useEffect, useRef } from "react";
// import { useQueryState } from "nuqs";

// const STEP_QUERY_KEY = "step";

const StepperWrapper = () => {
  const isMobile = useIsMobile();

  const {
    currentStep,
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    setCurrentStep,
  } = useStepperStore();

  // const [stepQuery, setQueryStep] = useQueryState(STEP_QUERY_KEY, {
  //   defaultValue: "choose",
  // });

  const stepComponents = {
    choose: ChoosePlatform,
    "ad-details": AdDetails,
    "ad-budget": AdBudget,
    summary: AdSummary,
  } as const;

  const StepComponent =
    stepComponents[currentStep as keyof typeof stepComponents];

  const didSync = useRef(false);

  useEffect(() => {
    if (!didSync.current) {
      didSync.current = true;
      // setCurrentStep(stepQuery as keyof typeof stepComponents);
    }
  }, [currentStep, setCurrentStep]);

  // useEffect(() => {
  //   if (currentStep !== stepQuery) {
  //     setQueryStep(currentStep);
  //   }
  // }, [currentStep, setQueryStep, stepQuery]);

  const handleNextStep = () => {
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  return (
    <div className="flex-1 w-full h-full flex flex-col items-center justify-center">
      <div className="pb-16">
        <StepComponent />

        <div className="flex gap-4 sm:px-0">
          {!isFirstStep() && (
            <Button
              onClick={handlePrevStep}
              className="flex gap-2 bg-white hover:bg-transparent cursor-pointer border border-border-darker text-default rounded-md"
            >
              Back
            </Button>
          )}

          <Button
            onClick={handleNextStep}
            className="flex gap-2 bg-accent-foreground text-white rounded-md cursor-pointer"
          >
            {isLastStep() ? "Submit" : "Continue"}

            <ForwardIcon className="size-4" />
          </Button>
        </div>
      </div>
      {isMobile && <MobileStepper />}
    </div>
  );
};

export default StepperWrapper;
