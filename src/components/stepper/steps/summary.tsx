import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SiMeta } from "react-icons/si";
// import { Flag } from "react-country-flag";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const Summary = () => {
  return (
    <div className="px-2 pb-6 flex-1 sm:px-0 min-w-sm sm:min-w-md mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold text-text-default font-inter">
        Summary
      </h1>
      <p className="text-sm sm:text-base font-inter font-normal text-subtle mt-2 sm:mt-4 sm:max-w-md">
        Review your ad request and submit.
      </p>
      <Separator className="my-6" />
      <div className="mx-auto space-y-5 mt-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-sm font-inter font-semibold text-default">
              Platform
            </h2>
            <p className="inline-flex items-center gap-2 text-sm font-inter font-normal text-muted">
              <SiMeta className="size-4" />
              Meta
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-sm font-inter font-semibold text-default">
              Ad Account Name
            </h2>
            <p className="text-sm font-inter font-normal text-muted">
              Amazon MX-Summer Promo
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-sm font-inter font-semibold text-default">
              Timezone
            </h2>
            <p
              className="gap-2 text-wrap
              text-sm font-inter font-normal text-muted"
            >
              (GMT-5:00){" "}
              <span className="text-muted block">Guadalajara, Mexico City</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-sm font-inter font-semibold text-default">
              Currency
            </h2>
            <p className="text-sm font-inter font-normal text-muted">
              US - Dollars
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-sm font-inter font-semibold text-default">
              Business Category
            </h2>
            <p
              className="gap-2 text-wrap
              text-sm sm:text-base font-inter font-normal text-muted"
            >
              E-commerce
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-sm font-inter font-semibold text-default">
              Website / URL
            </h2>
            <p className="text-sm font-inter font-normal text-muted">
              https://amazon.com.mx
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-sm font-inter font-semibold text-default">
              Target Countries
            </h2>
            <ul className=" flex flex-wrap gap-2 text-wrap text-sm font-inter font-normal text-muted">
              <Badge className="inline-flex items-center gap-1 px-1 bg-white text-default border border-border-default drop-shadow-xs">
                <span>{getUnicodeFlagIcon("MX")}</span>
                Mexico
              </Badge>
              <Badge className="inline-flex items-center gap-1 px-1 bg-white text-default border border-border-default drop-shadow-xs">
                <span>{getUnicodeFlagIcon("US")}</span>
                United States
              </Badge>
            </ul>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-sm font-inter font-semibold text-default">
              Meta Business Manager ID
            </h2>
            <p className="text-sm font-inter font-normal text-muted">
              1234567890
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-sm font-inter font-semibold text-default">
              Facebook Pages
            </h2>
            <ul className="gap-2 text-wrap text-sm font-inter font-normal text-muted">
              <li>
                <p>facebook.com/amazonmx</p>
              </li>
              <li>
                <p>facebook.com/amazonmx</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-sm font-inter font-semibold text-default">
              Add Budget
            </h2>
            <p className="text-sm font-inter font-normal text-muted">$950</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
