import type {
  AdAccountState,
  InitialFundingFormState,
  InitialWithdrawFormState,
  TransferFundFormValues,
  WithdrawFormState,
} from "@/lib/types";
import { create } from "zustand";

export const useWithdrawFormStore = create<WithdrawFormState>((set) => ({
  currency: "",
  amount: 0,
  setCurrency: (currency) => set({ currency }),
  setAmount: (amount) => set({ amount }),
}));

export const initialWithdrawFormState = create<InitialWithdrawFormState>(
  (set) => ({
    allocations: { currency: "USD", amount: 0 },
    adBudget: { currency: "USD", amount: 0 },
    setAllocations: (allocations) => set({ allocations }),
    setAdBudget: (adBudget) => set({ adBudget }),
    reset: () =>
      set({
        allocations: { currency: "USD", amount: 0 },
        adBudget: { currency: "USD", amount: 0 },
      }),
  })
);

export const useTransferFundFormStore = create<TransferFundFormValues>(
  (set) => ({
    sourceAccount: "",
    destinationAccount: "",
    allocation: { currency: "USD", amount: 0 },
    receivingAmount: { currency: "USD", amount: 0 },
    setSourceAccount: (account) => set({ sourceAccount: account }),
    setDestinationAccount: (account) => set({ destinationAccount: account }),
    setAllocation: (data) => set({ allocation: data }),
    setReceivingAmount: (data) => set({ receivingAmount: data }),
  })
);

export const useAdAccountFormStore = create<AdAccountState>((set) => ({
  adAccountName: "",
  timezone: "",
  currency: "",
  numOfAccounts: "",
  estimatedSpend: "",
  websiteUrl: "",
  targetCountries: [],
  businessCategory: "",
  reset: () =>
    set({
      adAccountName: "",
      timezone: "",
      currency: "",
      numOfAccounts: "",
    }),
}));

export const useInitialFundingFormStore = create<InitialFundingFormState>(
  (set) => ({
    allocations: { currency: "USD", amount: 0 },
    adBudget: { currency: "USD", amount: 0 },
    setAllocations: (allocations) => set({ allocations }),
    setAdBudget: (adBudget) => set({ adBudget }),
    reset: () =>
      set({
        allocations: { currency: "USD", amount: 0 },
        adBudget: { currency: "USD", amount: 0 },
      }),
  })
);
