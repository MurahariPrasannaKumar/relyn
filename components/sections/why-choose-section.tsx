"use client";

import {
  HeartHandshake,
  LifeBuoy,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

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
              <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-sm [backface-visibility:hidden]">
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-slate-50 transition-colors group-hover:text-blue-50/50">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md ring-1 ring-slate-900/10">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                </div>

                <h3 className="relative z-10 text-2xl font-semibold tracking-tight text-slate-900">
                  {title}
                </h3>

                {/* Hint indicator for interaction */}
                <div className="absolute bottom-8 right-8 flex items-center justify-center opacity-40 transition-opacity group-hover:opacity-0">
                  <div className="h-2 w-2 rounded-full bg-slate-400 animate-ping" />
                </div>
              </div>

              {/* --- BACK FACE --- */}
              <div className="absolute inset-0 flex flex-col justify-between rounded-[24px] bg-slate-900 p-8 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white/90">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-300">
                    {text}
                  </p>
                </div>

                <div className="inline-flex w-fit items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 backdrop-blur-md">
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
