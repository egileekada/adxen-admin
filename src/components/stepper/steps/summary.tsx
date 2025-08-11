import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RefreshCcw } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { RiMetaFill } from "react-icons/ri";

import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const isSubaccount = location.search.includes("tab=request");

  return (
    <div className="mb-6 min-w-[480px] sm:min-w-[520px]">
      <h1 className="text-2xl sm:text-3xl font-semibold text-default font-inter">
        Summary
      </h1>
      <p className="w-full text-sm sm:text-base font-inter font-normal text-subtle mt-2 sm:mt-4">
        Review your selections before proceeding.
      </p>
      <Separator className="bg-border-darker my-6" />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2 ">
          <div className="flex flex-1 items-start flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Platform
            </p>
            <div className="flex items-center gap-1 justify-center">
              <RiMetaFill className="w-4 h-4 text-muted" />
              <p className="text-muted text-sm font-inter font-normal">Meta</p>
            </div>
          </div>
          <div className="flex w-[250px] items-start flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Ad account name
            </p>
            <p className="text-muted text-sm font-inter font-normal">
              Amazon MX - Summer Promo
            </p>
          </div>
        </div>
        {isSubaccount && (
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
            <div className="flex flex-col gap-1">
              <p className="text-default text-sm font-inter font-semibold">
                Status
              </p>
              <Badge
                variant="outline"
                className="text-sm font-inter font-normal bg-badge-orange-10 text-basic-orange"
              >
                <RefreshCcw className="size-4 text-basic-orange" />
                <p className="text-xs font-inter font-normal">Pending</p>
              </Badge>
            </div>
            <div className="flex w-[250px] items-start  flex-col gap-1">
              <p className="text-default text-sm font-inter font-semibold">
                No. of accounts
              </p>
              <p className="text-muted text-sm font-inter font-normal">2</p>
            </div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
          <div className="flex flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Timezone
            </p>
            <p className="flex flex-col text-muted text-sm font-inter font-normal">
              (GMT-05:00)
              <span className="">Guadalajara, Mexico City</span>
            </p>
          </div>
          <div className="flex w-[250px] items-start flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Currency
            </p>
            <p className="text-muted text-sm font-inter font-normal">
              US - Dollars
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
          <div className="flex flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Business category
            </p>
            <p className="flex flex-col text-muted text-sm font-inter font-normal">
              E-Commerce
            </p>
          </div>
          <div className="flex w-[250px] items-start flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Website URL
            </p>
            <p className="text-muted text-sm font-inter font-normal">
              https://www.amazon.com.mx
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
          <div className="flex flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Target Countries
            </p>
            <div className="flex flex-col gap-1 text-default text-sm font-inter font-medium">
              <Badge
                variant="outline"
                className="text-sm font-inter font-normal p-1"
              >
                <div className="flex items-center gap-1">
                  <CircleFlag countryCode="mx" className="size-3" />
                  <p className="text-xs text-muted">Mexico</p>
                </div>
              </Badge>
              <Badge
                variant="outline"
                className="text-sm font-inter font-normal p-1"
              >
                <div className="flex items-center gap-1">
                  <CircleFlag countryCode="us" className="size-3" />
                  <p className="text-xs text-muted">United States</p>
                </div>
              </Badge>
            </div>
          </div>
          <div className="flex w-[250px] items-start  flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Meta Business Manager ID
            </p>
            <p className="text-muted text-sm font-inter font-normal">
              1234567890
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
          <div className="flex flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Facebook pages
            </p>
            <ul className="flex flex-col text-muted text-sm font-inter font-normal">
              <li>facebook.com/amazonmx</li>
              <li>facebook.com/amazonmx</li>
            </ul>
          </div>
          <div className="flex w-[250px] items-start  flex-col gap-1">
            <p className="text-default text-sm font-inter font-semibold">
              Ad Budget
            </p>
            <p className="text-muted text-sm font-inter font-normal">$950</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
