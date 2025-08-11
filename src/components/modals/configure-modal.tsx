import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import AdAccountForm from "../forms/ad-account-form";
import InitialFundingForm2 from "../forms/initial-funding-form2";

import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  SheetContent,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { useState } from "react";
import ModalTitle from "./modal-title";

const steps = ["configure", "funding"] as const;

const ConfigureModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  const [stepIndex, setStepIndex] = useState(0);

  const stepsMap = {
    configure: <AdAccountForm />,
    funding: <InitialFundingForm2 />,
  };

  const currentStep = stepsMap[steps[stepIndex]];

  const handleNext = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrevious = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 sm:max-w-md md:max-w-md  mx-auto">
          <DrawerHeader className="flex flex-col relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] gap-2 p-6">
            <DrawerTitle className="">
              <ModalTitle
                breadcrumb={["View Details", "Edit configuration"]}
                closeModal={closeModal}
              />
            </DrawerTitle>

            <DrawerDescription className="flex text-xl font-bold text-default">
              Configure your ad account
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-6 overflow-y-auto">{currentStep}</div>
          <div className="p-6 mt-2 flex w-full justify-between gap-2 border-t border-soft pt-6">
            {stepIndex > 0 && (
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent text-default"
                onClick={handlePrevious}
              >
                Back
              </Button>
            )}
            <Button
              size="sm"
              className="ml-auto"
              onClick={
                stepIndex === steps.length - 1 ? handleSubmit : handleNext
              }
            >
              {stepIndex === steps.length - 1 ? "Proceed" : "Next"}
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] mt-2 max-h-fit  rounded-md sm:max-w-md md:max-w-md  mx-auto overflow-y-auto">
        <SheetHeader className=" relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2">
          <SheetTitle>
            <ModalTitle
              breadcrumb={["View Details", "Edit configuration"]}
              closeModal={closeModal}
            />
          </SheetTitle>
          <SheetDescription className="text-xl font-bold text-default">
            Configure your ad account
          </SheetDescription>
        </SheetHeader>
        <div className="px-6">{currentStep}</div>
        <div className="p-6 flex w-full justify-between gap-2 border-t border-soft">
          {stepIndex > 0 && (
            <Button
              size="sm"
              variant="outline"
              className="bg-transparent text-default"
              onClick={handlePrevious}
            >
              Back
            </Button>
          )}
          <Button
            size="sm"
            className="ml-auto"
            onClick={stepIndex === steps.length - 1 ? handleSubmit : handleNext}
          >
            {stepIndex === steps.length - 1 ? "Proceed" : "Next"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ConfigureModal;
