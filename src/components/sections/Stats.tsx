"use client";

import { motion } from "framer-motion";
import {
  IconGlobe,
  IconProjects,
  IconShield,
  IconYears,
} from "@/components/ui/Icons";

const stats = [
  {
    value: "22",
    label: "Χρόνια εμπειρίας",
    icon: IconYears,
  },
  {
    value: "100+",
    label: "Ολοκληρωμένα έργα",
    icon: IconProjects,
  },
  {
    value: "Ελλάδα & Εξωτερικό",
    label: "Συνεργασίες με κορυφαίες εταιρείες",
    icon: IconGlobe,
  },
  {
    value: "100%",
    label: "Επαγγελματισμός & αξιοπιστία",
    icon: IconShield,
  },
];

export function Stats() {
  return (
    <section className="relative z-20 -mt-4 pb-4 md:-mt-10" aria-label="Στατιστικά">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="glass glow-border grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-[rgba(8,24,39,0.55)] p-5 sm:p-6 md:p-7"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon className="mb-3 text-electric-bright" aria-hidden />
                <p className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-[1.65rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
