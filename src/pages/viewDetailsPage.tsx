import HeaderDescription from "@/components/shared/headerDecription";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CircleFlag } from "react-circle-flags";
import { RiMetaFill } from "@remixicon/react";

// @ts-expect-error - this is a mock data
const data = [
  {
    id: 1,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "approved",
    balance: 100,
  },
  {
    id: 2,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "at risk",
    balance: 100,
  },
  {
    id: 3,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "pre-approved",
    balance: 100,
  },
  {
    id: 4,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "revoked",
    balance: 100,
  },
  {
    id: 5,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "draft",
    balance: 100,
  },
  {
    id: 5,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "draft",
    balance: 100,
  },
  {
    id: 5,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "draft",
    balance: 100,
  },
  {
    id: 5,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "Google",
    timezone: "(GMT+2) Paris",
    status: "draft",
    balance: 100,
  },
];

function AdAccountPage() {
  return (
    <div className=" w-full h-full">
      <HeaderDescription
        title="Accounts"
        description="Account ID: 59953990240902"
        showActionButton={false}
        showCopyButton={true}
      />

      {/* add account tabs */}
      <div className="mt-6">
        <Tabs defaultValue="opened" className="w-full relative">
          {/* <div className="absolute top-1/2 -translate-y-1/2 mt-1.5 left-0 w-full h-[1px] bg-muted" /> */}
          <TabsList className="bg-white text-sm font-medium font-inter">
            <TabsTrigger
              value="opened"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Logs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="opened" className="mt-5 pb-10">
            <div className="flex flex-col gap-5 w-xl">
              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Platform
                  </p>
                  <div className="flex items-center gap-1 justify-center">
                    <RiMetaFill className="w-4 h-4 text-muted" />
                    <p className="text-muted text-sm font-inter font-normal">
                      Meta
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Ad account name
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    Amazon MX - Summer Promo
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Timezone
                  </p>
                  <p className="flex flex-col text-muted text-sm font-inter font-normal">
                    (GMT-05:00)
                    <span className="">Guadalajara, Mexico City</span>
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Currency
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    US - Dollars
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Business category
                  </p>
                  <p className="flex flex-col text-muted text-sm font-inter font-normal">
                    E-Commerce
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Website URL
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    https://www.amazon.com.mx
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-2">
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
                <div className="flex flex-col md:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Meta Business Manager ID
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    1234567890
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Facebook pages
                  </p>
                  <ul className="flex flex-col text-muted text-sm font-inter font-normal">
                    <li>facebook.com/amazonmx</li>
                    <li>facebook.com/amazonmx</li>
                  </ul>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Ad Budget
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    $950
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="requests" className="mt-5">
            {/* <DataTable columns={columns} data={data} /> */}
          </TabsContent>
          <TabsContent value="logs" className="mt-5">
            {/* <DataTable columns={columns} data={data} /> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdAccountPage;
