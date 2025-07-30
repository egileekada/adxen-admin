import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import InitialFundingForm from "../forms/initial-funding-form";
import { X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

const TopupModal = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const isMobile = useIsMobile();

  const handleProceed = () => {
    closeModal();
    setTimeout(() => {
      openModal("processing");
    }, 200);
  };

  if (isMobile)
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 rounded-t-md h-fit sm:max-w-md md:max-w-md  mx-auto overflow-hidden">
          <DrawerHeader className="flex flex-col items-start relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] gap-2 p-6">
            <DrawerTitle>
              <Breadcrumb className="text-sm font-normal flex items-center gap-2">
                <BreadcrumbList>
                  <BreadcrumbItem>View Details</BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>Fund Wallet</BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </DrawerTitle>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
              onClick={closeModal}
            >
              <X className="size-4 text-default" />
            </div>
            <DrawerDescription className="text-xl font-bold text-default">
              Top up ad account
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-6">
            <InitialFundingForm />
          </div>
          <div className="p-6 flex item-center justify-between gap-2 border-t border-soft pt-6">
            <Button variant="outline" size="sm" className="">
              Cancel
            </Button>
            <Button size="sm" className="" onClick={handleProceed}>
              Proceed
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    );

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] mt-2 mr-2 rounded-md h-fit sm:max-w-md md:max-w-md  mx-auto overflow-hidden">
        <SheetHeader className=" relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2">
          <SheetTitle>
            <Breadcrumb className="text-sm font-normal flex items-center gap-2">
              <BreadcrumbList>
                <BreadcrumbItem>View Details</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>Fund Wallet</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </SheetTitle>
          <div
            className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
            onClick={closeModal}
          >
            <X className="size-4 text-default" />
          </div>
          <SheetDescription className="text-xl font-bold text-default">
            Top up ad account
          </SheetDescription>
        </SheetHeader>
        <div className="px-6">
          <InitialFundingForm />
        </div>
        <div className="p-6  bg-[#27272A1A]/10 flex item-center justify-between gap-2 border-t border-[#27272A1A] pt-6">
          <Button variant="outline" size="sm" className="">
            Cancel
          </Button>
          <Button size="sm" className="" onClick={handleProceed}>
            Proceed
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TopupModal;
