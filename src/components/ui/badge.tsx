import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium tracking-tight uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "border border-black/15 bg-white/60 text-black backdrop-blur-sm",
        dark: "bg-black text-white",
        muted: "border border-black/10 bg-black/5 text-neutral-600",
        label: "border border-black/15 px-3 py-0.5 text-[11px] text-neutral-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
