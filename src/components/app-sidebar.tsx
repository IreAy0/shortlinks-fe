import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartBarIncreasingIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Link,
  Map,
  PieChart,
  QrCode,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link as RouteLink } from "react-router-dom"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: ChartBarIncreasingIcon,
    },
    {
      title: "Links",
      url: "/dashboard/links",
      icon: Link,
    },
    {
      title: "QR Codes",
      url: "/dashboard/qr-codes",
      icon: QrCode,
    },
    // {},
    // {},
   
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    //  <SidebarProvider>
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
              size="lg"
              asChild
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <RouteLink to="/">
                <div  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-6"/>
              </div>
              <div className="grid flex-1 text-left text-base leading-tight">
                <span className="truncate font-medium">ACME INC</span>
              </div>
              </RouteLink>
              
            </SidebarMenuButton>

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
    // </SidebarProvider>
  )
}
