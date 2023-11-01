import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="nav:hidden transition hover:opacity-75">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-background">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
