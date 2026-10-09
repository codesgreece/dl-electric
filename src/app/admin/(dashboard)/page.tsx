import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const [projects, messages, services, unread] = await Promise.all([
    prisma.project.count(),
    prisma.message.count(),
    prisma.service.count(),
    prisma.message.count({ where: { status: "NEW" } }),
  ]);

  const cards = [
    { label: "Συνολικά έργα", value: projects, href: "/admin/projects" },
    { label: "Νέα μηνύματα", value: unread, href: "/admin/messages" },
    { label: "Υπηρεσίες", value: services, href: "/admin/services" },
    { label: "Website status", value: "Online", href: "/" },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-ink">Overview</h1>
      <p className="mt-2 text-muted">Γρήγορη εικόνα του site και των νέων μηνυμάτων.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="glass glow-hover rounded-2xl p-5 transition"
          >
            <p className="text-xs tracking-[0.16em] text-muted uppercase">{card.label}</p>
            <p className="mt-3 font-display text-3xl font-semibold text-electric-bright">
              {card.value}
            </p>
          </Link>
        ))}
      </div>

      <div className="glass mt-8 rounded-2xl p-6">
        <h2 className="font-display text-xl text-ink">Πρόσφατα μηνύματα</h2>
        <RecentMessages />
        <p className="mt-4 text-sm text-muted">Σύνολο μηνυμάτων: {messages}</p>
      </div>
    </div>
  );
}

async function RecentMessages() {
  const recent = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  if (recent.length === 0) {
    return <p className="mt-4 text-sm text-muted">Δεν υπάρχουν μηνύματα ακόμα.</p>;
  }

  return (
    <ul className="mt-4 space-y-3">
      {recent.map((msg) => (
        <li
          key={msg.id}
          className="flex flex-col gap-1 rounded-xl border border-[rgba(70,170,255,0.12)] bg-[rgba(8,24,39,0.45)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-ink">{msg.name}</p>
            <p className="text-xs text-muted">{msg.email}</p>
          </div>
          <span
            className={
              msg.status === "NEW"
                ? "text-xs text-electric-bright"
                : "text-xs text-muted"
            }
          >
            {msg.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
