"use client";

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
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(22,155,255,0.22),transparent_55%),linear-gradient(180deg,#081827_0%,#020914_100%)] p-6 text-center">
              <div className="hero-grid absolute inset-0 opacity-40" aria-hidden />
              <div className="relative grid h-28 w-28 place-items-center rounded-full border border-[rgba(70,170,255,0.45)] bg-[rgba(10,28,45,0.85)] shadow-[0_0_40px_rgba(22,155,255,0.35)]">
                <span className="font-display text-3xl font-bold tracking-[0.12em] text-ink">DL</span>
              </div>
              <p className="relative mt-6 font-display text-xl font-semibold text-ink">Dimitris Lykos</p>
              <p className="relative mt-1 text-sm text-muted">Ηλεκτρολόγος Μηχανικός</p>
              <p className="relative mt-4 max-w-[14rem] text-xs leading-relaxed text-muted/80">
                Επαγγελματικό πορτρέτο — προσθέστε πραγματική φωτογραφία από το Admin όταν είναι διαθέσιμη.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020914] to-transparent" />
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
