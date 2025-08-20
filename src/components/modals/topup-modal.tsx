import InitialFundingForm from "../forms/initial-funding-form";
import { DrawerLayout, SheetLayout } from "@/components/shared";
import { useModal } from "@/hooks/use-modal";
import { useIsMobile } from "@/hooks/use-mobile";

const TopupModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile)
    return (
   <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Fund Wallet"]} header="Top up ad account" >
      <InitialFundingForm />
   </DrawerLayout>
    );

  return (
    <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Fund Wallet"]} header="Top up ad account" >
      <InitialFundingForm />
    </SheetLayout>
  );
};


export default TopupModal;
