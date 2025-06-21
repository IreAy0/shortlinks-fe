import { AppSidebar } from "@/components/app-sidebar"
import AvatarMenu from "@/components/avatar-menu"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex flex-1 items-center gap-2 px-4 pr-6 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="ml-auto">
          <AvatarMenu />
            </div>
            
          </div>
        </header>
        <div className="px-5 lg:px-10 flex-1 bg-[#f4f6fa] inter ">
          <div className="max-w-6xl mx-auto my-5">
              <Outlet />
          </div>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
