import {
  ShoppingCart,
  Home,
  ClipboardCheck,
  BookCopy,
  Star,
  User,
  Heart,
} from "lucide-react";

import type { NavItemProps } from "@/types/nav-item";

export const NavItems: NavItemProps[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    iconColour: "text-primary",
  },
  {
    label: "Store",
    href: "/store",
    icon: ShoppingCart,
    iconColour: "text-primary fill-primary",
  },
  {
    label: "Rules",
    href: "/rules",
    icon: ClipboardCheck,
    iconColour: "text-primary",
  },
  {
    label: "Wiki",
    href: "/wiki",
    icon: BookCopy,
    iconColour: "text-primary",
  },
  {
    label: "Legends",
    href: "/legends",
    icon: Star,
    iconColour: "text-primary fill-primary",
    childItems: [
      {
        label: "Our Team",
        href: "/legends/team",
        icon: User,
        description:
          "Meet the team behind the scenes that make this all possible.",
      },
      {
        label: "Our Partners",
        href: "/legends/partners",
        icon: Heart,
        description:
          "Meet the talented partners that help us make this all possible.",
      },
    ],
  },
];
