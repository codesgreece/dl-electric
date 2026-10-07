"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/settings", label: "Contact Information" },
];

export function AdminShell({
  children,
  userEmail,
}: {
  children: React.ReactNode;
  userEmail?: string | null;
}) {
  const pathname = usePathname();

  return (
    <div className="admin-shell flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-[rgba(70,170,255,0.15)] bg-[rgba(6,19,33,0.65)] p-5 md:flex md:flex-col">
        <Logo href="/" compact />
        <p className="mt-6 mb-3 text-[0.65rem] tracking-[0.2em] text-muted uppercase">Dashboard</p>
        <nav className="flex flex-1 flex-col gap-1">
          {links.map((link) => {
            const active =
              link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm transition",
                  active
                    ? "bg-[rgba(22,155,255,0.15)] text-electric-bright"
                    : "text-muted hover:bg-[rgba(22,155,255,0.08)] hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3 border-t border-[rgba(70,170,255,0.12)] pt-4">
          <p className="truncate text-xs text-muted">{userEmail}</p>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="btn-outline w-full min-h-10 text-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-[rgba(70,170,255,0.12)] px-4 py-4 md:px-8">
          <div className="md:hidden">
            <Logo href="/" compact />
          </div>
          <p className="hidden text-sm text-muted md:block">Admin Panel</p>
          <div className="flex items-center gap-2 overflow-x-auto md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-[rgba(70,170,255,0.2)] px-3 py-1.5 text-xs text-muted"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
