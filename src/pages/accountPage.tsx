import AccountStat from "@/components/shared/accounts/accountStat";
import { DataTable } from "@/components/shared/accounts/accountTable";
import { columns } from "@/components/shared/accounts/column";
import HeaderDescription from "@/components/shared/headerDecription";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const accounts = [
  {
    id: 1,
    name: "Total Accounts",
    value: 0,
  },
  {
    id: 2,
    name: "Active",
    value: 0,
  },
  {
    id: 3,
    name: "Total archived",
    value: 0,
  },
  {
    id: 4,
    name: "Total requests",
    value: 0,
  },
];

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
  const navigate = useNavigate();

  const handleRequestAdAccount = () => {
    navigate(`/dashboard/account/request`);
  };

  return (
    <div className=" w-full h-full">
      <HeaderDescription
        title="Accounts"
        description="View and manage your advertising account details"
        handleRequestAdAccount={handleRequestAdAccount}
      />
      <div className="flex flex-col md:flex-row justify-between border border-border-darker rounded-lg mt-6 ">
        {accounts.map((account) => (
          <AccountStat
            key={account.id}
            name={account.name}
            value={account.value}
          />
        ))}
      </div>
      {/* add account tabs */}
      <div className="mt-6">
        <Tabs defaultValue="opened" className="w-full">
          <TabsList className="bg-white text-sm font-medium font-inter border-b border-default">
            <TabsTrigger
              value="opened"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
            >
              Opened
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
            >
              Requests
            </TabsTrigger>
          </TabsList>
          <TabsContent value="opened" className="mt-5">
            <DataTable columns={columns} data={data} />
          </TabsContent>
          <TabsContent value="requests" className="mt-5">
            <DataTable columns={columns} data={data} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdAccountPage;
