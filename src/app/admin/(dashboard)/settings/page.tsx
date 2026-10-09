"use client";

import { FormEvent, useEffect, useState } from "react";

type Settings = {
  companyName: string;
  founderName: string;
  phone: string;
  email: string;
  experienceYears: number;
  mainDescription: string;
};

const empty: Settings = {
  companyName: "",
  founderName: "",
  phone: "",
  email: "",
  experienceYears: 22,
  mainDescription: "",
};

export default function AdminSettingsPage() {
  const [form, setForm] = useState<Settings>(empty);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setForm({
            companyName: data.companyName,
            founderName: data.founderName,
            phone: data.phone,
            email: data.email,
            experienceYears: data.experienceYears,
            mainDescription: data.mainDescription,
          });
        }
        setLoading(false);
      });
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (res.ok) setSaved(true);
  }

  if (loading) return <p className="text-muted">Φόρτωση...</p>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Contact Information</h1>
        <p className="mt-2 text-muted">Επεξεργασία στοιχείων επικοινωνίας και εταιρείας.</p>
      </div>

      <form onSubmit={onSubmit} className="glass max-w-2xl space-y-4 rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm text-muted">Company name</label>
            <input
              className="input-field"
              value={form.companyName}
              onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-muted">Founder name</label>
            <input
              className="input-field"
              value={form.founderName}
              onChange={(e) => setForm((f) => ({ ...f, founderName: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm text-muted">Phone</label>
            <input
              className="input-field"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-muted">Email</label>
            <input
              className="input-field"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-muted">Experience years</label>
          <input
            className="input-field max-w-[160px]"
            type="number"
            value={form.experienceYears}
            onChange={(e) =>
              setForm((f) => ({ ...f, experienceYears: Number(e.target.value) }))
            }
            required
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-muted">Main description</label>
          <textarea
            className="input-field"
            value={form.mainDescription}
            onChange={(e) => setForm((f) => ({ ...f, mainDescription: e.target.value }))}
            required
          />
        </div>
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Αποθήκευση..." : "Αποθήκευση"}
        </button>
        {saved ? <p className="text-sm text-electric-bright">Αποθηκεύτηκε επιτυχώς.</p> : null}
      </form>
    </div>
  );
}
