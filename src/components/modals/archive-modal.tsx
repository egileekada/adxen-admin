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

const ArchiveModal = () => {
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
              Archive this ad account
            </span>
          </DialogTitle>
          <DialogDescription className="text-sm/5 font-normal inline-flex items-center justify-center text-muted text-center tracking-wide">
            Archived accounts will no longer appear in your active list, but all
            data and transaction history will remain accessible. You can restore
            this account at any time from your archived tab.
          </DialogDescription>
          <DialogFooter className="w-full mt-6">
            <div className="flex items-center justify-between w-full">
              <DialogClose asChild>
                <Button variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={() => {}}>Archive Ad</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ArchiveModal;
