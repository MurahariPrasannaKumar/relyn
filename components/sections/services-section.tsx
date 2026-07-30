"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";

const services = [
  {
    id: "01",
    title: "Housekeeping",
    description:
      "Dependable support for everyday home care, cleaning routines, and consistent household upkeep.",
    features: ["Routine cleaning", "Home organization", "Flexible requirements"],
    petals: 8,
    twist: 0
  },
  {
    id: "02",
    title: "Home Cooking",
    description:
      "Verified cooks for families looking for consistent, home-style meals and daily kitchen support.",
    features: ["Daily meals", "Regional preferences", "Kitchen assistance"],
    petals: 7,
    twist: 12
  },
  {
    id: "03",
    title: "Babysitting & Child Care",
    description:
      "Empathetic, experienced caregivers who ensure a safe, engaging environment for your children.",
    features: ["Infant care", "Toddler engagement", "School routines"],
    petals: 5,
    twist: -8
  },
  {
    id: "04",
    title: "Elder Care",
    description:
      "Compassionate companionship and daily assistance tailored for the comfort and dignity of seniors.",
    features: ["Daily assistance", "Medication prompts", "Companionship"],
    petals: 6,
    twist: 20
  },
  {
    id: "05",
    title: "Drivers",
    description:
      "Reliable, background-checked chauffeurs for daily commutes, school runs, and family travel.",
    features: ["City commutes", "School drop-offs", "Vehicle maintenance"],
    petals: 9,
    twist: -15
  }
];

function AbstractBloom({
  petals,
  twist,
  seed
}: {
  petals: number;
  twist: number;
  seed: number;
}) {
  const items = Array.from({ length: petals });
  const gradId = `bloom-grad-${seed}`;

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.16))" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 42, ease: "linear", repeat: Infinity }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="50%" stopColor="#cfcfcf" />
          <stop offset="100%" stopColor="#8f8f8f" />
        </linearGradient>
      </defs>
      <g transform="translate(200,200)">
        {items.map((_, index) => {
          const angle = (360 / petals) * index + twist;
          return (
            <ellipse
              key={index}
              cx="0"
              cy="-88"
              rx="42"
              ry="122"
              fill={`url(#${gradId})`}
              stroke="rgba(0,0,0,0.05)"
              transform={`rotate(${angle})`}
              opacity={0.95}
            />
          );
        })}
        <circle r="16" fill="#e2e2e2" />
      </g>
    </motion.svg>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const chunk = 1 / services.length;
    const index = Math.min(Math.floor(latest / chunk), services.length - 1);

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeService = services[activeIndex];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="absolute top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 -left-[360px] rounded-full border border-border/40 md:block lg:-left-[500px] lg:h-[680px] lg:w-[680px] xl:-left-[560px] xl:h-[780px] xl:w-[780px]">
          <motion.div
            className="relative h-full w-full transition-transform duration-700 ease-out"
            style={{
              transform: `rotate(${activeIndex * -12}deg)`
            }}
          >
            {services.map((service, idx) => {
              const angle = idx * 12 - 24;
              const radian = (angle * Math.PI) / 180;
              const radius = 50;

              const x = 50 + radius * Math.cos(radian);
              const y = 50 + radius * Math.sin(radian);

              const isActive = idx === activeIndex;

              return (
                <div
                  key={service.id}
                  className="absolute flex items-center gap-4 transition-opacity duration-500"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${activeIndex * 12}deg)`,
                    opacity: isActive ? 1 : 0.32
                  }}
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                      isActive ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                  <span className="font-display text-xl italic text-ink/80 md:text-2xl">
                    {service.id}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-12">
          <div className="w-full md:pl-36 lg:w-5/12 lg:pl-56 xl:pl-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
                  {activeService.title}
                </h2>

                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                  {activeService.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeService.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-500 text-ink shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-700 text-white transition-all hover:bg-ink/80 hover:shadow-xl hover:shadow-ink/20"
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-5/12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto aspect-square w-full max-w-md"
              >
                <AbstractBloom
                  petals={activeService.petals}
                  twist={activeService.twist}
                  seed={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
