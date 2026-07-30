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
    graphic: "housekeeping"
  },
  {
    id: "02",
    title: "Home Cooking",
    description:
      "Verified cooks for families looking for consistent, home-style meals and daily kitchen support.",
    features: ["Daily meals", "Regional preferences", "Kitchen assistance"],
    graphic: "cooking"
  },
  {
    id: "03",
    title: "Babysitting & Child Care",
    description:
      "Empathetic, experienced caregivers who ensure a safe, engaging environment for your children.",
    features: ["Infant care", "Toddler engagement", "School routines"],
    graphic: "childcare"
  },
  {
    id: "04",
    title: "Elder Care",
    description:
      "Compassionate companionship and daily assistance tailored for the comfort and dignity of seniors.",
    features: ["Daily assistance", "Medication prompts", "Companionship"],
    graphic: "eldercare"
  },
  {
    id: "05",
    title: "Drivers",
    description:
      "Reliable, background-checked chauffeurs for daily commutes, school runs, and family travel.",
    features: ["City commutes", "School drop-offs", "Vehicle maintenance"],
    graphic: "drivers"
  }
] as const;

function ServiceGraphic({ variant, seed }: { variant: string; seed: number }) {
  const gradId = `service-grad-${seed}`;
  const sheenId = `service-sheen-${seed}`;

  // Shared glossy-petal shading: a diagonal light-to-dark sweep applied in each
  // petal's own local (pre-rotation) bounding box, so every petal reads as lit
  // from the same direction regardless of how it's rotated around the center.
  const defs = (
    <>
      <linearGradient id={gradId} x1="15%" y1="8%" x2="88%" y2="95%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="32%" stopColor="#ececec" />
        <stop offset="60%" stopColor="#c2c2c2" />
        <stop offset="100%" stopColor="#7f7f7f" />
      </linearGradient>
      <radialGradient id={sheenId} cx="30%" cy="20%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </>
  );

  const wrapperStyle = { filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.18))" };

  // A single "petal": a tall ellipse rotated out from the center, its own
  // gradient rotating with it for a consistent glossy highlight per blade.
  function Petal({
    angle,
    rx,
    ry,
    cy,
    opacity = 1
  }: {
    angle: number;
    rx: number;
    ry: number;
    cy: number;
    opacity?: number;
  }) {
    return (
      <ellipse
        cx="0"
        cy={cy}
        rx={rx}
        ry={ry}
        fill={`url(#${gradId})`}
        stroke="rgba(0,0,0,0.04)"
        transform={`rotate(${angle})`}
        opacity={opacity}
      />
    );
  }

  if (variant === "housekeeping") {
    // Wide, rounded bloom of fat overlapping petals
    const count = 7;
    const petals = Array.from({ length: count });
    return (
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        style={wrapperStyle}
        animate={{ rotate: 360 }}
        transition={{ duration: 46, ease: "linear", repeat: Infinity }}
      >
        <defs>{defs}</defs>
        <g transform="translate(200,200)">
          {petals.map((_, index) => (
            <Petal
              key={index}
              angle={(360 / count) * index}
              rx={70}
              ry={100}
              cy={-78}
              opacity={0.96}
            />
          ))}
          <circle r="20" fill={`url(#${sheenId})`} />
          <circle r="20" fill="none" stroke="rgba(0,0,0,0.06)" />
        </g>
      </motion.svg>
    );
  }

  if (variant === "cooking") {
    // Twisted swirl ribbons wrapped inside a sphere, like folded batter
    const clipId = `service-clip-${seed}`;
    const ribbons = [
      { d: "M -170 -60 C -60 -130, 60 10, 170 -60", width: 34 },
      { d: "M -170 20 C -60 -50, 60 90, 170 20", width: 30 },
      { d: "M -170 100 C -60 30, 60 170, 170 100", width: 26 }
    ];
    return (
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        style={wrapperStyle}
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      >
        <defs>
          {defs}
          <clipPath id={clipId}>
            <circle cx="0" cy="0" r="150" />
          </clipPath>
        </defs>
        <g transform="translate(200,200)">
          <circle r="150" fill={`url(#${gradId})`} />
          <g clipPath={`url(#${clipId})`}>
            {ribbons.map((band, i) => (
              <path
                key={i}
                d={band.d}
                fill="none"
                stroke="#f4f4f4"
                strokeWidth={band.width}
                strokeLinecap="round"
                opacity={0.85 - i * 0.1}
              />
            ))}
          </g>
          <circle r="150" fill={`url(#${sheenId})`} />
        </g>
      </motion.svg>
    );
  }

  if (variant === "childcare") {
    // Soft flower, gently fanned but balanced and centered
    const count = 7;
    const petals = Array.from({ length: count });
    return (
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        style={wrapperStyle}
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      >
        <defs>{defs}</defs>
        <g transform="translate(200,200)">
          {petals.map((_, index) => (
            <Petal
              key={index}
              angle={-90 + (index * 180) / (count - 1)}
              rx={32}
              ry={88}
              cy={-92}
              opacity={0.95}
            />
          ))}
          <circle r="18" fill={`url(#${sheenId})`} />
          <circle r="18" fill="none" stroke="rgba(0,0,0,0.06)" />
        </g>
      </motion.svg>
    );
  }

  if (variant === "eldercare") {
    // Gentle pinwheel with an extra twist per petal, evoking a calm embrace
    const count = 7;
    const petals = Array.from({ length: count });
    return (
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        style={wrapperStyle}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <defs>{defs}</defs>
        <g transform="translate(200,200)">
          {petals.map((_, index) => (
            <Petal
              key={index}
              angle={(360 / count) * index + 14}
              rx={38}
              ry={118}
              cy={-92}
              opacity={0.95}
            />
          ))}
          <circle r="17" fill={`url(#${sheenId})`} />
          <circle r="17" fill="none" stroke="rgba(0,0,0,0.06)" />
        </g>
      </motion.svg>
    );
  }

  // drivers: sharp radiating star burst, evoking motion and speed
  const count = 8;
  const spikes = Array.from({ length: count });
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      style={wrapperStyle}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    >
      <defs>{defs}</defs>
      <g transform="translate(200,200)">
        {spikes.map((_, index) => (
          <Petal
            key={index}
            angle={(360 / count) * index}
            rx={14}
            ry={150}
            cy={-150}
            opacity={0.96}
          />
        ))}
        <circle r="14" fill={`url(#${sheenId})`} />
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
    <section id="services" ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <div className="shrink-0 mx-auto max-w-3xl px-6 pt-24 text-center lg:pt-16">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#ec1561" }}
          >
            Services
          </p>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Support built around your household.
          </h2>
        </div>

        <div className="relative flex flex-1 items-start overflow-hidden pt-10 lg:items-center lg:pt-0">
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
            <div className="w-full md:pl-36 lg:w-6/12 lg:pl-56 xl:pl-56">
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

            <div className="w-full lg:w-4/12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mx-auto aspect-square w-full max-w-sm"
                >
                  <ServiceGraphic variant={activeService.graphic} seed={activeIndex} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
