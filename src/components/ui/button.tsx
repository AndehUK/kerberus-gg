import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "gap-x-4 border-b-[6px] border-[#191D25] bg-[#29303D] text-base font-medium text-white/70 shadow-sm uppercase hover:text-white active:transition-all active:duration-100 active:border-0 active:shadow-inner active:ring-1 active:ring-[#191D25]",
        discord:
          "gap-x-4 border-b-[6px] border-[#404BC1] bg-[#5865F2] text-base font-medium text-white/70 shadow-sm uppercase hover:text-white active:transition-all active:duration-100 active:border-0 active:shadow-inner active:ring-1 active:ring-[#404BC1]",
        store:
          "bg-[#FF7A1A] border-b-[6px] border-black/10 text-base font-medium text-white/70 shadow-sm uppercase hover:text-white active:transition-all active:duration-100 active:border-0 active:shadow-inner active:ring-1 active:ring-black/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        store: "h-11 rounded-md px-12",
        icon: "h-10 w-10",
        cta: "h-16 w-full rounded-xl p-4 sm:px-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
