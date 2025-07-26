<<<<<<< HEAD
import * as React from "react"
import {
  GalleryVerticalEnd,
} from "lucide-react"
=======
"use client";

import * as React from "react";
import {
  CircleDollarSignIcon,
  GalleryVerticalEnd,
  HomeIcon,
  PlaySquareIcon,
  ScrollText,
  Settings,
  Wallet2,
} from "lucide-react";
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
<<<<<<< HEAD
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { TeamSwitcher } from "./team-switcher"
import { NavUser } from "./nav-user"
import { RiCoinLine, RiHome5Line, RiReceiptLine, RiSettings3Line, RiUserStarLine, RiVideoLine, RiWalletLine } from "@remixicon/react"

=======
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";
import { NavUser } from "./nav-user";
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Monosend",
      logo: GalleryVerticalEnd,
      plan: "Admin",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
<<<<<<< HEAD
      icon: RiHome5Line,
      isActive: false,
      items: []
=======
      icon: HomeIcon,
      isActive: false,
      items: [],
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
    },
    {
      title: "Ad account",
      url: "#",
<<<<<<< HEAD
      icon: RiVideoLine,
=======
      icon: PlaySquareIcon,
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
      isActive: true,
      items: [
        {
          title: "Accounts",
          url: "/dashboard/account",
        },
        {
          title: "Ad Budget",
          url: "/dashboard/budget",
        },
        {
          title: "Business manager",
          url: "/dashboard/business",
        },
      ],
    },
    {
      title: "Wallet",
      url: "/dashboard/wallet",
<<<<<<< HEAD
      icon: RiWalletLine,
      isActive: false,
      items: []
    },
    {
      title: "Teams",
      url: "/dashboard/teams",
      icon: RiUserStarLine,
      isActive: false,
      items: []
=======
      icon: Wallet2,
      isActive: false,
      items: [],
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
    },
    {
      title: "Billing",
      url: "/dashboard/billing",
<<<<<<< HEAD
      icon: RiReceiptLine,
      isActive: false,
      items: []
=======
      icon: ScrollText,
      isActive: false,
      items: [],
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
    },
    {
      title: "Affiliate program",
      url: "/dashboard/affiliate",
<<<<<<< HEAD
      icon: RiCoinLine,
      isActive: false,
      items: []
=======
      icon: CircleDollarSignIcon,
      isActive: false,
      items: [],
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
<<<<<<< HEAD
      icon: RiSettings3Line,
      isActive: false,
      items: []
    },
  ]
}

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} >
      <SidebarHeader className=" bg-[#FAFAFA] text-sidebarcolor " >
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className=" bg-[#FAFAFA] text-sidebarcolor " >
=======
      icon: Settings,
      isActive: false,
      items: [],
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className=" bg-[#FAFAFA] text-sidebarcolor ">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="flex-1 bg-[#FAFAFA] text-sidebarcolor ">
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
}
