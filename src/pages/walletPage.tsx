import { CustomButton } from "@/components/custom";
import HeaderDescription from "@/components/shared/headerDecription";
import Stats from "@/components/shared/stats";
import WalletBtn from "@/components/shared/walletBtn";

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
        </div>
    )
}