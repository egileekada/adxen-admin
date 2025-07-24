"use client"

import * as React from "react"
import { 
    CircleDollarSignIcon,  
    GalleryVerticalEnd,
    HomeIcon, 
    PlaySquareIcon,  
    ScrollText, 
    Settings,  
    Wallet2,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main" 
import { TeamSwitcher } from "./team-switcher"
import { NavUser } from "./nav-user"
import { RiCoinLine, RiHome5Line, RiReceiptLine, RiSettings3Line, RiUserStarLine, RiVideoLine, RiWalletLine } from "@remixicon/react"

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
        }
    ],
    navMain: [
        {
            title: "Home",
            url: "/dashboard",
            icon: RiHome5Line,
            isActive: false,
            items: []
        },
        {
            title: "Ad account",
            url: "#",
            icon: RiVideoLine,
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
        },
        {
            title: "Billing",
            url: "/dashboard/billing",
            icon: RiReceiptLine,
            isActive: false,
            items: []
        },
        {
            title: "Affiliate program",
            url: "/dashboard/affiliate",
            icon: RiCoinLine,
            isActive: false,
            items: []
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: RiSettings3Line,
            isActive: false,
            items: []
        },
    ]
}

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar  collapsible="icon" {...props}>
            <SidebarHeader className=" bg-[#FAFAFA] text-sidebarcolor " >
                <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent className=" bg-[#FAFAFA] text-sidebarcolor " >
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
