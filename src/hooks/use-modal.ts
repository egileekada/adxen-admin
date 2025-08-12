import { create } from "zustand";

export type ModalType =
  | "topup"
  | "configure"
  | "fund-transfer"
  | "withdraw"
  | "processing"
  | "archive"
  | "topup-ad"
  | "business-manager"
  | "subaccount-request"
  | "verfication"
  | "notification"
  | "inviteteam"
  | "addbankdetail"
  | "crypto"
  | "payoneer"
  | "wise-account"
  | "wallet" 
  | "withdraw-balance"
  | "withdraw-success"
  | "withdraw-details"; 

type ModalStore = {
  isOpen: boolean;
  type?: ModalType;
  openModal: (type?: ModalType) => void;
  closeModal: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: (type?: ModalType) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: undefined }),
}));
