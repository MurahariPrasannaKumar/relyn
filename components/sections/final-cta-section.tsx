import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" }
];

export function FinalCTASection() {
  return (
    <Section id="contact" className="pb-24">
      <div className="relative overflow-hidden rounded-[38px] bg-black px-6 py-20 text-left shadow-lift sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative">
          <p className="text-xs font-700 uppercase tracking-[0.24em] text-white/60">
            Enquiry to Confidence
          </p>

          <h2 className="mt-8 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Got a household need
            <br />
            you want solved?
          </h2>

          <a
            href="mailto:hello@relyn.in"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-700 text-black shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Book a call
          </a>

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
      </div>
    </Section>
  );
}
