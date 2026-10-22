"use client";

import { signOut } from "next-auth/react";
import { Logo } from "@/components/layout/Logo";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell flex min-h-screen flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-[rgba(70,170,255,0.12)] px-4 py-4 md:px-8">
        <Logo href="/" compact />
        <p className="text-sm text-muted">Ανέβασμα φωτογραφιών</p>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="btn-outline min-h-10 px-4 text-sm"
        >
          Έξοδος
        </button>
      </header>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
