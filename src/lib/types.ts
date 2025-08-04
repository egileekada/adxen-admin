export type WithdrawFormState = {
  currency: string;
  amount: number;
  setCurrency: (currency: string) => void;
  setAmount: (amount: number) => void;
};

export type CurrencyValue = {
  currency: string;
  amount: number | string;
};

export type InitialWithdrawFormState = {
  allocations: CurrencyValue;
  adBudget: CurrencyValue;
  setAllocations: (allocations: CurrencyValue) => void;
  setAdBudget: (adBudget: CurrencyValue) => void;
  reset: () => void;
};

export type InitialFundingFormState = {
  allocations: CurrencyValue;
  adBudget: CurrencyValue;
  setAllocations: (allocations: CurrencyValue) => void;
  setAdBudget: (adBudget: CurrencyValue) => void;
  reset: () => void;
};

export type TransferFundFormState = {
  sourceAdAccount: string;
  destinationAdAccount: string;
  amount: string;
  setSourceAdAccount: (sourceAdAccount: string) => void;
  setDestinationAdAccount: (destinationAdAccount: string) => void;
  setAmount: (amount: string) => void;
};

export type TransferFundFormValues = {
  sourceAccount: string;
  destinationAccount: string;
  allocation: CurrencyValue;
  receivingAmount: CurrencyValue;
  setSourceAccount: (account: string) => void;
  setDestinationAccount: (account: string) => void;
  setAllocation: (data: CurrencyValue) => void;
  setReceivingAmount: (data: CurrencyValue) => void;
};

export type AdAccountState = {
  adAccountName: string;
  timezone: string;
  currency: string;
  numOfAccounts: string;
  estimatedSpend: string;
  websiteUrl: string;
  targetCountries: string[];
  businessCategory: string;
};

export type ConfigureFormState = {
  adAccount: AdAccountState;
  initialFunding: InitialFundingFormState;
  setAdAccount: (adAccount: AdAccountState) => void;
  setInitialFunding: (initialFunding: InitialFundingFormState) => void;
};
