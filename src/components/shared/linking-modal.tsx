import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useModal } from "@/hooks/use-modal";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { LinkingModalContent } from "./link-modal-content";

export function LinkingModal() {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={closeModal}>
        <DrawerContent className="w-full mt-2 rounded-t-md h-fit sm:max-w-md md:max-w-md  mx-auto">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Add Meta Business Manager ID</DrawerTitle>
            <DrawerDescription>
              Complete the form to request connection to your Meta Business
              Manager account
            </DrawerDescription>
          </DrawerHeader>
          <LinkingModalContent onClose={() => closeModal()} />
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent className="w-full m-2 rounded-md h-fit sm:max-w-sm overflow-y-auto">
        <SheetHeader className="sr-only">
          <SheetTitle>Add Meta Business Manager ID</SheetTitle>
          <SheetDescription>
            Complete the form to request connection to your Meta Business
            Manager account
          </SheetDescription>
        </SheetHeader>
        <LinkingModalContent onClose={() => closeModal()} />
      </SheetContent>
    </Sheet>
  );
}
