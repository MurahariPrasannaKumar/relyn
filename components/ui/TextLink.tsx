import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-black",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
