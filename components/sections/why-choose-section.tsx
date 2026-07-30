"use client";

import {
  ArrowUpRight,
  HeartHandshake,
  LifeBuoy,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const ACCENT = "#ec1561";

const features = [
  {
    title: "Verified Profiles",
    text: "Every professional goes through identity checks, screening and structured profile review.",
    icon: ShieldCheck,
    metric: "Identity, references, fit",
  },
  {
    title: "Thoughtful Matching",
    text: "We look beyond availability and align families with professionals suited to their home routine.",
    icon: HeartHandshake,
    metric: "Requirement-led shortlist",
  },
  {
    title: "Reliable Support",
    text: "A dedicated support flow helps families move from enquiry to hiring with confidence.",
    icon: LifeBuoy,
    metric: "Guided from first call",
  },
  {
    title: "Transparent Process",
    text: "Clear steps, practical expectations and a process that keeps everyone informed.",
    icon: ListChecks,
    metric: "No unclear handoffs",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export function WhyChooseSection() {
  return (
    <Section className="relative overflow-hidden bg-slate-50/50 py-24">
      {/* Premium SaaS Ambient Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-purple-500/5 blur-[100px]" />

      <SectionHeading
        eyebrow="Why choose Relyn"
        title="A calmer way to hire for your home."
        description="Relyn brings structure, verification and human judgment into a process that families usually have to manage alone."
      />

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map(({ icon: Icon, title, text, metric }, index) => (
          <motion.article
            key={title}
            variants={cardVariants}
            className="group h-[320px] w-full [perspective:1000px]"
          >
            {/* 3D Flip Container */}
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* --- FRONT FACE --- */}
              <div
                className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/5 bg-white p-8 shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift [backface-visibility:hidden]"
                style={{ backgroundImage: `radial-gradient(140px 140px at 100% 0%, ${ACCENT}14, transparent 70%)` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 ring-1 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1px ${ACCENT}33` }}
                />

                <div className="absolute -right-2 -top-3 font-display text-8xl italic text-slate-100 transition-colors duration-500 group-hover:text-slate-100/70">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                    style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, #7c1035)` }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className="h-px w-8 transition-all duration-500 group-hover:w-12"
                      style={{ background: ACCENT }}
                    />
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-slate-400 transition-all duration-500 group-hover:-rotate-45"
                      style={{ color: ACCENT }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* --- BACK FACE --- */}
              <div
                className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] p-8 text-white shadow-lift [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "linear-gradient(160deg, #0f172a, #1e1b2e 55%, #2a1220)" }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: `${ACCENT}40` }}
                />

                <div className="relative z-10">
                  <span
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md"
                    style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, #7c1035)` }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">
                    {text}
                  </p>
                </div>

                <div
                  className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md"
                  style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}1f`, color: "#ffd7e6" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                  {metric}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
