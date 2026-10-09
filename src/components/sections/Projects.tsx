"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_CATEGORY_LABELS, type ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  featured: boolean;
};

const filters: Array<{ key: "ALL" | ProjectCategory; label: string }> = [
  { key: "ALL", label: "Όλα" },
  { key: "APARTMENTS", label: "Διαμερίσματα" },
  { key: "HIGH_VOLTAGE", label: "Μέση/Υψηλή Τάση" },
  { key: "SHOPS", label: "Καταστήματα" },
  { key: "SMART_HOME", label: "Smart Home" },
  { key: "INDUSTRIAL", label: "Βιομηχανικά Έργα" },
  { key: "CCTV", label: "CCTVs" },
];

export function Projects({ projects }: { projects: ProjectItem[] }) {
  const [filter, setFilter] = useState<"ALL" | ProjectCategory>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          title="Έργα"
          subtitle="Σύγχρονες εγκαταστάσεις, απαιτητικά έργα, κορυφαία αποτελέσματα."
        />

        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-thin"
          role="tablist"
          aria-label="Φίλτρα έργων"
        >
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={filter === item.key}
              onClick={() => setFilter(item.key)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-sm transition",
                filter === item.key
                  ? "border-electric bg-[rgba(22,155,255,0.15)] text-electric-bright shadow-[0_0_18px_rgba(22,155,255,0.25)]"
                  : "border-[rgba(70,170,255,0.2)] text-muted hover:border-[rgba(70,170,255,0.45)] hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group glass glow-hover overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020914]/95) via-[#020914]/25) to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full border border-[rgba(70,170,255,0.35)] bg-[rgba(8,24,39,0.75)] px-3 py-1 text-[0.65rem] tracking-wide text-electric-bright backdrop-blur">
                    {PROJECT_CATEGORY_LABELS[project.category]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
