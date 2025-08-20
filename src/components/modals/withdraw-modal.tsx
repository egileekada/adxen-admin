import { useModal } from "@/hooks/use-modal";
import { useIsMobile } from "@/hooks/use-mobile";
import WithdrawForm from "../forms/withdraw-form";
import { DrawerLayout, SheetLayout } from "@/components/shared";


const TopupModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();


  if (isMobile) {
    return (
      <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Withdraw Funds"]} header="Withdraw funds to wallet" >
        <WithdrawForm />
      </DrawerLayout>

    );
  }

  return (
    <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Withdraw Funds"]} header="Withdraw funds to wallet" >
      <WithdrawForm />
    </SheetLayout>
  );
};

export default TopupModal;
