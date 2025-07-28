import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal";
import { RiLoader2Fill } from "@remixicon/react";
import { useEffect } from "react";

const ProcessingModal = () => {
  const { closeModal, isOpen } = useModal();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  }, [isOpen, closeModal]);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogPortal>
        <DialogOverlay className="bg-black/15" />
        <DialogContent
          className="sm:max-w-[425px] flex flex-col items-center justify-center gap-4"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Processing transaction</DialogTitle>
          <DialogDescription>
            <RiLoader2Fill className=" size-8 text-default" />
          </DialogDescription>
          <p className="text-sm sm:text-base  text-center font-medium text-default">
            Processing transaction...
          </p>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ProcessingModal;
