import { AffiliateCommissionColumns, AffiliateTable, AffiliateReferralColumn } from "@/components/affiliate";
import HeaderDescription from "@/components/shared/headerDecription";
import TableFilter from "@/components/shared/table-filter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AffiliatePage = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <HeaderDescription
          title="Affiliate Program"
          description="Share your referral link and earn commission whenever someone you invite funds their wallet. "
          showActionButton={false}
          showCopyButton={false}
        />
      </div>
      {/* stats for billing */}
      <div className="mt-8 flex flex-col md:flex-row justify-between border border-gray-200 rounded-lg">
        <div className="flex-1 flex flex-col gap-1.5 p-6 border-b md:border-b-0 md:border-r">
          <p className="text-xs font-normal text-muted">Total Earning</p>
          <p className="text-2xl font-medium text-default">$0.00</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 p-6  border-gray-200 border-b md:border-b-0 md:border-r ">
          <p className="text-xs font-normal text-muted">Available Balance</p>
          <p className="text-2xl font-medium text-default">$0.00</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 p-6  border-gray-200 border-b md:border-b-0 md:border-r ">
          <p className="text-xs font-normal text-muted">Referral Bonus</p>
          <p className="text-2xl font-medium text-default">0</p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 flex justify-between bg-[#F4F4F5] px-5 py-5.5 rounded-[8px]">
          <div className="relative">
            <h3 className="text-default text-base font-semibold">
              Your Referral Link
            </h3>
            <p className="mt-1.25 mb-5 flex flex-col items-start text-muted text-xs">
              Share this link to invite users and start earning.
              <span className="text-blue-infomative underline">
                https://adxens.com/register?ref=stefan123
              </span>
            </p>
            <Button className="bg-white rounded-sm shadow-sm h-[32px]  text-sm text-default hover:bg-white/90">
              Copy Link
            </Button>
          </div>
          <div className="w-[65px] h-[70px] md:w-[81px] md:h-[87px]">
            <img src="/images/copy.png" alt="copy" className="size-full" />
          </div>
        </div>
        <div className="flex-1 flex justify-between bg-[#F4F4F5] px-5 py-5.5 rounded-[8px]">
          <div className="relative">
            <h3 className="text-default text-base font-semibold">
              Withdraw Your Commission
            </h3>
            <p className="mt-1.25 mb-5 flex flex-col items-start text-muted text-xs max-w-[374px]">
              Withdrawals are sent to your wallet instantly. From there, you can
              cash out to bank or crypto.
            </p>
            <Button className="bg-white rounded-sm shadow-sm h-[32px]  text-sm text-default hover:bg-white/90">
              Request payout
            </Button>
          </div>
          <div className=" w-[65px] h-[70px] md:w-[81px] md:h-[87px]">
            <img src="/images/bank.png" alt="copy" className="size-full" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Tabs defaultValue="commission">
          <TabsList className="bg-white text-sm font-medium font-inter border-b border-muted">
            <TabsTrigger
              value="commission"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
            >
              Commission
            </TabsTrigger>
            <TabsTrigger
              value="referral-list"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
            >
              Referral List
            </TabsTrigger>
          </TabsList>
          <TabsContent value="commission">
            <div className="mt-4.5 space-y-4.5">
              <h2 className="text-base font-semibold text-default">
                Recent Commission
              </h2>
              <TableFilter
                options={["Payment", "Date", "Status"]}
                showRefreshButton={false}
              />
              <AffiliateTable
                columns={AffiliateCommissionColumns}
                data={commissionData}
              />
            </div>
          </TabsContent>
          <TabsContent value="referral-list">
            <div className="mt-4.5 space-y-4.5">
              <h2 className="text-base font-semibold text-default">
                All Referrals
              </h2>
              <AffiliateTable columns={AffiliateReferralColumn} data={referralData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AffiliatePage;

const referralData = [
  {
    referralName: "John Doe",
    type: "thatfield@yahoo.com",
    status: "active",
    total_topup: "$1000",
    commission: "$25",
    date_joined: "Feb 03, 2025 10:19 am",
  },
  {
    referralName: "John Doe",
    type: "thatfield@yahoo.com",
    status: "no top-ups",
    total_topup: "$1000",
    commission: "$25",
    date_joined: "Feb 03, 2025 10:19 am",
  },
  {
    referralName: "John Doe",
    type: "thatfield@yahoo.com",
    status: "inactive",
    total_topup: "$1000",
    commission: "$25",
    date_joined: "Feb 03, 2025 10:19 am",
  },
];

const commissionData = [
  {
    date: "2025-01-01",
    type: "Sign up",
    referralName: "John Doe",
    commission: "",
    status: "pending",
    payout: "",
    payoutDate: "2025-01-01",
  },
  {
    date: "2025-01-01",
    type: "Sign up",
    referralName: "John Doe",
    commission: "$100",
    status: "earned",
    payout: "paid",
    payoutDate: "2025-01-01",
  },
  {
    date: "2025-01-01",
    type: "Top up",
    referralName: "John Doe",
    commission: "",
    status: "pending",
    payout: "",
    payoutDate: "2025-01-01",
  },
  {
    date: "2025-01-01",
    type: "Top up",
    referralName: "John Doe",
    commission: "$100",
    status: "earned",
    payout: "pending",
    payoutDate: "2025-01-01",
  },
];
