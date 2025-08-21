import { useModal } from "@/hooks/use-modal";
import { useIsMobile } from "@/hooks/use-mobile";

import TransferFundForm from "../forms/transfer-fund-form";
import { DrawerLayout, SheetLayout } from "../shared";

const TransferFundModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();
  console.log(isMobile);

  if (isMobile)
    return (
  <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Transfer Funds"]} header="Transfer funds to ad account" >
    <TransferFundForm />
  </DrawerLayout>

    );

  return (
    <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Transfer Funds"]} header="Transfer funds to ad account" >
      <TransferFundForm />
    </SheetLayout>
    
  );
};

export default TransferFundModal;
