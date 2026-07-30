import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrimaryCTA({
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
        "group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-black px-6 text-sm font-600 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
