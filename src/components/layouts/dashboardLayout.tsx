import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./sidebar/app-sidebar";
// import ChoosePlatform from "../stepper/steps/choose-platform";
import AdAccountSidebar from "./sidebar/adaccount-sidebar";

import StepperWrapper from "../stepper/stepper-wrapper";
// import { MobileStepper } from "../stepper/display-stepper";
// import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLayout() {
  const pathname = useLocation();
  const isAdAccountRequest = pathname.pathname.includes("request");

  return (
    <SidebarProvider>
      {isAdAccountRequest ? <AdAccountSidebar /> : <AppSidebar />}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* navigation bar */}
            {/* <SidebarTrigger className="-ml-1" />  */}
          </div>
        </header>
        <div className="flex flex-1 flex-col px-4 sm:px-6 pt-0 mt-4 overflow-x-hidden ">
          {isAdAccountRequest ? <StepperWrapper /> : <Outlet />}
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
