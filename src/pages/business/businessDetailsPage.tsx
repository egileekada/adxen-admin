import { AccessLogTable } from "@/components/shared/data-tables/access-log-table";
import { AdAccountTable } from "@/components/shared/data-tables/adaccount-table";
import HeaderDescription from "@/components/shared/headerDecription";
import TableFilter from "@/components/shared/table-filter";
import { accessLogColumns } from "@/components/shared/tables-columns/access-log-column";
import { adAccountColumns } from "@/components/shared/tables-columns/adaccount-column";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ListFilter, MoreHorizontal, Plus } from "lucide-react";
import { SiMeta } from "react-icons/si";

const adAccountData = [
  {
    id: 1,
    accountId: "56704445",
    accountName: "Amazon - Mexico",
    status: "pending",
    domain: "nike.eu",
    balance: 230,
  },
  {
    id: 2,
    accountId: "56704445",
    accountName: "Amazon - Mexico",
    status: "active",
    domain: "nike.eu",
    balance: 230,
  },
  {
    id: 3,
    accountId: "56704445",
    accountName: "Amazon - Mexico",
    status: "suspended",
    domain: "nike.eu",
    balance: 230,
  },
  {
    id: 4,
    accountId: "56704445",
    accountName: "Amazon - Mexico",
    status: "at-risk",
    domain: "nike.eu",
    balance: 230,
  },
];

const logData = [
  {
    id: 1,
    datehour: "2025-01-01 12:00:00",
    adaccountid: "56704445",
    adaccountname: "Amazon - Mexico",
    status: "passed",
    note: "Successfully linked ad account",
  },
  {
    id: 2,
    datehour: "2025-01-01 12:00:00",
    adaccountid: "56704445",
    adaccountname: "Amazon - Mexico",
    status: "failed",
    note: "Failed to link ad account",
  },
  {
    id: 3,
    datehour: "2025-01-01 12:00:00",
    adaccountid: "56704445",
    adaccountname: "Amazon - Mexico",
    status: "pending",
    note: "Pending to link ad account",
  },
];

const BusinessDetailsPage = () => {
  const copyId = "123456765434998";
  return (
    <div>
      <HeaderDescription
        title="Zalando Meta BM"
        description={`access Id ${copyId}`}
        showActionButton={false}
        showCopyButton
      />

      <div className="flex items-center gap-1 mt-4 sm:hidden">
        <Button>
          <Plus className="size-4" />
          <span>Link Ad Account</span>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-soft text-subtle hover:bg-soft hover:text-subtle">
              <MoreHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-60 p-0 overflow-hidden">
            <div className="flex flex-col items-start gap-2 px-2 py-1.5">
              <Button className="w-full inline-flex items-center justify-start p-2 gap-2 text-sm font-inter font-normal bg-white text-default hover:bg-soft hover:text-subtle border-none shadow-none rounded-sm">
                <Plus />
                <span>Create new request</span>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-6">
        <Tabs className="w-full relative" defaultValue="overview">
          <TabsList className=" bg-white text-sm font-medium font-inter border-b">
            <TabsTrigger
              value="overview"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Overview
            </TabsTrigger>

            <TabsTrigger
              value="adaccounts"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Ad Accounts
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none"
            >
              Logs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="mt-6 w-3/5 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Platform
                  </p>
                  <div className="flex items-center gap-1 justify-center">
                    <SiMeta className="w-4 h-4 text-muted" />
                    <p className="text-muted text-sm font-inter font-normal">
                      Meta
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Ad account name
                  </p>
                  <p className="text-muted text-sm font-inter font-normal">
                    Zalando Meta BM
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Date Created
                  </p>
                  <p className="flex flex-col text-muted text-sm font-inter font-normal">
                    June 10, 2025
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Status
                  </p>
                  <p className="inline-flex gap-1 bg-green-50 text-basic-green p-1 text-xs rounded-md font-inter font-medium border">
                    <Check className="size-4" />
                    Active
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-default text-sm font-inter font-semibold">
                    Ad Accounts
                  </p>
                  <p className="flex flex-col text-muted text-sm font-inter font-normal">
                    2
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="adaccounts">
            <div className="mt-6">
              <TableFilter showRefreshButton={false} />
              <AdAccountTable columns={adAccountColumns} data={adAccountData} />
            </div>
          </TabsContent>
          <TabsContent value="logs">
            <div className="mt-6">
              <div className="flex flex-col flex-wrap md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between mb-4">
                <div className="flex items-center flex-wrap gap-1">
                  <Button
                    variant="ghost"
                    className="bg-white border border-dashed border-border-darker rounded-full text-muted py-1 px-2"
                  >
                    <ListFilter className="w-4 h-4" />
                    Date
                  </Button>
                </div>
              </div>
              <AccessLogTable columns={accessLogColumns} data={logData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
