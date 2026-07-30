import { cn } from "@/lib/utils";

const ACCENT = "#ec1561";

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
        <p
          className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-[42px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
