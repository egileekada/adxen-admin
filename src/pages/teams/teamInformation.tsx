import { CustomButton } from "@/components/custom";
import { TeamActivityColumn, TeamTable } from "@/components/teams";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TabsContent } from "@/components/ui/tabs";
import { useModal } from "@/hooks/use-modal";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TeamInformation() {

    const { openModal } = useModal();

    const clickHandler = () => {
        openModal("inviteteam")
    }

    const data = [
        {
            timestamp: "Apr 26, 2023 10:30 AM",
            event: "Ad Account Created",
            result: "Success"
        }, 
        {
            timestamp: "Apr 26, 2023 10:30 AM",
            event: "Ad Account Created",
            result: "Success"
        }, 
        {
            timestamp: "Apr 26, 2023 10:30 AM",
            event: "Ad Account Created",
            result: "Success"
        }, 
        {
            timestamp: "Apr 26, 2023 10:30 AM",
            event: "Ad Account Created",
            result: "Success"
        }
    ]
    const navigate = useNavigate()

    return (
        <div className=" w-full flex flex-col gap-4 " >
            <div className=" w-full flex items-center justify-between " >
                <Breadcrumb className="text-sm font-normal flex items-center gap-1">
                    <BreadcrumbList>
                        <BreadcrumbItem onClick={()=> navigate("/dashboard/teams")} className=" cursor-pointer text-default " >Customers</BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className=" text-muted " >View details</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className=" flex gap-1 " >
                    <CustomButton onClick={clickHandler} className=" font-medium h-[28px] " >
                        Edit
                    </CustomButton>
                    <CustomButton variant={"secondary"} className=" font-medium h-[28px] " >
                        <MoreHorizontal size={"20px"} />
                    </CustomButton>
                </div>
            </div>
            <div className=" w-full flex items-center py-6 px-3 gap-2 " >
                <div className=" w-[64px] h-[64px] bg-amber-400 rounded-full " />
                <div className=" flex-col gap-1 " >
                    <p className=" text-2xl font-medium " >Carmen Noelia</p>
                    <p className=" text-sm text-muted " >Staff ID: 59953990240902</p>
                    <div className=" rounded px-1 text-[12px] mt-1 w-fit bg-[#EEFBF2] text-[#33803F] " >
                        <p>Active</p>
                    </div>
                </div>
            </div>

            <div className="">
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="bg-white text-sm font-medium font-inter border-b border-[#27272A1A] ">
                        <TabsTrigger
                            value="overview"
                            className="text-muted px-3 data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="activity"
                            className="text-muted px-3 data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-3"
                        >
                            Activity log
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="mt-5">
                        <div className=" max-w-[650px] w-full grid grid-cols-2 gap-3 " >
                            <div className=" w-full py-3 flex flex-col gap-1 " >
                                <p className=" text-sm font-semibold " >Name</p>
                                <p className=" text-sm text-muted " >Alejandro Teresa</p>
                            </div>
                            <div className=" w-full py-3 flex flex-col gap-1 " >
                                <p className=" text-sm font-semibold " >Email</p>
                                <p className=" text-sm text-muted " >ofleming@yahoo.com</p>
                            </div>
                            <div className=" w-full py-3 flex flex-col gap-1 " >
                                <p className=" text-sm font-semibold " >Role</p>
                                <p className=" text-sm text-muted " >Admin</p>
                            </div>
                            <div className=" w-full py-3 flex flex-col gap-1 " >
                                <p className=" text-sm font-semibold " >Date Joined</p>
                                <p className=" text-sm text-muted " >June 5, 2025</p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="activity" className="mt-5">
                        <div className=" flex flex-col w-full gap-4 " >
                            <p className=" text-lg font-semibold " >Recent Logs</p>
                            <TeamTable data={data} columns={TeamActivityColumn} />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}