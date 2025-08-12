import HeaderDescription from "@/components/shared/headerDecription";
import Stats from "@/components/shared/stats";
import TableFilter from "@/components/shared/table-filter";
import { walletColumns } from "@/components/shared/tables-columns/wallet-column";
import WalletBtn from "@/components/shared/walletBtn";
import { TeamTable } from "@/components/teams";

export default function WalletPage() {

    const accounts = [
        {
            id: 1,
            name: "Wallet Balance",
            value: "$1,250.00,"
        },
        {
            id: 2,
            name: "Pending Deposit",
            value: "$300.00",
        },
        {
            id: 3,
            name: "Pending Withdrawal",
            value: "$200.00",
        }
    ];


    const walletData = [
        {
            description: "Wallet Top-Up",
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
            description: "Ad Account Top-Up (Meta)",
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
            description: "Withdrawal",
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

    return (
        <div className=" w-full h-full flex flex-col gap-6 " >
            <HeaderDescription
                title="Wallet"
                description="Manage your wallet balance, track transactions, and move funds between your ad accounts."
                showActionButton={false}
                showCopyButton={false}
            />
            <div className="flex flex-col md:flex-row justify-between border border-border-darker rounded-lg ">
                {accounts.map((account) => (
                    <Stats key={account.id} name={account.name} value={account.value} />
                ))}
            </div>
            <WalletBtn />
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" font-medium " >Recent Transactions</p>
            </div>
            <div className=" w-full flex flex-col gap-2 " >
                <TableFilter
                    options={["Description", "Payment", "Date", "Status"]}
                    showRefreshButton={false}
                />
                <TeamTable data={walletData} columns={walletColumns} />
            </div>
        </div>
    )
}