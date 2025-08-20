import { useModal } from "@/hooks/use-modal";
import { useIsMobile } from "@/hooks/use-mobile";
import TopupAdForm from "../forms/topup-ad-form";
import {DrawerLayout, SheetLayout} from "@/components/shared"

const TopupAdModal = () => {
  const { isOpen, closeModal } = useModal();
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <DrawerLayout isOpen={isOpen} closeModal={closeModal} breadcrumb={["Ad Budget", "Top"]}>
        <TopupAdForm />
      </DrawerLayout>
    );

  return (
    <SheetLayout  isOpen={isOpen} closeModal={closeModal} breadcrumb={["Ad Budget", "Top"]}>
      <TopupAdForm />
    </SheetLayout>
  );
};

export default TopupAdModal;
