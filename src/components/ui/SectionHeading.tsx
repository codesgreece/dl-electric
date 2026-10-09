"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  action,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "mb-10 flex flex-col gap-4 md:mb-14",
        align === "center" ? "items-center text-center" : undefined,
        action ? "md:flex-row md:items-end md:justify-between" : undefined,
        className,
      )}
    >
      <div className={cn(align === "center" && "max-w-2xl")}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-electric-bright uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </motion.div>
  );
}
