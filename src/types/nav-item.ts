import type { LucideIcon } from "lucide-react";

export interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  iconColour?: string;
  childItems?: ChildItemProps[];
}

export interface ChildItemProps {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  iconColour?: string;
}
