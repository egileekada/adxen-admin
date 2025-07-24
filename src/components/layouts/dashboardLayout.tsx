

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import AppSidebar from "./sidebar/app-sidebar"


export default function DashboardLayout() {
    return (
        <SidebarProvider className=" p-3 !bg-[#FAFAFA] h-screen " >
            <AppSidebar />
            <SidebarInset className=" flex-1 relative rounded-lg h-full overflow-y-auto " >
                <div className="flex flex-1 flex-col gap-4 p-4 overflow-x-hidden ">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

