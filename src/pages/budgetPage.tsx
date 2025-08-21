import HeaderDescription from "@/components/shared/headerDecription";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { SelectContent } from "@radix-ui/react-select";
import {
  ChevronRight,
  ListFilter,
  MoreHorizontal,
  PlusIcon,
} from "lucide-react";
import TableFilter from "@/components/shared/table-filter";
import { useModal } from "@/hooks/use-modal";
import { BudgetAdAccountColumn, BudgetTable, BudgetTransactionColumn } from "@/components/ad-budgets";
import type { BudgetTableData } from "@/components/ad-budgets/budget-account-column";

const budgetData = [
  {
    id: 1,
    name: "Total Budget Allocated",
    amount: 1000,
  },
  {
    id: 2,
    name: "Total spent",
    amount: 0,
  },
  {
    id: 3,
    name: "Average Daily Spend",
    amount: 0,
    type: "average",
  },
];

const sortFilter = [
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

const transactionData = [
  {
    accountId: "123456789",
    accountName: "Amazon - Mexico",
    amount: "1000",
    type: "Deposit",
    status: "completed",
    date: "Feb 03, 2025 10:19am",
    action: null
  },
  {
    accountId: "123456789",
    accountName: "Amazon - Mexico",
    amount: "1000",
    type: "Deposit",
    status: "pending",
    date: "Feb 03, 2025 10:19am",
    action: null
  },
  {
    accountId: "123456789",
    accountName: "Amazon - Mexico",
    amount: "1000",
    type: "Deposit",
    status: "refunded",
    date: "Feb 03, 2025 10:19am",
    action: null
  },
];

const data: BudgetTableData[] = [
  {
    id: 1,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "google",
    domain: "amazon.com.nx",
    balance: 100,
    spent: 20,
  },
  {
    id: 2,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "meta",
    domain: "amazon.com.nx",
    balance: 100,
    spent: 20
  },
  {
    id: 3,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "snapchat",
    domain: "amazon.com.nx",
    balance: 100,
    spent: 10
  },
  {
    id: 4,
    accountId: "1234567890",
    accountName: "Amazon - Mexico",
    platform: "bing",
    domain: "amazon.com.nx",
    balance: 100,
    spent: 60
  },
];

const BudgetPage = () => {
  const { openModal } = useModal();
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-end gap-4 justify-between">
        <HeaderDescription
          title="Ad Budget"
          description="See how your wallet funds are distributed across your ad accounts. "
          showActionButton={false}
          showCopyButton={false}
        />
        <div className="flex items-center gap-1">
          <Button onClick={() => openModal("topup-ad")} className="h-9">
            <PlusIcon />
            <span>Top Up</span>
          </Button>
          <div className="flex items-center justify-start md:justify-end gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Last 7 days" />
              </SelectTrigger>
              <SelectContent className="w-40">
                {sortFilter.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              size="icon"
              className="bg-soft text-subtle hover:bg-soft hover:text-subtle h-9"
            >
              <ListFilter />
            </Button>
            <Button
              size="icon"
              className="bg-soft text-subtle hover:bg-soft hover:text-subtle"
            >
              <MoreHorizontal />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between border border-border rounded-lg mt-6">
        {budgetData.map((item) => (
          <div
            key={item.id}
            className="flex flex-1 w-full flex-col p-6 gap-4 last:border-b-0 border-border md:border-r md:last:border-r-0 border-b md:border-b-0"
          >
            <p className="text-muted text-xs whitespace-nowrap">{item.name}</p>
            <p className="text-2xl font-inter font-medium">
              {item.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
              {item.type === "average" ? (
                <span className="text-muted text-xs">
                  /<span className="text-muted text-xs">day</span>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 py-4 flex items-center justify-between border-t border-border">
        <Select>
          <SelectTrigger className="border-none shadow-none outline-none focus:ring-0 focus:ring-offset-0 focus-within:ring-0 focus-within:ring-offset-0">
            <SelectValue placeholder="Select a filter" />
            <SelectContent>
              <SelectGroup>
                {sortFilter.map((filter) => (
                  <SelectItem
                    key={filter.value}
                    value={filter.value}
                    className="text-subtle"
                  >
                    {filter.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
      {/* chart */}
      <div className=" border-b py-6 border-border">
        <div className="w-full h-100 bg-red-400"></div>
      </div>

      {/* tables */}
      <div className="mt-6">
        {/* first table */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-inter text-default font-medium">
              Recent transactions
            </h2>
            <Button variant="outline" size="sm" className="h-7">
              View All
              <ChevronRight className="w-4 h-4 text-muted" />
            </Button>
          </div>
          {/* use account request table fro transaction table or modify using another folder */}
          <BudgetTable columns={BudgetTransactionColumn} data={transactionData}/>
        </div>

        {/* second table */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-inter text-default font-medium">
              Ad accounts
            </h2>
            <Button variant="outline" size="sm" className="h-7">
              View All
              <ChevronRight className="w-4 h-4 text-muted" />
            </Button>
          </div>
          <TableFilter showRefreshButton={false} />
          <BudgetTable columns={BudgetAdAccountColumn} data={data}/>
        </div>
      </div>

      {/* end tables */}
    </div>
  );
};

export default BudgetPage;
