"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { HeroOrbitCarousel } from "@/components/hero/HeroOrbitCarousel";
import { ParticleField } from "@/components/ui/ParticleField";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { TextLink } from "@/components/ui/TextLink";
import { EASE } from "@/lib/motion";

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 }
  }
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE }
  }
};

export function HeroSection() {
  return <Hero3D />;
}

export function Hero3D() {
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [activeHeroBackground, setActiveHeroBackground] = useState<string | null>(
    null
  );
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const schedule = window.setTimeout(() => setShowCarousel(true), 150);

    return () => {
      window.clearTimeout(schedule);
    };
  }, []);

  const handleHorizontalStart = useCallback(() => {
    setShowHeroContent(true);
  }, []);

  const handleActiveImageChange = useCallback((imageSrc: string) => {
    setActiveHeroBackground(imageSrc);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] w-full max-w-full overflow-hidden bg-background">
      <div
        className="absolute inset-0 z-[-2] bg-background bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: activeHeroBackground
            ? `url(${activeHeroBackground})`
            : undefined,
          opacity: activeHeroBackground ? 1 : 0
        }}
        aria-hidden
      />
      <div className="absolute inset-y-0 left-0 z-[-1] w-full max-w-3xl bg-gradient-to-r from-background/95 via-background/55 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
        <ParticleField className="h-full w-full" />
      </div>

      {showCarousel ? (
        <HeroOrbitCarousel
          onHorizontalStart={handleHorizontalStart}
          onActiveImageChange={handleActiveImageChange}
        />
      ) : null}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-start justify-center px-6 pb-36 pt-32 text-left sm:px-10 sm:pt-36 lg:px-14">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate={showHeroContent ? "show" : "hidden"}
          className="max-w-lg"
        >
          <motion.div variants={heroItem} className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/30" aria-hidden />
            <p className="text-xs font-700 uppercase tracking-[0.22em] text-black/70">
              Relyn India Pvt Ltd
            </p>
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="mt-7 font-display tracking-tight text-black [font-size:clamp(2.25rem,3.4vw+1rem,3.75rem)] [line-height:1.12]"
          >
            <span className="block">Reliable household help</span>
            <span className="block">without the guesswork.</span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-7 max-w-md text-sm font-500 leading-relaxed text-black/70 sm:text-base"
          >
            Verified housekeepers and home cooks, matched with care.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <PrimaryCTA href="#contact">Find Household Help</PrimaryCTA>
            <TextLink href="#services" className="text-black/68 hover:text-black">
              View services
            </TextLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
