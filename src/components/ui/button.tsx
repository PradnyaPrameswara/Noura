import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        dark: "rounded-full bg-black text-white hover:bg-neutral-900 px-6 py-3 text-sm tracking-tight",
        "light-small": "rounded-full bg-white/80 backdrop-blur-sm text-black border border-black/10 hover:border-black/20 px-4 py-2 text-xs font-medium tracking-tight",
        solid: "rounded-full bg-black text-white px-8 py-4 text-sm font-medium hover:bg-neutral-800",
        outline: "rounded-full border border-black/15 bg-transparent text-black hover:bg-black/5 px-6 py-3 text-sm",
      },
      size: {
        default: "",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {/* Background ambient gradient orbs */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 via-rose-500 to-red-500 opacity-60 blur-md transition-all duration-500 ease-out group-hover:scale-150 group-hover:translate-x-3 group-hover:translate-y-2" />
        <span className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-60 blur-md transition-all duration-500 ease-out group-hover:scale-150 group-hover:-translate-x-3 group-hover:-translate-y-2" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(buttonVariants({ variant, size }), className)}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {content}
    </button>
  );
}
