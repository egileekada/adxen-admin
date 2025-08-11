import HeaderDescription from "@/components/shared/headerDecription";
import { Button } from "@/components/ui/button";
import { BillingTable } from "@/components/shared/data-tables/billing-table";
import { billingColumns } from "@/components/shared/tables-columns/billing-column";
import TableFilter from "@/components/shared/table-filter";

const BillingPage = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <HeaderDescription
          title="Billing"
          description="View and manage your billing details"
          showActionButton={false}
          showCopyButton={false}
        />
        <Button className="text-sm font-medium px-12">Upgrade</Button>
      </div>
      {/* stats for billing */}
      <div className="mt-8 flex flex-col md:flex-row justify-between border border-gray-200 rounded-lg">
        <div className="flex-1 flex flex-col gap-1.5 p-6 border-b md:border-b-0 md:border-r">
          <h3 className="text-sm font-normal text-subtle">Current Plan</h3>
          <p className="text-xl font-semibold text-default">Free Plan</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 p-6  border-gray-200 border-b md:border-b-0 md:border-r ">
          <p className="text-sm font-normal text-subtle inline-flex items-center gap-3">
            Monthly fee:{" "}
            <b className="font-semibold text-default">
              £9.9/<span className="text-xs">mon</span>
            </b>
          </p>
          <p className="text-sm font-normal text-subtle">
            Per top-up fee: <span className="font-medium text-default">5%</span>
          </p>
        </div>
        <div className="flex-1 flex items-center gap-2.5 justify-start p-10 md:p-6 ">
          <h3 className="text-sm font-normal text-subtle">Next Billing: </h3>
          <span className="text-sm font-medium text-default">
            July 10, 2025
          </span>
        </div>
      </div>

      {/* Recent Transactions  table*/}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-default">
          Recent Transactions
        </h2>
        <div className="mt-4">
          <TableFilter
            options={["Description", "Payment", "Date"]}
            showRefreshButton={false}
          />
          <BillingTable columns={billingColumns} data={billingData} />
        </div>
      </div>
    </div>
  );
};

export default BillingPage;

const billingData = [
  {
    description: "Monthly fee",
    amount: "£9.9",
    paymentStatus: "paid",
    paymentMethod: {
      accountNumber: "1234567890",
      cardType: "Visa",
    },
    date: "July 10, 2025",
    refundedDate: "July 10, 2025",
  },
  {
    description: "Monthly fee",
    amount: "£9.9",
    paymentStatus: "pending",
    paymentMethod: {
      accountNumber: "1234567890",
      cardType: "Visa",
    },
    date: "July 10, 2025",
    refundedDate: "",
  },
  {
    description: "Monthly fee",
    amount: "£9.9",
    paymentStatus: "refunded",
    paymentMethod: {
      accountNumber: "1234567890",
      cardType: "Visa",
    },
    date: "July 10, 2025",
    refundedDate: "July 10, 2025",
  },
];
