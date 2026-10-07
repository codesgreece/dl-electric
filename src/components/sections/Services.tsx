"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServiceIcon, IconArrow } from "@/components/ui/Icons";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
};

export function Services({ services }: { services: ServiceItem[] }) {
  return (
    <section id="services" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,155,255,0.06),transparent_55%)]" />
      <div className="container-x relative">
        <SectionHeading
          title="Οι υπηρεσίες μας"
          subtitle="Ολοκληρωμένες λύσεις για κάθε ανάγκη, από τη μελέτη έως την υλοποίηση."
          action={
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-electric-bright transition hover:text-cyan"
            >
              Δείτε όλες τις υπηρεσίες
              <IconArrow />
            </a>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group glass glow-hover overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 grid h-9 w-9 place-items-center rounded-full border border-[rgba(70,170,255,0.4)] bg-[rgba(8,24,39,0.75)] text-electric-bright backdrop-blur">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
