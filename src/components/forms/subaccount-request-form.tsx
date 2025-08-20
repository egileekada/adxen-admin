import { useState } from "react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "../ui/select";
import CurrencyCombo from "../shared/currency-selector";
import { CustomButton } from "../custom";

type Allocation = {
  name: string;
  amount: number;
  currency: string;
};

const SubaccountRequestForm = () => {
  const [numberOfAccounts, setNumberOfAccounts] = useState<number>(1);
  const [allocations, setAllocations] = useState<Allocation[]>([
    { name: "", amount: 0, currency: "USD" },
  ]);

  const handleAddAllocation = (count: number) => {
    setNumberOfAccounts(count);
    setAllocations((prev) => {
      const updated = [...prev];
      while (updated.length < count) {
        updated.push({ name: "", amount: 0, currency: "USD" });
      }
      return updated.slice(0, count);
    });
  };

  const handleChange = (
    index: number,
    field: keyof Allocation,
    value: string | number
  ) => {
    const updated = [...allocations];
    updated[index] = { ...updated[index], [field]: value };
    setAllocations(updated);
  };

  return (
    <div className="overflow-y-auto">
      <form>
        <div className="mb-4 flex flex-col gap-2 px-6">
          <label htmlFor="numberOfAccounts" className="text-sm font-medium">
            How many ads accounts?
          </label>
          <Select
            name="numberOfAccounts"
            value={numberOfAccounts.toString()}
            onValueChange={(value) => handleAddAllocation(Number(value))}
          >
            <SelectTrigger className="bg-soft w-full h-7">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3 px-6">
          <div className="mb-2 flex flex-col gap-2">
            <h1 className="text-default text-base font-semibold">
              How much do you want to allocate?
            </h1>
            <p className="text-muted text-sm font-normal">
              Wallet balance:{" "}
              <span className="text-blue-infomative">$24.6009.55</span>
            </p>
          </div>
          {allocations.map((allocation, index) => (
            <div key={index} className="mb-2 flex flex-col gap-2">
              <label
                htmlFor={`account${index + 1}`}
                className="text-sm font-medium"
              >
                Account {index + 1}#
              </label>
              <CurrencyCombo
                onChange={(value) =>
                  handleChange(index, "amount", value.amount)
                }
                value={{
                  currency: allocation.currency,
                  amount: allocation.amount.toString(),
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center px-6 py-4 border-t border-border-darker">
          <CustomButton variant="outline" onClick={() => {}}>
            Cancel
          </CustomButton>
          <CustomButton type="submit">Proceed</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SubaccountRequestForm;
