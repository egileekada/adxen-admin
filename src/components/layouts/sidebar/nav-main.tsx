"use client"

import { ChevronRight } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup, 
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"

interface ISidebar {
    title: string,
    url: string,
    icon: any,
    isActive: boolean,
    items: Array<{
        title: string,
        url: string,
        isActive?: boolean,
    }>
}

export function NavMain({
    items,
}: {
    items: ISidebar[]
}) {

    const location = useLocation();

    const navigate = useNavigate();

    return (
        <SidebarGroup>
            {/* <SidebarGroupLabel className=" text-sidebarcolor font-semibold " >Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                {items.map((item) => (
                    <div key={item.title} >
                        {item.items?.length > 0 ? (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className={` h-[40px] `} tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub >
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton onClick={() => navigate(subItem.url)} className={` ${location.pathname === subItem?.url ? " bg-[#65A0FD1A] text-[#2B5DF3] " : ""} h-[40px] cursor-pointer `} asChild>
                                                        <span>{subItem.title}</span>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ) : (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton onClick={() => navigate(item.url)} className={` ${location.pathname === item.url ? " bg-[#65A0FD1A] text-[#2B5DF3] " : ""} h-[40px] cursor-pointer `} tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )}
                    </div>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
