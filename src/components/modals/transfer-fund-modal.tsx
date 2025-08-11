import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import TransferFundForm from "../forms/transfer-fund-form";
import ModalTitle from "./modal-title";

const TransferFundModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();
  console.log(isMobile);

  if (isMobile)
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 sm:max-w-md md:max-w-md mx-auto ">
          <DrawerHeader className="flex flex-col items-start relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] gap-2 p-6">
            <DrawerTitle>
              <ModalTitle
                breadcrumb={["View Details", "Transfer Funds"]}
                closeModal={closeModal}
              />
            </DrawerTitle>
            <DrawerDescription className="text-xl font-bold text-default">
              Transfer funds to ad account
            </DrawerDescription>
          </DrawerHeader>
          <TransferFundForm />
        </DrawerContent>
      </Drawer>
    );

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] h-fit mt-2 sm:max-w-md md:max-w-md  mx-auto rounded-md">
        <SheetHeader className=" relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2">
          <SheetTitle>
            <ModalTitle
              breadcrumb={["View Details", "Transfer Funds"]}
              closeModal={closeModal}
            />
          </SheetTitle>
          <div
            className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
            onClick={closeModal}
          >
            <X className="size-4 text-default" />
          </div>
          <SheetDescription className="text-xl font-bold text-default">
            Transfer funds to ad account
          </SheetDescription>
        </SheetHeader>
        <TransferFundForm />
      </SheetContent>
    </Sheet>
  );
};

export default TransferFundModal;
