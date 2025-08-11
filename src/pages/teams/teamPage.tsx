import HeaderDescription from "@/components/shared/headerDecription";
import Stats from "@/components/shared/stats";
import { TeamColumn, TeamTable } from "@/components/teams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const accounts = [
    {
        id: 1,
        name: "Total Members",
        value: 8,
    },
    {
        id: 2,
        name: "Active",
        value: 5,
    },
    {
        id: 3,
        name: "Suspended",
        value: 2,
    },
    {
        id: 4,
        name: "Pending Invites",
        value: 1,
    },
];


const data = [
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
];



const dataSuspend = [
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    }, 
    {
        id: 1,
        accountId: "1234567890",
        accountName: "Carmen Noelia",
        email: "ufisher@gmail.com",
        role: "Admin",
        active: "July 12, 2025"
    },
];

export default function TeamPage() {

    const clickHandler = () => {

    }

    return (
        <div className=" w-full h-full flex flex-col gap-6 " >
            <HeaderDescription
                title="Team Members"
                description="Manage who has access to your agency workspace."
                handleAction={clickHandler}
                actionName="Invite Team Member"
            />
            <div className="flex flex-col md:flex-row justify-between border border-border-darker rounded-lg">
                {accounts.map((account) => (
                    <Stats key={account.id} name={account.name} value={account.value} />
                ))}
            </div>
            <div className="">
                <Tabs defaultValue="active" className="w-full">
                    <TabsList className="bg-white text-sm font-medium font-inter border-b border-default">
                        <TabsTrigger
                            value="active"
                            className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
                        >
                            Active
                        </TabsTrigger>
                        <TabsTrigger
                            value="suspended"
                            className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
                        >
                            Suspended
                        </TabsTrigger>
                        <TabsTrigger
                            value="pending"
                            className="text-muted data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
                        >
                            Pending
                        </TabsTrigger>
                    </TabsList>
            <TabsContent value="active" className="mt-5">
                <TeamTable data={data} columns={TeamColumn} />
            </TabsContent>
            <TabsContent value="suspended" className="mt-5">
                <TeamTable data={dataSuspend} columns={TeamColumn} />
            </TabsContent>
            <TabsContent value="pending" className="mt-5">
                <TeamTable data={dataSuspend} columns={TeamColumn} />
            </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}