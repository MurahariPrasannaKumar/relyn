"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "/contact" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto grid h-[64px] w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/60 bg-white/55 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 sm:px-6",
          scrolled && "bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
        )}
      >
        <a href="/" className="flex items-center gap-3 text-[21px] font-600 text-black">
          <span className="relative h-7 w-7" aria-hidden>
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 h-3.5 w-1.5 origin-[50%_14px] -translate-x-1/2 -translate-y-[14px] rounded-full bg-[#ec1561]"
                style={{ transform: `translate(-50%, -14px) rotate(${index * 45}deg)` }}
              />
            ))}
          </span>
          Relyn
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-500 text-black/78 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-self-end lg:block">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-600 text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.26)]"
          >
            Find help
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center justify-self-end rounded-full text-black lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto h-full w-[86%] max-w-sm bg-background p-6 shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xl font-600 text-black">Relyn</span>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-500 text-black"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-5 text-sm font-600 text-white"
                  onClick={() => setOpen(false)}
                >
                  Find Household Help
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
