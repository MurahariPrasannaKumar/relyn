"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";

const ACCENT = "#ec1561";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" }
];

const stats = [
  {
    to: 1200,
    format: (value: number) => `${Math.round(value).toLocaleString()}+`,
    label: "Families supported"
  },
  {
    to: 4.9,
    format: (value: number) => `${value.toFixed(1)}/5`,
    label: "Average satisfaction rating"
  },
  {
    to: 24,
    format: (value: number) => `<${Math.round(value)}h`,
    label: "Average response time"
  }
];

function AnimatedStat({
  to,
  format
}: {
  to: number;
  format: (value: number) => string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: setValue
    });
    return () => controls.stop();
  }, [isInView, to]);

  return (
    <p
      ref={ref}
      className="font-display text-4xl tracking-tight"
      style={{ color: ACCENT }}
    >
      {format(value)}
    </p>
  );
}

export function FinalCTASection() {
  return (
    <Section id="contact" className="pb-24">
      <div className="relative overflow-hidden rounded-[38px] bg-black px-6 py-20 text-left shadow-lift sm:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[120px]"
          style={{ background: `${ACCENT}33` }}
        />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-700 uppercase tracking-[0.24em] text-white/60">
              Enquiry to Confidence
            </p>

            <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Got a household need
              <br />
              you want solved?
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Tell us what your home needs and we&apos;ll shortlist verified
              professionals matched to your routine, usually within a day.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@relyn.in"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-700 text-black shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Book a call
              </a>
              <a
                href="/contact"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-700 text-white transition duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-16 border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedStat to={stat.to} format={stat.format} />
                <p className="mt-2 text-sm leading-snug text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
