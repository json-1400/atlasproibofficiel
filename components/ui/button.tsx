import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
    secondary: "bg-surface text-heading hover:bg-slate-200 border border-border",
    outline: "border border-border bg-transparent text-heading hover:bg-surface",
    ghost: "bg-transparent text-body hover:text-heading hover:bg-surface",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm rounded-lg",
    md: "h-11 px-5 text-sm rounded-xl",
    lg: "h-12 px-6 text-base rounded-2xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
