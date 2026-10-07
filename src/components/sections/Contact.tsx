"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GreeceMap } from "@/components/sections/GreeceMap";
import { IconArrow, IconGlobe, IconMail, IconPhone } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const initial = { name: "", email: "", phone: "", message: "" };

export function Contact({
  phone = "694 8591717",
  email = "dimitrislikos85@gmail.com",
}: {
  phone?: string;
  email?: string;
}) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Partial<typeof initial>>({});
  const [state, setState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState("");

  function validate() {
    const next: Partial<typeof initial> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = "Το ονοματεπώνυμο είναι υποχρεωτικό";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Μη έγκυρο email";
    }
    if (!form.phone.trim() || form.phone.trim().length < 8) {
      next.phone = "Το τηλέφωνο είναι υποχρεωτικό";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Το μήνυμα είναι υποχρεωτικό";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setServerError(data.error || "Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
        return;
      }
      setState("success");
      setForm(initial);
    } catch {
      setState("error");
      setServerError("Αδυναμία σύνδεσης. Ελέγξτε τη σύνδεσή σας.");
    }
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          title="Επικοινωνία"
          subtitle="Είμαστε στη διάθεσή σας για κάθε έργο, μικρό ή μεγάλο."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="glass glow-hover flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(22,155,255,0.12)] text-electric-bright">
                <IconPhone />
              </span>
              <span>
                <span className="block text-xs tracking-wide text-muted uppercase">
                  Τηλέφωνο επικοινωνίας
                </span>
                <span className="mt-1 block font-display text-xl text-ink">{phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${email}`}
              className="glass glow-hover flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(22,155,255,0.12)] text-electric-bright">
                <IconMail />
              </span>
              <span>
                <span className="block text-xs tracking-wide text-muted uppercase">Email</span>
                <span className="mt-1 block break-all font-display text-lg text-ink">{email}</span>
              </span>
            </a>

            <div className="glass flex items-start gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(22,155,255,0.12)] text-electric-bright">
                <IconGlobe />
              </span>
              <span>
                <span className="block text-xs tracking-wide text-muted uppercase">
                  Περιοχή δραστηριότητας
                </span>
                <span className="mt-1 block font-display text-xl text-ink">Ελλάδα & Εξωτερικό</span>
              </span>
            </div>

            <GreeceMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-2xl p-6 sm:p-8"
          >
            {state === "success" ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-[rgba(22,155,255,0.15)] text-2xl text-electric-bright">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-ink">Το μήνυμα στάλθηκε</h3>
                <p className="mt-2 max-w-sm text-muted">
                  Ευχαριστούμε για την επικοινωνία. Θα επανέλθουμε το συντομότερο δυνατό.
                </p>
                <button
                  type="button"
                  className="btn-outline mt-8"
                  onClick={() => setState("idle")}
                >
                  Νέο μήνυμα
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Ονοματεπώνυμο
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={cn("input-field", errors.name && "border-red-400/60")}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                  {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={cn("input-field", errors.email && "border-red-400/60")}
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      required
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-300">{errors.email}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                      Τηλέφωνο
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={cn("input-field", errors.phone && "border-red-400/60")}
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      required
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={cn("input-field", errors.message && "border-red-400/60")}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-red-300">{errors.message}</p>
                  ) : null}
                </div>

                {state === "error" && serverError ? (
                  <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {serverError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="btn-primary w-full tracking-[0.1em] uppercase disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={state === "loading"}
                >
                  {state === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Αποστολή...
                    </span>
                  ) : (
                    <>
                      Αποστολή
                      <IconArrow />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
