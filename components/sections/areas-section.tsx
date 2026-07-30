"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";

const ACCENT = "#ec1561";

type AreaNode = {
  name: string;
  status: string;
  x: number;
  y: number;
  hub?: boolean;
};

// Coordinates kept within a 30–84% vertical band so labels never
// collide with the heading above or overflow the card below.
const nodes: AreaNode[] = [
  { name: "Jayanagar", status: "Serving now", x: 12, y: 42.9 },
  { name: "Banashankari", status: "Serving now", x: 22, y: 64.3 },
  { name: "JP Nagar", status: "Serving now", x: 30, y: 51.4 },
  { name: "BTM Layout", status: "Serving now", x: 42, y: 72.9 },
  { name: "Koramangala", status: "Serving now", x: 48, y: 38.6 },
  { name: "HSR Layout", status: "Serving now", x: 60, y: 68.6 },
  { name: "Electronic City", status: "Launching soon", x: 70, y: 84 },
  { name: "Indiranagar", status: "Launching soon", x: 65, y: 30 },
  { name: "Whitefield", status: "Relyn HQ", x: 82, y: 47.1, hub: true },
  { name: "Sarjapur Road", status: "Launching soon", x: 90, y: 66.9 },
];

const edges = [
  { from: 0, to: 1, bow: -5 },
  { from: 1, to: 2, bow: -4 },
  { from: 2, to: 4, bow: 8 },
  { from: 3, to: 4, bow: -6 },
  { from: 4, to: 5, bow: 10 },
  { from: 6, to: 5, bow: -5 },
  { from: 5, to: 7, bow: -12 },
  { from: 7, to: 8, bow: -8 },
  { from: 8, to: 9, bow: -5 },
  { from: 4, to: 8, bow: 15 }, // Extra connection for a denser network
];

const dust = [
  { x: 15, y: 20 },
  { x: 55, y: 88 },
  { x: 95, y: 82 },
  { x: 5, y: 78 },
];

function curve(
  a: { x: number; y: number },
  b: { x: number; y: number },
  bow: number,
) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * bow;
  const cy = my + ny * bow;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export function AreasSection() {
  const paths = edges.map((edge) =>
    curve(nodes[edge.from], nodes[edge.to], edge.bow),
  );
  const DOTS_PER_PATH = 3; // Number of moving points per connection

  return (
    <Section className="relative overflow-hidden bg-background py-24">
      {/* Subtle ambient glows for depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[120px]" />

      {/* Header text */}
      <div className="relative z-20 text-center">
        <p
          className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: ACCENT }}
        >
          Areas we serve
        </p>
        <h2 className="mx-auto max-w-3xl font-serif text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
          Start focused.
          <br />
          Grow <span style={{ color: ACCENT }}>carefully.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
          We don&apos;t blanket a city on day one. Relyn serves select Bengaluru
          neighbourhoods first, so every match stays high quality.
        </p>
      </div>

      {/* Map card — sits in normal flow below the header, so it can never overlap it */}
      <div className="relative mt-16 h-[480px] w-full overflow-hidden rounded-[34px] border border-border bg-white shadow-soft sm:h-[560px]">
        {/* Dotted "world map" texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.12)_1px,transparent_1.4px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_45%,transparent_100%)]" />

        {dust.map((d, i) => (
          <span
            key={`dust-${i}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-slate-300/60"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          />
        ))}

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {paths.map((d, i) => (
            <motion.path
              key={`path-${i}`}
              d={d}
              fill="none"
              stroke={ACCENT}
              strokeOpacity={0.18}
              strokeWidth="0.18"
              strokeDasharray="1 2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: i * 0.1, ease: "easeInOut" }}
            />
          ))}

          {/* Render multiple traveling dots per path */}
          {paths.flatMap((_, i) =>
            Array.from({ length: DOTS_PER_PATH }).map((_, j) => (
              <circle
                key={`dot-${i}-${j}`}
                r="0.32"
                fill={ACCENT}
                style={{ filter: `drop-shadow(0 0 1.5px ${ACCENT})` }}
                className={`areas-travel-dot-${i}-${j}`}
              />
            )),
          )}
        </svg>

        {nodes.map((node) => (
          <div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="relative flex flex-col items-center group cursor-default">
              {/* Pulsing dot marks the exact coordinate; pin sits on top pointing down at it */}
              <span
                className="relative flex items-center justify-center"
                style={{
                  height: node.hub ? 14 : 11,
                  width: node.hub ? 14 : 11,
                }}
              >
                <MapPin
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{
                    height: node.hub ? 16 : 14,
                    width: node.hub ? 16 : 14,
                    color: node.hub ? ACCENT : "#64748b",
                    fill: "none",
                  }}
                  strokeWidth={1.75}
                />
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{
                    background: node.hub
                      ? `${ACCENT}30`
                      : "rgba(236,21,97,0.12)",
                  }}
                  animate={{
                    scale: node.hub ? [1, 2.2] : [1, 1.7],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: node.hub ? 1.4 : 1.7,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <span
                  className="relative rounded-full border-2 border-white shadow-[0_2px_6px_rgba(15,23,42,0.2)] transition-transform duration-300 group-hover:scale-125"
                  style={{
                    height: node.hub ? 8 : 6.5,
                    width: node.hub ? 8 : 6.5,
                    background: node.hub
                      ? `linear-gradient(135deg, ${ACCENT}, #b3104a)`
                      : "linear-gradient(135deg, #334155, #0f172a)",
                  }}
                />
              </span>

              {/* Refined Glassmorphic Labels */}
              <div className="mt-3 whitespace-nowrap rounded-xl border border-white/60 bg-white/70 px-3.5 py-1.5 text-center shadow-sm backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/95 group-hover:shadow-md">
                <p className="text-sm font-semibold text-slate-800">
                  {node.name}
                </p>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                  style={{ color: node.hub ? ACCENT : "#64748b" }}
                >
                  {node.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamically generated animations for the multiple dots */}
      <style>{`
        ${paths
          .flatMap((d, i) =>
            Array.from({ length: DOTS_PER_PATH }).map(
              (_, j) => `
              .areas-travel-dot-${i}-${j} {
                offset-path: path('${d}');
                animation: areas-travel 4s ease-in-out ${i * 0.3 + j * 1.4}s infinite;
              }
            `,
            ),
          )
          .join("\n")}
        
        @keyframes areas-travel {
          0% { offset-distance: 0%; opacity: 0; transform: scale(0.5); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; transform: scale(1); }
          100% { offset-distance: 100%; opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </Section>
  );
}
