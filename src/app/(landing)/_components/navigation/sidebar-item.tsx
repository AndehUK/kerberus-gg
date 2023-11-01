"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItemProps } from "@/types/navbar-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SidebarItem = ({ item, isActive }: NavigationItemProps) => {
  return (
    <Link
      href={item.href}
      className={cn(
        "group flex w-full justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
        isActive ? "bg-white/10 font-bold text-primary" : "text-zinc-400",
      )}
    >
      <div className="flex flex-1 items-center">
        <item.icon className={cn("mr-3 h-5 w-5", isActive && "text-primary")} />
        {item.label}
      </div>
    </Link>
  );
};

export const SidebarGroupedItem = ({ item, isActive }: NavigationItemProps) => {
  const pathname = usePathname();

  return (
    <Accordion
      type="single"
      collapsible
      className="my-0 w-full rounded-lg border-none text-sm font-medium text-zinc-400 shadow-none transition"
    >
      <AccordionItem value={item.label}>
        <AccordionTrigger className="flex flex-1 items-center">
          <div className="flex flex-1 items-center">
            <item.icon
              className={cn(
                "mr-3 h-5 w-5",
                isActive && "fill-primary text-primary",
              )}
            />
            {item.label}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {item.childItems!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "group flex w-full justify-start rounded-lg p-3 pl-6 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === child.href
                  ? "bg-white/10 font-bold text-primary"
                  : "text-zinc-400",
              )}
            >
              <div className="flex flex-1 items-center hover:text-primary">
                {!!child.icon && (
                  <child.icon
                    className={cn(
                      "mr-3 h-5 w-5 hover:text-primary",
                      pathname === child.href && "fill-primary text-primary",
                    )}
                  />
                )}
                <p
                  className={cn(
                    "text-zinc-400 hover:text-primary",
                    pathname === child.href && "font-bold text-primary",
                  )}
                >
                  {child.label}
                </p>
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
