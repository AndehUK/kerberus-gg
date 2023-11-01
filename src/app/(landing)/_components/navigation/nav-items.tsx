"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItems } from "@/lib/constants/nav-items";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationItems() {
  const pathname = usePathname();

  const items = NavItems.filter(
    (item) => !item.childItems || item.childItems.length <= 0,
  );
  const itemsWithChildren = NavItems.filter(
    (item) => item.childItems && item.childItems.length > 0,
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  `group/${item.label} flex items-center gap-x-2`,
                  navigationMenuTriggerStyle(),
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    pathname === item.href && item.iconColour,
                  )}
                />
                <p
                  className={cn(
                    "text-white/70",
                    pathname === item.href && "font-semibold text-primary",
                  )}
                >
                  {item.label}
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        {itemsWithChildren.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger
              className={cn(
                "flex items-center gap-x-2",
                pathname.includes(item.href) && "font-semibold text-primary",
              )}
            >
              <item.icon
                className={cn(
                  "h-4 w-4",
                  pathname.includes(item.href) && "fill-primary",
                )}
              />
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#141416]">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.childItems!.map((child) => (
                  <ListItem
                    key={child.label}
                    title={child.label}
                    href={child.href}
                  >
                    {child.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none text-white/70 no-underline outline-none transition-colors hover:bg-orange-500/5",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
