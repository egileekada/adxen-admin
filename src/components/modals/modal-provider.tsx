import { useModal } from "@/hooks/use-modal";
import TopupModal from "./topup-modal";
import ConfigureModal from "./configure-modal";
import FundTransferModal from "./fund-transfer-modal";
import WithdrawModal from "./withdraw-modal";

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
    }
  };

  return renderModal();
};

export default ModalProvider;
