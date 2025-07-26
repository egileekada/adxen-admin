import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import React from "react";
<<<<<<< HEAD
=======
import { useStepper } from "@/hooks/use-stepper";
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
import { DisplayStepper } from "@/components/stepper/display-stepper";

const AdAccountSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
<<<<<<< HEAD
=======
  const { currentStep } = useStepper();
  console.log(currentStep);
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
  return (
    <Sidebar collapsible="icon" {...props} className="h-full">
      <SidebarHeader className=" bg-[#FAFAFA] text-sidebarcolor ">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="flex-1 bg-[#FAFAFA] text-sidebarcolor ">
        <DisplayStepper />
      </SidebarContent>
      <SidebarFooter>
        <div className="h-24 bg-gray-300 rounded-lg"></div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdAccountSidebar;
