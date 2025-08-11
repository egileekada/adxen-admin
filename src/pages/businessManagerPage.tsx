import HeaderDescription from "@/components/shared/headerDecription";
import { Button } from "@/components/ui/button";
import { ListFilter, Plus, Users } from "lucide-react";
import { businessColumns } from "@/components/shared/tables-columns/business-column";
import { BusinessTable } from "@/components/shared/data-tables/business-table";
import { useModal } from "@/hooks/use-modal";
import TableFilter from "@/components/shared/table-filter";

const accessStats = [
  {
    name: "Meta Managers",
    value: 2,
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Tiktok Centers",
    value: 1,
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Google Ads",
    value: 1,
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Snapchat",
    value: 2,
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Bing",
    value: 0,
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: "Twitter",
    value: 0,
    isComingSoon: true,
    icon: <Users className="w-4 h-4" />,
  },
];

const businessTable = [
  {
    accessId: "1234567890",
    managerName: "Stepan Jude",
    platform: "Google",
    status: "pending",
    date: "2021-01-01",
    adAccount: 1,
  },
  {
    accessId: "1234567890",
    managerName: "John Doe",
    platform: "TikTok",
    status: "active",
    date: "2021-01-01",
    adAccount: 1,
  },
  {
    accessId: "1234567890",
    managerName: "John Doe",
    platform: "Snapchat",
    status: "unused",
    date: "2021-01-01",
    adAccount: 0,
  },
  {
    accessId: "1234567890",
    managerName: "John Doe",
    platform: "Bing",
    status: "rejected",
    date: "2021-01-01",
    adAccount: 1,
  },
];

const BusinessManagerPage = () => {
  const { openModal } = useModal();
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between">
        <HeaderDescription
          title="Access Manager"
          description="Manage your access to your ad accounts."
          showActionButton={true}
          showCopyButton={false}
          showIcon
          icon={<Plus />}
          actionText="Connect manager"
          handleAction={() => openModal("business-manager")}
          className="justify-between"
        />
      </div>
      {/* stats */}

      <div className="border border-border rounded-lg mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {accessStats.map((stat) => (
          <div className=" flex flex-1 flex-col p-6 gap-4 border-r last:border-r-0 border-t nth-[1]:border-t-0 nth-[1]:border-r-0 sm:nth-[1]:border-r nth-[2]:border-r-0 sm:nth-[2]:border-t-0 md:nth-[2]:border-r-0 lg:nth-[2]:border-r lg:not-[2]:border-t-0 nth-[3]:border-r-0 sm:nth-[3]:border-r  lg:nth-[3]:border-r-0 nth-[4]:border-r-0  md:nth-[4]:border-r-0 lg:nth-[4]:border-r lg:nth-[4]:border-t nth-[5]:border-r-0 sm:nth-[5]:border-r lg:nth-[5]:border-t lg:nth-[6]:border-t ">
            <div className="flex items-center gap-2">
              {stat.icon && (
                <div className="flex items-center gap-2 text-sm">
                  {stat.icon}
                </div>
              )}
              <p className="text-muted text-xs">{stat.name}</p>
            </div>
            <p className="text-2xl font-inter font-medium">
              {stat.isComingSoon ? (
                <span className="text-subtle text-xs p-2 bg-soft mr-auto rounded-sm">
                  Coming soon
                </span>
              ) : (
                stat.value
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex flex-col flex-wrap md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
          {/* <div className="flex items-center flex-wrap gap-1">
            <Button
              variant="ghost"
              className="bg-white border border-dashed border-border-darker rounded-full text-muted"
            >
              <ListFilter className="w-4 h-4" />
              Platform
            </Button>
            <Button
              variant="ghost"
              className="bg-white border border-dashed border-border-darker rounded-full text-muted"
            >
              <ListFilter className="w-4 h-4" />
              Usage
            </Button>
            <Button
              variant="ghost"
              className="bg-white border border-dashed border-border-darker rounded-full text-muted"
            >
              <ListFilter className="w-4 h-4" />
              Status
            </Button>
          </div> */}
          <TableFilter
            options={["Platform", "Usage", "Status"]}
            showRefreshButton={false}
          />
        </div>

        <BusinessTable columns={businessColumns} data={businessTable} />
      </div>
    </div>
  );
};

export default BusinessManagerPage;
