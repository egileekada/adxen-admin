import CurrencyCombo from "@/components/shared/currency-selector";
import { Button } from "../ui/button";

const WithdrawForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 px-6">
        <label className="text-sm font-medium font-inter text-default">
          How much do you want to withdraw?
        </label>
        <CurrencyCombo />
      </div>

      <p className="text-sm font-inter font-normal text-muted mt-2 px-6">
        Ad Wallet Balance:{" "}
        <span className="text-blue-infomative tracking-wide">$1234.56</span>
      </p>

      <div className="p-6 mt-6  bg-[#27272A1A]/10 flex item-center justify-between gap-2 border-t border-[#27272A1A] pt-6">
        <Button
          variant="outline"
          type="button"
          size="sm"
          className=""
          onClick={() => {}}
        >
          Cancel
        </Button>
        <Button size="sm" className="" type="submit">
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default WithdrawForm;
