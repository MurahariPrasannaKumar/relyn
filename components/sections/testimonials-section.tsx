"use client";

import React from "react";

/* ─── Data ─── */
const testimonials = [
  {
    title: "Relyn made hiring feel effortless.",
    text: "The whole process felt calm and professional. The shortlist was thoughtful and the support team was responsive throughout.",
    author: "Ananya Rao",
    role: "VP of Operations · Nexus",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Thoughtful Shortlist",
  },
  {
    title: "Fast, transparent, reliable.",
    text: "We needed reliable help quickly. The matching process was entirely transparent, and the communication exceeded our expectations.",
    author: "Rohit Menon",
    role: "Founder · Elevate Tech",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Transparent Process",
  },
  {
    title: "A data-driven path to confidence.",
    text: "It felt vastly different from traditional hiring. Relyn provided a clear, data-driven path that helped us hire with complete confidence.",
    author: "Meera S",
    role: "Director of Product · Lumina",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Data-Driven",
  },
  {
    title: "Exceeded our expectations.",
    text: "The team was attentive, communicative, and genuinely invested in finding the right fit. Highly recommended for any growing company.",
    author: "Harish Kumar",
    role: "Head of Talent · Vertex",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Highly Recommended",
  },
  {
    title: "Support we could count on.",
    text: "Professional, responsive, and genuinely helpful at every step. Relyn's team made a stressful process feel manageable.",
    author: "Priya Sharma",
    role: "COO · Northstar",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Dependable Support",
  },
  {
    title: "Best hiring partner we've used.",
    text: "From the first call to the final offer, every interaction was smooth. The quality of candidates was consistently excellent.",
    author: "Umesh Nair",
    role: "CEO · Brightline",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    stars: 5,
    tag: "Top-Notch Quality",
  },
];

/* Duplicate for seamless loop */
const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

/* ─── Star Component ─── */
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ─── Card Component ─── */
const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div
    className="testimonial-card flex-shrink-0 w-[320px] mx-3 rounded-2xl p-6 flex flex-col gap-4 select-none"
    style={{
      background: "rgba(255,255,255,0.72)",
      border: "1px solid rgba(226,232,240,0.9)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
      backdropFilter: "blur(12px)",
    }}
  >
    {/* Top row */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <img
          src={item.img}
          alt={item.author}
          loading="lazy"
          decoding="async"
          className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm flex-shrink-0"
        />
        <div>
          <p className="text-[13px] font-semibold text-gray-900 leading-tight">{item.author}</p>
          <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{item.role}</p>
        </div>
      </div>
      {/* Tag pill */}
      <span
        className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap"
        style={{
          background: "rgba(37,99,235,0.08)",
          color: "#2563eb",
          border: "1px solid rgba(37,99,235,0.15)",
        }}
      >
        {item.tag}
      </span>
    </div>

    {/* Stars */}
    <Stars count={item.stars} />

    {/* Quote */}
    <div>
      <p className="text-[13px] font-semibold text-gray-900 leading-snug mb-1.5">
        "{item.title}"
      </p>
      <p className="text-[12.5px] text-gray-500 leading-relaxed line-clamp-3">
        {item.text}
      </p>
    </div>
  </div>
);

/* ─── Main Component ─── */
export function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden font-sans bg-background">
      {/* Radial glow centre */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-16 mb-16 text-center">
        <span
          className="mb-5 block text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "#ec1561" }}
        >
          Customer Stories
        </span>

        <h2 className="font-display text-4xl lg:text-[52px] leading-[1.1] text-gray-900 tracking-tight mb-5">
          Trusted by innovative{" "}
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #2563eb, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            teams
          </span>
        </h2>

        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          See why industry leaders choose Relyn to streamline their most critical workflows.
        </p>

        {/* Social proof bar */}
        <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="text-sm font-semibold text-gray-700">4.9 / 5</span>
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <span className="text-sm text-gray-500">
            <span className="font-semibold text-gray-800">1,200+</span> verified reviews
          </span>
          <div className="w-px h-5 bg-gray-200" />
          <span className="text-sm text-gray-500">
            <span className="font-semibold text-gray-800">99%</span> satisfaction rate
          </span>
        </div>
      </div>

      {/* ── Marquee Row 1 — scrolls LEFT ── */}
      <div
        className="relative z-10 mb-5 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="flex marquee-left" style={{ width: "max-content" }}>
          {row1.map((item, i) => (
            <TestimonialCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* ── Marquee Row 2 — scrolls RIGHT ── */}
      <div
        className="relative z-10 overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}
      >
        <div className="flex marquee-right" style={{ width: "max-content" }}>
          {row2.map((item, i) => (
            <TestimonialCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.06) !important;
        }
      `}</style>
    </section>
  );
}
