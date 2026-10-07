import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  compact?: boolean;
  className?: string;
};

export function Logo({ href = "/#home", compact = false, className }: Props) {
  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative grid place-items-center rounded-xl border border-[rgba(70,170,255,0.35)] bg-[rgba(10,28,45,0.75)] shadow-[0_0_20px_rgba(22,155,255,0.2)]",
          compact ? "h-10 w-10" : "h-11 w-11",
        )}
        aria-hidden
      >
        <span className="font-display text-sm font-bold tracking-wider text-ink">
          DL
        </span>
        <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(77,184,255,0.25),transparent_60%)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-[0.14em] text-ink uppercase">
          DL Electric
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.65rem] tracking-[0.08em] text-muted">
            By Dimitris Lykos
          </span>
        ) : null}
      </span>
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="outline-none" aria-label="DL Electric — Αρχική">
      {content}
    </Link>
  );
}
