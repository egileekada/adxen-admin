import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import InitialFundingForm from "../forms/initial-funding-form";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import ModalTitle from "./modal-title";

const TopupModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 rounded-t-md h-fit sm:max-w-md md:max-w-md  mx-auto overflow-hidden">
          <DrawerHeader className="flex flex-col items-start relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] gap-2 p-6">
            <DrawerTitle>
              <ModalTitle
                breadcrumb={["View Details", "Fund Wallet"]}
                closeModal={closeModal}
              />
            </DrawerTitle>
            <DrawerDescription className="text-xl font-bold text-default">
              Top up ad account
            </DrawerDescription>
          </DrawerHeader>
          <InitialFundingForm />
        </DrawerContent>
      </Drawer>
    );

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] mt-2 mr-2 rounded-md h-fit sm:max-w-md md:max-w-md  mx-auto overflow-hidden">
        <SheetHeader className=" relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2">
          <SheetTitle>
            <ModalTitle
              breadcrumb={["View Details", "Fund Wallet"]}
              closeModal={closeModal}
            />
          </SheetTitle>
          <SheetDescription className="text-xl font-bold text-default">
            Top up ad account
          </SheetDescription>
        </SheetHeader>
        <InitialFundingForm />
      </SheetContent>
    </Sheet>
  );
};

export default TopupModal;
