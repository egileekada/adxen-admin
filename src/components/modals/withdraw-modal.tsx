import { useModal } from "@/hooks/use-modal";
import { Drawer, DrawerDescription, DrawerTitle } from "../ui/drawer";
import { DrawerContent } from "../ui/drawer";
import { DrawerHeader } from "../ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import WithdrawForm from "../forms/withdraw-form";
import ModalTitle from "./modal-title";

const TopupModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 rounded-t-md sm:max-w-md h-fit mx-auto overflow-hidden">
          <DrawerHeader className="relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2 items-start">
            <DrawerTitle>
              <ModalTitle
                breadcrumb={["View Details", "Withdraw Funds"]}
                closeModal={closeModal}
              />
            </DrawerTitle>
            <DrawerDescription className="text-xl font-bold text-default">
              Withdraw funds to wallet
            </DrawerDescription>
          </DrawerHeader>
          <WithdrawForm />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-[430px] mt-2 mr-2 rounded-md h-fit sm:max-w-md mx-auto overflow-hidden">
        <SheetHeader className="relative w-full bg-[#27272A1A]/10 border-b border-[#27272A1A] p-6 flex flex-col gap-2 items-start">
          <SheetTitle>
            <ModalTitle
              breadcrumb={["View Details", "Withdraw Funds"]}
              closeModal={closeModal}
            />
          </SheetTitle>
          <SheetDescription className="text-xl font-bold text-default">
            Withdraw funds to wallet
          </SheetDescription>
        </SheetHeader>
        <WithdrawForm />
      </SheetContent>
    </Sheet>
  );
};

export default TopupModal;
