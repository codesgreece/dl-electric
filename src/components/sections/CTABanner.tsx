"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrow } from "@/components/ui/Icons";

export function CTABanner() {
  return (
    <section className="section-pad pt-0" aria-labelledby="cta-heading">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[rgba(70,170,255,0.35)] shadow-[0_0_50px_rgba(22,155,255,0.15)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/cta-earth.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,9,20,0.92)_15%,rgba(6,19,33,0.78)_55%,rgba(2,9,20,0.7))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(22,155,255,0.25),transparent_45%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-6 px-6 py-14 sm:px-10 md:flex-row md:items-center md:justify-between md:py-16 lg:px-16">
            <div className="max-w-xl">
              <h2
                id="cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
              >
                Έτοιμοι να ξεκινήσουμε το επόμενο έργο σας;
              </h2>
              <p className="mt-3 text-base text-muted md:text-lg">
                Επικοινωνήστε σήμερα για δωρεάν ενημέρωση και προσφορά.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0 tracking-[0.08em] uppercase">
              Επικοινωνία
              <IconArrow />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
