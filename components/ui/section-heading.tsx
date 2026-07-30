import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-800 uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-[42px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
