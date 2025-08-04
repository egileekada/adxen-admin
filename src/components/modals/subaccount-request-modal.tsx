import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import SubaccountRequestForm from "../forms/subaccount-request-form";

const SubaccountRequestModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  const ModalHeader = (
    <>
      <Breadcrumb className="text-sm font-normal flex items-center gap-2">
        <BreadcrumbList>
          <BreadcrumbItem>View Details</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Get more accounts</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
        onClick={closeModal}
      >
        <X className="size-4 text-default" />
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 rounded-t-md sm:max-w-md h-fit mx-auto overflow-hidden">
          <DrawerHeader className="relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2 items-start">
            <DrawerTitle>{ModalHeader}</DrawerTitle>
            <DrawerDescription className="text-xl font-bold text-default">
              Request more accounts
            </DrawerDescription>
          </DrawerHeader>
          <SubaccountRequestForm />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] mt-2 mr-2 rounded-md h-fit sm:max-w-md mx-auto overflow-hidden">
        <SheetHeader className="relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2 items-start">
          <SheetTitle>{ModalHeader}</SheetTitle>
          <SheetDescription className="text-xl font-bold text-default">
            Request more accounts
          </SheetDescription>
        </SheetHeader>
        <SubaccountRequestForm />
      </SheetContent>
    </Sheet>
  );
};

export default SubaccountRequestModal;
