"use client";

import { useEffect, useState } from "react";
import type { Message } from "@prisma/client";
import { formatDate } from "@/lib/utils";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/messages");
    setMessages(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function markRead(id: string) {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "READ" }),
    });
    await load();
  }

  async function onDelete(id: string) {
    if (!confirm("Διαγραφή μηνύματος;")) return;
    await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Messages</h1>
        <p className="mt-2 text-muted">Μηνύματα από τη φόρμα επικοινωνίας.</p>
      </div>

      {loading ? (
        <p className="text-muted">Φόρτωση...</p>
      ) : messages.length === 0 ? (
        <div className="glass rounded-2xl p-8 text-center text-muted">Δεν υπάρχουν μηνύματα.</div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <article key={msg.id} className="glass rounded-2xl p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-lg text-ink">{msg.name}</h2>
                    <span
                      className={
                        msg.status === "NEW"
                          ? "rounded-full bg-[rgba(22,155,255,0.15)] px-2 py-0.5 text-[0.65rem] text-electric-bright"
                          : "rounded-full bg-white/5 px-2 py-0.5 text-[0.65rem] text-muted"
                      }
                    >
                      {msg.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    <a href={`mailto:${msg.email}`} className="hover:text-electric-bright">
                      {msg.email}
                    </a>
                    {" · "}
                    <a href={`tel:${msg.phone}`} className="hover:text-electric-bright">
                      {msg.phone}
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-muted">{formatDate(msg.createdAt)}</p>
                </div>
                <div className="flex gap-2">
                  {msg.status === "NEW" ? (
                    <button
                      type="button"
                      className="btn-outline min-h-10 px-4 text-sm"
                      onClick={() => markRead(msg.id)}
                    >
                      Mark as read
                    </button>
                  ) : null}
                  <button
                    type="button"
                    className="btn-outline min-h-10 px-4 text-sm text-red-300"
                    onClick={() => onDelete(msg.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-ink/90">
                {msg.message}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
