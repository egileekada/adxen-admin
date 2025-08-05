import HeaderDescription from "@/components/shared/headerDecription";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function SettingsPage() {

    const location = useLocation()
    const navigate = useNavigate()

    const clickHandler = (item: string) => {
        if(item === "profile") {
            navigate(`/dashboard/settings`)
        } else {
            navigate(`/dashboard/settings/${item}`)
        }
    }

    return (
        <div className=" w-full h-full " >
            <HeaderDescription
                title="Settings"
                description="Manage your account, preferences, and security all in one place."
                showActionButton={false}
                showCopyButton={false}
            />
            <div className="mt-6">
                <Tabs defaultValue={location.pathname === "/dashboard/settings" ? `profile` : location.pathname?.replace("/dashboard/settings/", "")} className="w-full border-b border-border-default ">
                    <TabsList className="bg-white text-sm font-medium font-inter">
                        <TabsTrigger
                            value="profile"
                            onClick={() => clickHandler("profile")}
                            className=" cursor-pointer text-muted px-2 !text-sm data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-2"
                        >
                            Profile
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => clickHandler("payout")}
                            value="payout"
                            className=" cursor-pointer text-muted px-2 !text-sm data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-2"
                        >
                            Payout
                        </TabsTrigger>
                        <TabsTrigger
                            value="security"
                            onClick={() => clickHandler("security")}
                            className=" cursor-pointer text-muted px-2 !text-sm data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-2"
                        >
                            Security
                        </TabsTrigger>
                        <TabsTrigger
                            value="rolespermission"
                            onClick={() => clickHandler("rolespermission")}
                            className=" cursor-pointer text-muted px-2 !text-sm data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-2"
                        >
                            Roles & Permission
                        </TabsTrigger>
                        <TabsTrigger
                            value="notifications"
                            onClick={() => clickHandler("notifications")}
                            className=" cursor-pointer text-muted px-2 !text-sm data-[state=active]:border-b-2 data-[state=active]:border-b-accent-foreground data-[state=active]:text-accent-foreground rounded-none pb-2"
                        >
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div className=" w-full py-6 " >
                <Outlet />
            </div>
        </div>
    )
}