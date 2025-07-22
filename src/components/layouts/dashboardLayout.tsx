import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./sidebar/app-sidebar"; 
import AdAccountSidebar from "./sidebar/adaccount-sidebar";

import StepperWrapper from "../stepper/stepper-wrapper"; 

export default function DashboardLayout() {
  const pathname = useLocation();
  const isAdAccountRequest = pathname.pathname.includes("request");

  return (
    <SidebarProvider className=" p-3 !bg-[#FAFAFA] h-screen " >
      {isAdAccountRequest ? <AdAccountSidebar /> : <AppSidebar />}
      <SidebarInset className=" flex-1 relative rounded-lg h-full overflow-y-auto " > 
        <div className="flex flex-1 flex-col px-4 sm:px-6 pt-0 mt-4 overflow-x-hidden ">
          {isAdAccountRequest ? <StepperWrapper /> : <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}