"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconCheck } from "@/components/ui/Icons";

const highlights = [
  {
    title: "Απόφοιτος ΤΕΙ Πειραιά",
    subtitle: "Ηλεκτρολόγος Μηχανικός",
  },
  {
    title: "Πιστοποιητικά & Μελέτες",
    subtitle: "Πλήρης τεχνική τεκμηρίωση",
  },
  {
    title: "Εγκαταστάσεις οικοδομών",
    subtitle: "και βιομηχανικών έργων",
  },
  {
    title: "Συνεργασίες με κορυφαίες",
    subtitle: "εταιρείες σε Ελλάδα & Εξωτερικό",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative bg-[linear-gradient(180deg,#020914_0%,#061321_50%,#020914_100%)]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-electric-bright uppercase">
            Για εμάς
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            DL ELECTRIC
          </h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-muted uppercase">By Dimitris Lykos</p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              22 χρόνια εμπειρίας στον χώρο της ηλεκτρολογίας, με γνώση, συνέπεια και πάθος για την
              τεχνολογία.
            </p>
            <p>
              Απόφοιτος ΤΕΙ Πειραιά Ηλεκτρολόγος Μηχανικός, συνεργαζόμαστε με εταιρείες-κολοσσούς στην
              Ελλάδα και το εξωτερικό, προσφέροντας υψηλό επίπεδο υπηρεσιών και άψογες σχέσεις με τους
              πελάτες μας.
            </p>
          </div>

          <div className="mt-8 border-l border-[rgba(70,170,255,0.35)] pl-5">
            <p
              className="font-display text-2xl text-electric-bright italic"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Dimitris Lykos
            </p>
            <p className="mt-1 text-sm text-muted">Δημήτρης Λύκος</p>
            <p className="text-sm text-muted">Ηλεκτρολόγος Μηχανικός</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-6 sm:grid-cols-[1fr_0.95fr] sm:items-stretch"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(70,170,255,0.25)] shadow-[0_0_40px_rgba(22,155,255,0.12)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Dimitris Lykos — Ηλεκτρολόγος Μηχανικός"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-[rgba(2,9,20,0.25)] to-[rgba(22,155,255,0.12)] mix-blend-multiply" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,155,255,0.15),transparent_45%)]" />
            </div>
          </div>

          <ul className="flex flex-col justify-center gap-4">
            {highlights.map((item, i) => (
              <li
                key={item.title}
                className="glass flex gap-3 rounded-2xl p-4"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[rgba(22,155,255,0.15)] text-electric-bright">
                  <IconCheck className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
