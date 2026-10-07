"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServiceIcon } from "@/components/ui/Icons";

export type CertificationItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export function Certifications({ items }: { items: CertificationItem[] }) {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,155,255,0.05),transparent_60%)]" />
      <div className="container-x relative">
        <SectionHeading
          title="Πιστοποιήσεις"
          subtitle="Τεχνική εγκυρότητα, πρότυπα ασφαλείας και πλήρης τεκμηρίωση σε κάθε έργο."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="glass glow-hover rounded-2xl p-6 text-center"
              >
                <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-[rgba(70,170,255,0.35)] bg-[rgba(22,155,255,0.1)] text-electric-bright">
                  <Icon />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
