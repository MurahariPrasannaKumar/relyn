"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={cn("px-6 py-24 sm:px-10 lg:px-20", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </motion.section>
  );
}
