"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Quote,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/components/ui/data";

// Sophisticated animation variants for a cascading bento-grid reveal
const bentoItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    description:
      "Every profile undergoes rigorous identity, background, and reference verification before reaching your home.",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description:
      "We analyze home routines, language comfort, and specific experience to ensure a seamless fit.",
  },
  {
    icon: Users,
    title: "Guided Support",
    description:
      "From the first inquiry to successful placement, our dedicated team handles the complexity for you.",
  },
];

export function TrustStorySection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.trustCarousel.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="about" className="relative overflow-hidden py-24">
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec1561]/5 blur-[120px]" />

      <SectionHeading
        align="center"
        eyebrow="Our Mission"
        title="Redefining how families build their support systems."
        description="Traditional hiring is fragmented and uncertain. We are bringing structure, transparency, and human-centric design to the decisions that matter most in your home."
      />

      <motion.div
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* BENTO BLOCK 1: The Visual Anchor (Spans 8 columns) */}
        <motion.div
          variants={bentoItem}
          className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-[32px] border border-border/50 bg-white shadow-sm lg:col-span-8"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={activeImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={images.trustCarousel[activeImage]}
                alt="Warm modern Indian home interior"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

          <div className="relative z-10 p-8 md:p-10">
            <p className="mb-4 text-sm font-600 uppercase tracking-[0.2em] text-white">
              Built for modern homes
            </p>
            <h3 className="max-w-xl font-display text-3xl tracking-tight text-white md:text-4xl">
              Practical clarity instead of guesswork.
            </h3>

            <div className="mt-6 flex items-center gap-2">
              {images.trustCarousel.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveImage(index)}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: index === activeImage ? 24 : 8,
                    background:
                      index === activeImage
                        ? "#ec1561"
                        : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* BENTO BLOCK 2: The Philosophy/Quote (Spans 4 columns) */}
        <motion.div
          variants={bentoItem}
          className="relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-mist/80 to-white p-8 shadow-sm transition-shadow hover:shadow-md lg:col-span-4"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ec1561]/10 blur-3xl" />
          <Quote className="h-10 w-10 text-[#ec1561]/60" />

          <div className="mt-12">
            <p className="text-xl font-700 leading-snug tracking-tight text-ink md:text-2xl">
              "Trust is not a claim. It is a structured process families can
              understand, and professionals can respect."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={images.founderAvatar}
                  alt="The Relyn Team"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-sm font-800 text-ink">The Relyn Team</p>
                <p className="text-xs font-600 text-muted">
                  Founding Philosophy
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO BLOCKS 3, 4, 5: Core Values (Span 4 columns each) */}
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              variants={bentoItem}
              className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-[#ec1561]/20 lg:col-span-4"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ec1561]/5 text-[#ec1561] transition-colors duration-300 group-hover:bg-[#ec1561] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mb-3 text-xl font-800 text-ink">{value.title}</h4>
              <p className="text-base leading-relaxed text-muted">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
