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
import VerificationModal from "./home/verification";
import WalletModal from "./home/wallet";
import NotificationModal from "./home/notification";
import InviteTeam from "./team/inviteTeam";
import AddBankDetails from "./settings/addBankDetails";
import AddCrypto from "./settings/addCrypto";
import AddPayoneer from "./settings/addPayoneer";
import AddWise from "./settings/addWise";
import WalletWithdrawal from "./wallet/withdrawal";
import WithdrawalSuccess from "./wallet/withdrawalSucces";
import WithdrawalDetail from "./wallet/walletDetails";

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
      case "verfication":
        return <VerificationModal />;
      case "wallet":
        return <WalletModal />
      case "notification":
        return <NotificationModal /> 
      case "inviteteam":
        return <InviteTeam />
      case "addbankdetail":
        return <AddBankDetails />
      case "crypto":
        return <AddCrypto />
      case "payoneer":
        return <AddPayoneer />
      case "wise-account":
        return <AddWise />
      case "withdraw-balance":
        return <WalletWithdrawal />
      case "withdraw-success":
        return <WithdrawalSuccess />
      case "withdraw-details":
        return <WithdrawalDetail />
    }
  };

  return renderModal();
};

export default ModalProvider;
