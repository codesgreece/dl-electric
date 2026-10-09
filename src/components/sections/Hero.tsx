"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrow, IconHome, IconLightning, IconPlay } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-[72px] lg:pt-[80px]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 scale-105"
          animate={{ scale: [1.05, 1.1, 1.05], x: [0, -12, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hero-building.jpg"
            alt="Σύγχρονο κτίριο με αρχιτεκτονικό φωτισμό τη νύχτα"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020914]/95) via-[#020914]/78) to-[#020914]/45)" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-transparent to-[#020914]/55" />
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="animate-pulse-glow absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(22,155,255,0.28),transparent_70%)] blur-2xl" />
        <div className="animate-pulse-glow absolute right-10 bottom-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(103,217,255,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="container-x relative z-10 grid min-h-[calc(100svh-80px)] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold tracking-[0.28em] text-electric-bright uppercase sm:text-[0.7rem]"
          >
            Η ενέργεια του αύριο, σήμερα
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            Ηλεκτρολογικές{" "}
            <span className="text-gradient">λύσεις</span>
            <br />
            χωρίς όρια.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            High end medium voltage installations, smart home, CCTV και ολοκληρωμένες
            ηλεκτρολογικές μελέτες, με 22 χρόνια εμπειρίας.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn-primary text-sm tracking-[0.08em] uppercase">
              Επικοινωνήστε μαζί μας
              <IconArrow />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-3 rounded-full px-2 text-sm text-ink transition hover:text-electric-bright"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(70,170,255,0.45)] bg-[rgba(10,28,45,0.55)] text-electric-bright shadow-[0_0_20px_rgba(22,155,255,0.25)]">
                <IconPlay />
              </span>
              Δείτε το έργο μας
            </a>
          </motion.div>
        </div>

        <div className="relative hidden h-full min-h-[320px] lg:block">
          <motion.div
            className="animate-float glass absolute top-[18%] right-[8%] max-w-[240px] rounded-2xl p-4 glow-border"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className="mb-2 flex items-center gap-2 text-electric-bright">
              <IconHome className="h-4 w-4" />
              <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
                Smart Home
              </span>
            </div>
            <p className="text-sm text-muted">Έξυπνα συστήματα για κατοικίες & επαγγελματικούς χώρους.</p>
          </motion.div>

          <motion.div
            className="animate-float-delayed glass absolute bottom-[22%] left-[4%] max-w-[260px] rounded-2xl p-4 glow-border"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="mb-2 flex items-center gap-2 text-electric-bright">
              <IconLightning className="h-4 w-4" />
              <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Μέση & High Voltage
              </span>
            </div>
            <p className="text-sm text-muted">Εγκαταστάσεις υψηλής ακρίβειας και αξιοπιστίας.</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile floating chips */}
      <div className="container-x relative z-10 -mt-2 mb-6 flex gap-3 overflow-x-auto pb-2 lg:hidden">
        <div className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs tracking-wide text-ink">
          <IconHome className="h-3.5 w-3.5 text-electric-bright" />
          SMART HOME
        </div>
        <div className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs tracking-wide text-ink">
          <IconLightning className="h-3.5 w-3.5 text-electric-bright" />
          ΜΕΣΗ & HIGH VOLTAGE
        </div>
      </div>
    </section>
  );
}
