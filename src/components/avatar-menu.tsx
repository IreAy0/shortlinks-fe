import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

export default function AvatarMenu() {

  const logout = () => {
      localStorage.clear()
      window.location.href = "/"
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-[2px] focus:ring-offset-2 focus:ring-primary rounded-full">
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="h-4 w-4 font-inter" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="h-4 w-4 " /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()} className="text-destructive">
          <LogOut className="h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
