import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({
  className,
  children,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-14 items-center justify-center gap-3 rounded-button px-6 text-base font-700 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2",
        variant === "primary"
          ? "bg-navy text-white shadow-soft hover:bg-primary hover:shadow-lift"
          : "border border-border bg-white/90 text-ink shadow-inset hover:bg-white",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </a>
  );
}
