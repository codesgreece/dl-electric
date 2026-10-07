"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS } from "@/types";
import { IconClose, IconMenu, IconPhone } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[rgba(70,170,255,0.18)] bg-[rgba(2,9,20,0.78)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4 lg:h-[80px]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Κύρια πλοήγηση">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-electric-bright" : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute inset-0 -z-10 rounded-full bg-[rgba(22,155,255,0.12)] shadow-[0_0_18px_rgba(22,155,255,0.35)]"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:6948591717"
              className="btn-outline hidden min-h-11 gap-2 px-4 text-sm sm:inline-flex"
              aria-label="Κλήση στο 694 8591717"
            >
              <IconPhone className="text-electric-bright" />
              <span>694 8591717</span>
            </a>
            <a
              href="tel:6948591717"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(70,170,255,0.4)] text-electric-bright sm:hidden"
              aria-label="Κλήση"
            >
              <IconPhone />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(70,170,255,0.35)] text-ink lg:hidden"
              aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(2,9,20,0.72)] backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute inset-y-0 right-0 flex w-[min(100%,360px)] flex-col border-l border-[rgba(70,170,255,0.25)] bg-[rgba(6,19,33,0.96)] p-6 pt-24 shadow-[-20px_0_60px_rgba(0,0,0,0.45)]"
              onClick={(e) => e.stopPropagation()}
              aria-label="Μενού πλοήγησης"
            >
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-transparent px-4 py-3.5 text-lg text-ink transition hover:border-[rgba(70,170,255,0.3)] hover:bg-[rgba(22,155,255,0.08)] hover:text-electric-bright"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href="tel:6948591717"
                className="btn-primary mt-8"
                onClick={() => setOpen(false)}
              >
                <IconPhone />
                694 8591717
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
