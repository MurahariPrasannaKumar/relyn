"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const heroImages = [
  "/img-01.jpg",
  "/img-02.jpg",
  "/img-03.jpg",
  "/img-04.jpg",
  "/img-05.jpg",
  "/img-06.jpg",
  "/img-07.jpg",
  "/img-08.jpg",
  "/img-09.jpg",
];

const loopImages = [...heroImages, ...heroImages];

type HeroOrbitCarouselProps = {
  onHorizontalStart?: () => void;
  onActiveImageChange?: (imageSrc: string) => void;
};

export function HeroOrbitCarousel({
  onHorizontalStart,
  onActiveImageChange,
}: HeroOrbitCarouselProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const hasShownContentRef = useRef(false);
  const activeIndexRef = useRef(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const items = itemsRef.current.filter(
      (item): item is HTMLDivElement => item !== null,
    );

    if (!root || !stage || items.length === 0) return;

    const cardWidth = items[0].offsetWidth || 236;
    const cardHeight = items[0].offsetHeight || 140;
    const cardGap = 24;
    const step = cardWidth + cardGap;

    const halfItems = items.length / 2;
    const totalTrackWidth = halfItems * step;
    const lineStartX = -window.innerWidth / 2 + cardWidth / 2;
    const getLineX = (index: number) => lineStartX + index * step;
    const getMarqueeX = (index: number) =>
      lineStartX + index * step - totalTrackWidth;
    const finalLineYOffset = root.offsetHeight / 2 - cardHeight / 2;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ellipseRadiusX = Math.min(window.innerWidth * 0.36, 360);
    const ellipseRadiusY = Math.min(window.innerHeight * 0.15, 120);
    const startEllipseRadiusX = ellipseRadiusX * 0.18;
    const startEllipseRadiusY = ellipseRadiusY * 0.18;

    let activeImageTicker: number | null = null;

    const ctx = gsap.context(() => {
      gsap.set(root, { perspective: 1200 });
      gsap.set(stage, { transformStyle: "preserve-3d" });

      const orbitState = {
        radiusX: startEllipseRadiusX,
        radiusY: startEllipseRadiusY,
        rotation: -Math.PI / 3,
        z: -1800,
        scale: 0.46,
        opacity: 0,
        tilt: 62,
      };

      const renderOrbit = () => {
        items.forEach((item, index) => {
          const angle =
            (index / items.length) * Math.PI * 2 + orbitState.rotation;
          const depthFactor = (Math.sin(angle) + 1) / 2;
          const itemScale = orbitState.scale * (0.8 + depthFactor * 0.22);
          const itemZ = orbitState.z + depthFactor * 260;
          const itemOpacity = Math.min(
            1,
            orbitState.opacity * (0.76 + depthFactor * 0.24),
          );
          const itemZIndex = Math.round(20 + depthFactor * 80);

          gsap.set(item, {
            xPercent: -50,
            yPercent: -50,
            x: Math.cos(angle) * orbitState.radiusX,
            y: Math.sin(angle) * orbitState.radiusY,
            z: itemZ,
            scale: itemScale,
            opacity: itemOpacity,
            rotateX: orbitState.tilt,
            rotateY: angle * (180 / Math.PI),
            zIndex: itemZIndex,
            force3D: true,
            transformOrigin: "50% 50%",
          });
        });
      };

      renderOrbit();

      const syncActiveBackground = (index: number) => {
        const normalizedIndex =
          ((index % heroImages.length) + heroImages.length) % heroImages.length;
        if (normalizedIndex !== activeIndexRef.current) {
          activeIndexRef.current = normalizedIndex;
          onActiveImageChange?.(heroImages[normalizedIndex]);
        }
      };

      const startBackgroundTicker = (intervalMs: number) => {
        syncActiveBackground(0);
        activeImageTicker = window.setInterval(() => {
          syncActiveBackground(activeIndexRef.current + 1);
        }, intervalMs);
      };

      startBackgroundTicker(prefersReducedMotion ? 3600 : 3200);

      const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

      if (prefersReducedMotion) {
        gsap.set(items, {
          xPercent: -50,
          yPercent: -50,
          y: finalLineYOffset,
          z: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          zIndex: 30,
          x: getLineX,
          force3D: true,
        });

        if (!hasShownContentRef.current) {
          hasShownContentRef.current = true;
          onHorizontalStart?.();
        }

        gsap.to(items, {
          x: getMarqueeX,
          duration: 52,
          ease: "none",
          repeat: -1,
        });

        return;
      }

      tl.to(
        orbitState,
        {
          radiusX: ellipseRadiusX,
          radiusY: ellipseRadiusY,
          rotation: Math.PI * 1.15,
          z: 0,
          scale: 1,
          opacity: 1,
          tilt: 16,
          duration: 3.1,
          ease: "power3.out",
          onUpdate: renderOrbit,
        },
        0,
      )
        .to(
          items,
          {
            y: finalLineYOffset,
            z: 0,
            scale: 1,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            zIndex: 30,
            x: getLineX,
            duration: 2,
            ease: "expo.inOut",
            stagger: 0.015,
          },
          "-=1.2",
        )
        .add(() => {
          if (!hasShownContentRef.current) {
            hasShownContentRef.current = true;
            onHorizontalStart?.();
          }

          gsap.to(items, {
            x: getMarqueeX,
            duration: 48,
            ease: "none",
            repeat: -1,
          });
        });
    }, root);

    return () => {
      if (activeImageTicker !== null) {
        window.clearInterval(activeImageTicker);
      }
      ctx.revert();
    };
  }, [onActiveImageChange, onHorizontalStart]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 z-10 h-[22%] bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div
        ref={stageRef}
        className="absolute inset-0 z-20 transform-[translateZ(0)] will-change-transform"
      >
        {loopImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            ref={(node) => {
              itemsRef.current[index] = node;
            }}
            className="absolute left-1/2 top-1/2 contain-[layout_paint_style] will-change-transform"
          >
            <div className="relative h-[110px] w-[192px] overflow-hidden bg-black/5 sm:h-[130px] sm:w-[224px] lg:h-[160px] lg:w-[272px]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 272px, (min-width: 640px) 224px, 192px"
                className="object-cover"
                priority={index < 3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
