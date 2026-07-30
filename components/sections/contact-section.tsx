"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const ACCENT = "#ec1561";

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "support@relyn.com",
    href: "mailto:support@relyn.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Whitefield, Bengaluru",
    href: "#",
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

const fieldClassName =
  "w-full rounded-input border border-border bg-white px-4 py-3 text-base text-ink placeholder:text-soft transition-colors duration-200 focus:border-[#ec1561] focus:outline-none";

type Status = "idle" | "submitting" | "sent";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <Section id="contact" className="pt-40">
      <SectionHeading
        eyebrow="Contact us"
        title="Let's talk about your home."
        description="Whether you're looking to hire trusted help or want to join our professional network, our team responds within one business day."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Contact details panel */}
        <div className="relative overflow-hidden rounded-[32px] bg-black p-8 text-white shadow-lift sm:p-10 lg:col-span-5">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: `${ACCENT}33` }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-[0.24em] text-white/60">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: ACCENT }}
                aria-hidden
              />
              Get in touch
            </div>

            <h3 className="mt-6 font-display text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl">
              We&apos;re here to help, every step of the way.
            </h3>

            <div className="mt-10 flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/10"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${ACCENT}, #7c1035)`,
                    }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-xs font-600 uppercase tracking-wide text-white/50">
                      {label}
                    </span>
                    <span className="block text-base font-600 text-white">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
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

        {/* Contact form panel */}
        <div className="premium-card rounded-[32px] p-8 sm:p-10 lg:col-span-7">
          {status === "sent" ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <span
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: `${ACCENT}1a`, color: ACCENT }}
              >
                <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
              </span>
              <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Message sent.
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
                Thank you for reaching out. A member of the Relyn team will be
                in touch within one business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-700 text-ink underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-700 text-ink"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Anjali"
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-700 text-ink"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-700 text-ink"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block text-sm font-700 text-ink"
                  >
                    I&apos;m looking to
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className={cn(fieldClassName, "appearance-none")}
                  >
                    <option>Hire household help</option>
                    <option>Join as a professional</option>
                    <option>Partner with Relyn</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-700 text-ink"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your household and what kind of support you're looking for."
                  className={cn(fieldClassName, "resize-none")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-2 inline-flex h-14 w-fit items-center justify-center gap-3 rounded-full bg-ink px-8 text-base font-700 text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
