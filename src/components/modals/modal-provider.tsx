import { useModal } from "@/hooks/use-modal";
import TopupModal from "./topup-modal";
import ConfigureModal from "./configure-modal";
import FundTransferModal from "./transfer-fund-modal";
import WithdrawModal from "./withdraw-modal";
import ProcessingModal from "./processing-modal";
import ArchiveModal from "./archive-modal";
import TopupAdModal from "./topup-ad-modal";
import BusinessManagerModal from "./business-manager-modal";
import SubaccountRequestModal from "./subaccount-request-modal";

const ModalProvider = () => {
  const { type } = useModal();

  const renderModal = () => {
    switch (type) {
      case "topup":
        return <TopupModal />;
      case "configure":
        return <ConfigureModal />;
      case "fund-transfer":
        return <FundTransferModal />;
      case "withdraw":
        return <WithdrawModal />;
      case "processing":
        return <ProcessingModal />;
      case "archive":
        return <ArchiveModal />;
      case "topup-ad":
        return <TopupAdModal />;
      case "business-manager":
        return <BusinessManagerModal />;
      case "subaccount-request":
        return <SubaccountRequestModal />;
    }
  };

  return renderModal();
};

export default ModalProvider;
