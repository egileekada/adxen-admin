import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal";
import warningIcon from "@/assets/warning.svg";

const UnlinkModal = () => {
  const { isOpen, closeModal } = useModal();
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogPortal>
        <DialogOverlay className="bg-black/15" />
        <DialogContent
          className="w-[340px] flex flex-col gap-1 items-center justify-center bg-linear-to-b from-70% from-[#FEF7EE] to-white"
          showCloseButton={false}
        >
          <img src={warningIcon} alt="warning" className="size-10 mb-4" />
          <DialogTitle className="flex flex-col items-center justify-center text-lg font-medium">
            <span className="text-base/6 text-default font-medium">
              Unlink Access Manager
            </span>
          </DialogTitle>
          <DialogDescription className="text-sm/5 font-normal inline-flex items-center justify-center text-muted text-center tracking-wide">
            If you unlink this Business Manager, the connected ad account will
            be paused immediately and cannot be used until it's linked again.
          </DialogDescription>
          <DialogFooter className="w-full mt-6">
            <div className="flex items-center justify-between w-full">
              <DialogClose asChild>
                <Button variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={() => {}}>Unlink Anyway</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default UnlinkModal;
