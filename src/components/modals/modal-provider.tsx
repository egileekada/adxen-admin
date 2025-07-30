import { useModal } from "@/hooks/use-modal";
import TopupModal from "./topup-modal";
import ConfigureModal from "./configure-modal";
import FundTransferModal from "./transfer-fund-modal";
import WithdrawModal from "./withdraw-modal";
import ProcessingModal from "./processing-modal";
import ArchiveModal from "./archive-modal";

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
    }
  };

  return renderModal();
};

export default ModalProvider;
