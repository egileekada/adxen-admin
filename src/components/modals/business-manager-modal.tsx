import { useModal } from "@/hooks/use-modal";
import {DrawerLayout, SheetLayout} from "@/components/shared"

import { useIsMobile } from "@/hooks/use-mobile";
import BusinessManagerForm from "../forms/business-manager-form";

const BusinessManagerModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Add access manager", "Connect account"]} header="Add access manager id">
        <BusinessManagerForm/>
      </DrawerLayout>
      
    );

  return (
    <SheetLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Add access manager", "Connect account"]} header="Add access manager id">
      <BusinessManagerForm/>
    </SheetLayout>
  );
};

export default BusinessManagerModal;
