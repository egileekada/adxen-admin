import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useSearchParams } from "react-router-dom";
import AppSidebar from "./sidebar/app-sidebar"; 
import AdAccountSidebar from "./sidebar/adaccount-sidebar";
import { StepperProvider } from "../stepper/stepper-provider"; 

export default function DashboardLayout() {
  const [searchParams] = useSearchParams(); 

  const isAdAccountRequest = searchParams.get("requestAdAccount") === "true";

  if (isAdAccountRequest) {
    return (
      <SidebarProvider className=" p-3 !bg-[#FAFAFA] h-screen " >
        <StepperProvider>
          <AdAccountSidebar />
          <SidebarInset className=" flex-1 relative rounded-lg h-full overflow-y-auto " >
          </SidebarInset>
        </StepperProvider>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider className=" p-3 !bg-[#FAFAFA] h-screen " >
      <AppSidebar />
      <SidebarInset className=" flex-1 relative rounded-lg h-full overflow-y-auto " >
        <div className="flex flex-1 flex-col gap-4 p-4 overflow-x-hidden ">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
