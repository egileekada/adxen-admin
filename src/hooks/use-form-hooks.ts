import { create } from "zustand";

type WithdrawFormState = {
  currency: string;
  amount: number;
  setCurrency: (currency: string) => void;
  setAmount: (amount: number) => void;
};

export const useWithdrawFormStore = create<WithdrawFormState>((set) => ({
  currency: "",
  amount: 0,
  setCurrency: (currency) => set({ currency }),
  setAmount: (amount) => set({ amount }),
}));
