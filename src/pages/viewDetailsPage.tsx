import { CircleFlag } from "react-circle-flags";
import {
  ArrowRightLeft,
  Check,
  Plus,
  RefreshCcw,
  Settings,
} from "lucide-react";
import {
  RiAttachment2,
  RiBankLine,
  RiInboxArchiveLine,
  RiMetaFill,
  RiUserLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { ListFilter, MoreHorizontal } from "lucide-react";

import HeaderDescription from "@/components/shared/headerDecription";
import Stats from "@/components/shared/stats";
import Charts from "@/components/shared/charts";
// import { TransactionTable } from "@/components/accounts/account-request-table";
// import { transactionColumns } from "@/components/shared/tables-columns/transaction-column";

import { LogTable } from "@/components/shared/data-tables/log-table";
import { logColumns } from "@/components/shared/tables-columns/log-column";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModal, type ModalType } from "@/hooks/use-modal";
import { SubaccountTable } from "@/components/shared/data-tables/subaccount-table";
import { subaccountColumns } from "@/components/shared/tables-columns/subaccount-column";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AccountRequestTable, AccountTransactionColumn } from "@/components/accounts";

// const data = [
//   {
//     id: 1,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "approved",
//     balance: 100,
//   },
//   {
//     id: 2,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "at risk",
//     balance: 100,
//   },
//   {
//     id: 3,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "pre-approved",
//     balance: 100,
//   },
//   {
//     id: 4,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "revoked",
//     balance: 100,
//   },
//   {
//     id: 5,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "draft",
//     balance: 100,
//   },
//   {
//     id: 5,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "draft",
//     balance: 100,
//   },
//   {
//     id: 5,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "draft",
//     balance: 100,
//   },
//   {
//     id: 5,
//     accountId: "1234567890",
//     accountName: "Amazon - Mexico",
//     platform: "Google",
//     timezone: "(GMT+2) Paris",
//     status: "draft",
//     balance: 100,
//   },
// ];

const stats = [
  {
    name: "Total Funded",
    value: "$2,950.00",
  },
  {
    name: "Total Add spending",
    value: "$1,800.00",
  },
  {
    name: "Total Transferred out",
    value: "$0.00",
  },
];

const paymentData = [
  {
    description: "Payment",
    amount: 100,
    payment: "Success",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
  {
    description: "Payment",
    amount: 100,
    payment: "Pending",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
  {
    description: "Payment",
    amount: 100,
    payment: "Success",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
  {
    description: "Payment",
    amount: 100,
    payment: "Failed",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
  {
    description: "Payment",
    amount: 100,
    payment: "Refunded",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
  {
    description: "Payment",
    amount: 100,
    payment: "Refunded",
    method: "Paypal",
    fee: 10,
    date: "12/07/2025 12:00:00",
  },
];

const timeFilter = [
  {
    name: "Last 7 days",
    value: "last-7-days",
  },
  {
    name: "Last 30 days",
    value: "last-30-days",
  },
  {
    name: "Last 90 days",
    value: "last-90-days",
  },
];

const logData = [
  {
    timestamp: "Apr 26, 2023 10:30 AM",
    event: "Ad Account Created",
    triggerBy: "John Doe",
  },
  {
    timestamp: "Apr 26, 2023 10:30 AM",
    event: "Page linked",
    triggerBy: "Jane Doe",
  },
  {
    timestamp: "Apr 27, 2023 10:30 AM",
    event: "Balance Topup",
    triggerBy: "System",
  },
  {
    timestamp: "Apr 28, 2023 10:30 AM",
    event: "Status Changed",
    triggerBy: "Anyaogu Doe",
  },
];

const subaccountData = [
  {
    subaccountId: "1234567890",
    accountName: "Amazon - Mexico",
    balance: "$100",
    status: "approved",
    createdOn: "Feb 12, 2025",
  },
  {
    subaccountId: "1234567890",
    accountName: "Amazon - Mexico",
    balance: "$100",
    status: "approved",
    createdOn: "Feb 12, 2025",
  },
  {
    subaccountId: "1234567890",
    accountName: "Amazon - Mexico",
    balance: "$100",
    status: "pending",
    createdOn: "Feb 12, 2025",
  },
];

function AdAccountPage() {
  const { openModal } = useModal();
  const location = useLocation();

  const isSubaccount = location.search.includes("tab=request");
  console.log(isSubaccount);

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (type: ModalType) => {
    openModal(type);
  };

  const handleMore = (type: ModalType) => {
    setIsOpen((prev) => !prev);
    openModal(type);
  };

  return (
    <div className=" w-full h-full">
      <HeaderDescription
        title="Account Promo - Summer"
        description="Account ID: 59953990240902"
        showActionButton={false}
        showCopyButton={true}
      />
      <div className="flex items-center gap-1 mt-4 sm:hidden">
        <Button
          onClick={() =>
            isSubaccount
              ? handleModal("subaccount-request")
              : handleModal("topup")
          }
        >
          <Plus className="size-4" />
          <span>{isSubaccount ? "Get more account" : "Add funds"}</span>
        </Button>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button className="bg-soft text-subtle hover:bg-soft hover:text-subtle">
              <MoreHorizontal />
            </Button>
          </PopoverTrigger>
          {!isSubaccount &&
            <PopoverContent align="start" className="w-60 p-0 overflow-hidden">
            <div className="flex flex-col items-start gap-2 px-2 py-1.5">
        
              <Button
                className="w-full inline-flex items-center justify-start gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm"
                onClick={() => handleMore("fund-transfer")}
              >
                <ArrowRightLeft className="size-4" />
                <span>Transfer funds</span>
              </Button>
              <Button
                className="w-full inline-flex items-center justify-start gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm"
                onClick={() => handleMore("configure")}
              >
                <Settings className="size-4" />
                <span>Edit configuration</span>
              </Button>
              <Button className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm">
                <Plus />
                <span>Create new request</span>
              </Button>
              <Button
                className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm"
                onClick={() => handleMore("withdraw")}
              >
                <RiBankLine className="size-4" />
                <span>Withdraw Balance</span>
              </Button>
              <Button className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm">
                <RiAttachment2 className="size-4" />
                <span>Manage connections</span>
              </Button>
              <Button className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm">
                <RiUserLine className="size-4" />
                <span>Access / Permission</span>
              </Button>
              <Button
                className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm"
                onClick={() => handleMore("archive")}
              >
                <RiInboxArchiveLine className="size-4" />
                <span>Archive account</span>
              </Button>
            </div>
          </PopoverContent>
            }
        </Popover>
      </div>

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
            {!isSubaccount && (
              <TabsTrigger
                value="transactions"
                className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
              >
                Transactions
              </TabsTrigger>
            )}
            {!isSubaccount && (
              <TabsTrigger
                value="subaccounts"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
              >
                Subaccounts
              </TabsTrigger>
            )}

            <TabsTrigger
              value="logs"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Logs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="opened" className="mt-5 pb-10">
            <div className="max-w-[720px] space-y-6">
              <div className="flex gap-3 items-stretch rounded-sm p-3 w-full bg-red-100 max-w-[720px] shadow-sm border border-border-darker">
                <div className="min-w-1 rounded-full  bg-basic-red" />
                <div className="inline-flex flex-wrap items-center text-sm text-subtle">
                  <p className="text-sm">
                    <span className="text-subtle font-semibold">
                      This request was rejected:
                    </span>{" "}
                    The details you provided couldn't be approved. You can
                    review the reason below and make the necessary changes to
                    resubmit. If you'd rather start fresh, you can also{" "}
                    <span className="underline text-destructive">
                      create a new request
                    </span>{" "}
                    with updated information..
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 max-w-[520px]">
                <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2 ">
                  <div className="flex flex-1 items-start flex-col gap-1">
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
                        <p className="text-xs font-inter font-normal">
                          Pending
                        </p>
                      </Badge>
                    </div>
                    <div className="flex w-[250px] items-start  flex-col gap-1">
                      <p className="text-default text-sm font-inter font-semibold">
                        No. of accounts
                      </p>
                      <p className="text-muted text-sm font-inter font-normal">
                        3
                      </p>
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
                    <p className="text-muted text-sm font-inter font-normal">
                      $950
                    </p>
                  </div>
                </div>
                {!isSubaccount && (
                  <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-default text-sm font-inter font-semibold">
                        Status
                      </p>
                      <Badge
                        variant="outline"
                        className="text-sm font-inter font-normal bg-badge-green-10 text-basic-green"
                      >
                        <Check className="size-4 text-basic-green" />
                        <p className="text-xs font-inter font-normal">Active</p>
                      </Badge>
                    </div>
                    <div className="flex w-[250px] items-start  flex-col gap-1">
                      <p className="text-default text-sm font-inter font-semibold">
                        Ad budget
                      </p>
                      <p className="text-muted text-sm font-inter font-normal">
                        $950
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="transactions" className="mt-5">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-start md:justify-end gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Payment Status</SelectLabel>
                      {timeFilter.map((filter) => (
                        <SelectItem key={filter.value} value={filter.value}>
                          {filter.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button className="bg-soft text-subtle hover:bg-soft hover:text-subtle">
                  <ListFilter />
                </Button>
                <Button className="bg-soft text-subtle hover:bg-soft hover:text-subtle">
                  <MoreHorizontal />
                </Button>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border border-border rounded-lg">
                {stats.map((stat) => (
                  <Stats key={stat.name} name={stat.name} value={stat.value} />
                ))}
              </div>
              <Charts />
              <div className="pb-6">
                <h1 className="mb-4 text-lg text-default font-semibold">
                  Recent Transactions
                </h1>
                <AccountRequestTable columns={AccountTransactionColumn} data={paymentData}/>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="subaccounts" className="mt-5">
            <SubaccountTable
              columns={subaccountColumns}
              data={subaccountData}
            />
          </TabsContent>
          <TabsContent value="logs" className="mt-5">
            <div>
              <h1 className="mb-4 text-lg text-default">Recent Logs</h1>
              <LogTable columns={logColumns} data={logData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdAccountPage;
