"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {

    const location = useLocation();



  return (
   <SidebarGroup className="py-5">
      <SidebarMenu className="gap-y-3">
        {items.map((item) => {
          const isActive = location.pathname === item.url;
          // If no sub-items, make the button a link
          if (!item.items || item.items.length === 0) {
            return (
              <SidebarMenuItem key={item.title}>
                <Link to={item.url} className="w-full">
                  <SidebarMenuButton
                    className={`text-base h-12 px-5 font-medium w-full justify-start ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "hover:bg-primary/30 "
                    }`}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon className="!size-5" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          }
          // If has sub-items, render as collapsible
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={`text-base h-12 px-5 font-medium ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "hover:bg-muted text-muted-foreground"
                    }`}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon className="!size-5" />}
                    <span>{item.title}</span>
                    {item?.items?.length > 0 && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
