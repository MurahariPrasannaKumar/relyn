"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";

const steps = [
  {
    title: "Tell us what you need.",
    description:
      "Share your household, schedule, and the kind of support you're looking for so we can understand the fit before we recommend anyone."
  },
  {
    title: "We recommend suitable professionals.",
    description:
      "Our team shortlists verified housekeepers, cooks, or caregivers matched to your routine, preferences, and location."
  },
  {
    title: "Meet shortlisted candidates.",
    description:
      "Speak with or meet the professionals we recommend, ask questions, and get a feel for who fits your home best."
  },
  {
    title: "Hire with confidence.",
    description:
      "Once you've chosen, we help you finalize the arrangement with clear terms and ongoing support if anything needs adjusting."
  }
] as const;

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="how-it-works" className="bg-background text-black">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-[11px] font-700 uppercase tracking-[0.2em] text-black/55">
              <Sparkles className="h-3 w-3" />
              How It Works
            </div>
            <h2 className="mt-8 font-display text-4xl tracking-tight text-black sm:text-5xl lg:text-6xl">
              Four simple steps from enquiry to confidence.
            </h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-black/55">
              A structured process keeps the experience clear for both families and household
              professionals, from the first conversation to the final hire.
            </p>
          </motion.div>
        </div>

        <div className="relative lg:col-span-7" ref={containerRef}>
          <div className="absolute left-6 top-2 h-full w-[2px] bg-black/10 lg:left-8" />

          <motion.div
            className="absolute left-6 top-2 origin-top bg-black lg:left-8"
            style={{ height: "100%", scaleY, width: "2px" }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-16 lg:pl-24">
                <div className="absolute left-[18px] top-1 z-10 flex h-[14px] w-[14px] items-center justify-center lg:left-[26px]">
                  <motion.div
                    className="h-full w-full rounded-full border-2 border-background bg-black/20 shadow-sm"
                    whileInView={{ backgroundColor: "#000000", scale: 1.08 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  />
                </div>

                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                >
                  <span className="text-[10px] font-700 uppercase tracking-[0.3em] text-black/40">
                    Step 0{index + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-700 tracking-tight text-black transition-colors group-hover:text-black/60">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-black/55">
                    {step.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <CheckCircle2 className="h-4 w-4 text-black" />
                    <span className="text-xs font-700 uppercase tracking-tight text-black">
                      System ready
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
