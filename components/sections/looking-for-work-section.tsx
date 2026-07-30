"use client";

import {
  BadgeCheck,
  ListChecks,
  Compass,
  ArrowRight,
  FileEdit,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const steps = [
  {
    icon: FileEdit,
    title: "Apply Online",
    description:
      "Share your experience, skills, and availability in a simple profile form.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Network",
    description:
      "Every professional passes strict identity and background checks.",
  },
  {
    icon: ListChecks,
    title: "Clear Expectations",
    description:
      "We match your specific skills to the right household routine.",
  },
  {
    icon: Users,
    title: "Meet the Family",
    description:
      "Speak with shortlisted families and confirm the fit works both ways.",
  },
  {
    icon: Compass,
    title: "Guided Onboarding",
    description: "Receive ongoing support from your first day on the job.",
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
};

export function LookingForWorkSection() {
  return (
    <Section
      id="work"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
            style={{ color: "#ec1561" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#ec1561" }}
              aria-hidden
            />
            Looking for work
          </p>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Become Part of the Relyn Network
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500">
            Join a professional network built on respect, clarity, and reliable
            opportunities with families looking for household support.
          </p>
        </div>

        {/* Connected Cards Workflow */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop Connecting Line with Animated Pulse */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-[2px] rounded-full bg-slate-200 lg:block">
            {/* The moving energy pulse */}
            <motion.div
              className="absolute left-0 top-1/2 h-1 w-24 -translate-y-1/2 rounded-full bg-[#ec1561] shadow-[0_0_12px_rgba(236,21,97,0.6)]"
              animate={{
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={cardVariants}
                  className="group relative flex flex-col items-center text-center h-full"
                >
                  {/* Icon Node */}
                  <div className="relative z-10 mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-blue-100 group-hover:shadow-md">
                    <Icon
                      className="relative z-10 h-7 w-7 text-slate-700 transition-colors duration-300 group-hover:text-blue-600"
                      strokeWidth={1.5}
                    />

                    {/* Mobile Connecting Arrow (Hidden on Desktop) */}
                    {index !== steps.length - 1 && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-300 lg:hidden">
                        <ArrowRight className="h-5 w-5 rotate-90" />
                      </div>
                    )}
                  </div>

                  {/* Card Content - flex-1 forces them to be equal height */}
                  <div className="relative flex w-full flex-1 flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 group-hover:border-slate-200 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            href="#contact"
            className="relative h-14 overflow-hidden rounded-full bg-slate-900 px-8 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
          >
            Register as a Household Professional
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
