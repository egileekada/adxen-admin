import { useModal } from "@/hooks/use-modal";
import { useIsMobile } from "@/hooks/use-mobile";
import SubaccountRequestForm from "../forms/subaccount-request-form";
import { DrawerLayout, SheetLayout } from "@/components/shared";

const SubaccountRequestModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();



  if (isMobile) {
    return (
      <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Get more accounts"]} header="Request more accounts" >
        <SubaccountRequestForm />
      </DrawerLayout>
      
    );
  }

  return (
    <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["View Details", "Get more accounts"]} header="Request more accounts" >
        <SubaccountRequestForm />
    </SheetLayout>
  );
};

export default SubaccountRequestModal;
