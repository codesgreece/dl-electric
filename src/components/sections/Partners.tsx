"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const placeholders = [
  "Κορυφαίες εταιρείες",
  "Ελλάδα & Εξωτερικό",
  "Βιομηχανικοί συνεργάτες",
  "Κατασκευαστικά έργα",
  "Τεχνολογικές υποδομές",
  "International projects",
];

export function Partners() {
  return (
    <section className="section-pad relative pt-0" aria-labelledby="partners-heading">
      <div className="container-x">
        <SectionHeading
          title="Συνεργασίες που μας εμπιστεύονται"
          subtitle="Συνεργασίες με κορυφαίες εταιρείες στην Ελλάδα και το εξωτερικό."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {placeholders.map((label) => (
            <div
              key={label}
              className="glass flex min-h-[88px] items-center justify-center rounded-xl px-3 text-center text-xs tracking-wide text-muted sm:text-sm"
            >
              {label}
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-center text-xs text-muted/80">
          Τα ονόματα συγκεκριμένων συνεργατών εμφανίζονται μόνο κατόπιν επιβεβαίωσης.
        </p>
      </div>
    </section>
  );
}
