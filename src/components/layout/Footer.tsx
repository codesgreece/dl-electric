import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS } from "@/types";

const social = [
  { label: "Instagram", href: "#", aria: "Instagram (σύντομα)" },
  { label: "LinkedIn", href: "#", aria: "LinkedIn (σύντομα)" },
  { label: "YouTube", href: "#", aria: "YouTube (σύντομα)" },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(70,170,255,0.15)] bg-[#01070f]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo href="/#home" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Designed for a brighter tomorrow.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-electric-bright uppercase">
            Πλοήγηση
          </p>
          <ul className="space-y-2.5">
            {NAV_LINKS.filter((l) => l.href !== "#about").map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted transition hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-electric-bright uppercase">
            Social
          </p>
          <ul className="flex flex-wrap gap-3">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.aria}
                  className="inline-flex min-h-11 items-center rounded-full border border-[rgba(70,170,255,0.25)] px-4 text-sm text-muted transition hover:border-electric hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-sm text-muted">
            <a href="tel:6948591717" className="block hover:text-electric-bright">
              694 8591717
            </a>
            <a
              href="mailto:dimitrislikos85@gmail.com"
              className="block hover:text-electric-bright"
            >
              dimitrislikos85@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(70,170,255,0.1)]">
        <div className="container-x flex flex-col gap-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DL Electric. Όλα τα δικαιώματα διατηρούνται.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-muted">Φτιάχτηκε από</span>
            <a
              href="https://nexusdevstudio.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center rounded-full border border-[rgba(70,170,255,0.28)] bg-[rgba(8,24,39,0.65)] px-4 text-sm font-semibold text-ink transition hover:border-electric hover:bg-[rgba(22,155,255,0.1)] hover:text-electric-bright"
            >
              NexusDevStudio Greece
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
