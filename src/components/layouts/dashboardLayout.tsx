import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
<<<<<<< HEAD
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
      <SidebarInset className=" flex-1 relative rounded-lg overflow-y-auto " > 
        <div className="flex flex-1 flex-col px-4 py-4 sm:px-6  overflow-x-hidden ">
          {isAdAccountRequest ? <StepperWrapper /> : <Outlet />}
=======
import { Outlet, useSearchParams } from "react-router-dom";
import AppSidebar from "./sidebar/app-sidebar";
// import ChoosePlatform from "../stepper/steps/choose-platform";
import AdAccountSidebar from "./sidebar/adaccount-sidebar";
import { StepperProvider } from "../stepper/stepper-provider";
// import { MobileStepper } from "../stepper/display-stepper";
// import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLayout() {
  const [searchParams] = useSearchParams();
  // const isMobile = useIsMobile();

  const isAdAccountRequest = searchParams.get("requestAdAccount") === "true";

  if (isAdAccountRequest) {
    return (
      <SidebarProvider>
        <StepperProvider>
          <AdAccountSidebar />
          <SidebarInset>
            <div></div>
            {/* <>
              <ChoosePlatform />
              {isMobile && <MobileStepper />}
            </> */}
          </SidebarInset>
        </StepperProvider>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* navigation bar */}
            {/* <SidebarTrigger className="-ml-1" />  */}
          </div>
        </header>
        <div className="flex flex-1 flex-col px-4 md:px-6 pt-0 mt-4 overflow-x-hidden ">
          <Outlet />
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
