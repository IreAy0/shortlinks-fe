import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const TopMenu = [
  { name: "Features", to: "#features" },
  { name: "How it works", to: "#how-it-works" },
];

export default function HeaderMain() {
    const token = localStorage.getItem("token");
  return (
    <div className="sticky py-5 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="flex justify-center mx-auto container">
<div className="min-w-full  w-full  py-2.5 px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1">
              <Rocket size={32} strokeWidth={2.7} />
              <span className="text-xl font-bold">ACME</span>
            </Link>
          </div>
          <div className="items-center flex gap-6">
            <div className="flex items-center gap-x-4">
              {TopMenu.map((menu, idx) => (
                <a
                  key={idx}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    navigationMenuTriggerStyle
                  )}
                  href={menu.to}
                >
                  {menu.name}
                </a>
              ))}
            </div>
            {/* <Suspense>
              <ModeToggle />
            </Suspense> */}
            <div className="flex gap-2">
              {token ? <Link
                to="/dashboard"
                className={buttonVariants({ variant: "default" })}
              >
                Dashboard
              </Link>  : <Link
                to="/login"
                className={buttonVariants({ variant: "default" })}
              >
                Get Started
              </Link> }
              
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1">
              <Rocket size={32} strokeWidth={2.7} />
              <span className="text-xl font-bold">ACME</span>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto px-4">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-1">
                      <Rocket size={32} strokeWidth={2.7} />
                      <span className="text-xl font-bold">ACME</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-4 flex flex-col gap-0">
                  {TopMenu.map((menu, idx) => (
                    <a
                      key={idx}
                      href={menu.to}
                      className="font-semibold text-lg py-2"
                    >
                      {menu.name}
                    </a>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col gap-2">
                    {token ? <Link
                to="/dashboard"
                className={buttonVariants({ variant: "default" })}
              >
                Dashboard
              </Link>  : <Link
                to="/login"
                className={buttonVariants({ variant: "default" })}
              >
                Get Started
              </Link> }
                    {/* <Link
                      to="/login"
                      className={buttonVariants({ variant: "default" })}
                    >
                      Get Started
                    </Link> */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      </header>
      
    </div>
  );
}
