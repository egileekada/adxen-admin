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
  | "subaccount-request";

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
