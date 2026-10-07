"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/layout/Logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Μη έγκυρα στοιχεία σύνδεσης.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="admin-shell flex min-h-screen items-center justify-center px-4">
      <div className="glass glow-border w-full max-w-md rounded-2xl p-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo href="/" />
          <h1 className="mt-6 font-display text-2xl font-semibold text-ink">Admin Login</h1>
          <p className="mt-2 text-sm text-muted">Πρόσβαση μόνο για διαχειριστή</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-email" className="mb-1.5 block text-sm text-muted">
              Email / Username
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="username"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="mb-1.5 block text-sm text-muted">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error ? (
            <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "Σύνδεση..." : "Σύνδεση"}
          </button>
        </form>
      </div>
    </div>
  );
}
