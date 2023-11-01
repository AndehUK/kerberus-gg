"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { NavItems } from "@/lib/constants/nav-items";
import { SidebarGroupedItem, SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-background shadow-sm">
      <div className="py-6">
        <Logo />
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex w-full flex-col gap-y-2">
          {NavItems.map((item) => (
            <>
              {item.childItems && item.childItems.length > 0 ? (
                <SidebarGroupedItem
                  item={item}
                  isActive={pathname.includes(item.href)}
                />
              ) : (
                <SidebarItem item={item} isActive={pathname === item.href} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
