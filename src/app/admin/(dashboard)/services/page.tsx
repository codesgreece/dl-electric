"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Service } from "@prisma/client";

const empty = {
  title: "",
  description: "",
  imageUrl: "",
  icon: "voltage",
  sortOrder: 0,
};

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/services");
    setServices(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function onUpload(file: File) {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.url) setForm((f) => ({ ...f, imageUrl: data.url }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/services", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...form } : form),
    });
    setSaving(false);
    setForm(empty);
    setEditingId(null);
    await load();
  }

  async function onDelete(id: string) {
    if (!confirm("Διαγραφή υπηρεσίας;")) return;
    await fetch(`/api/admin/services?id=${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Services</h1>
        <p className="mt-2 text-muted">Διαχείριση υπηρεσιών και σειράς εμφάνισης.</p>
      </div>

      <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
        <h2 className="font-display text-xl text-ink">
          {editingId ? "Επεξεργασία υπηρεσίας" : "Νέα υπηρεσία"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="input-field"
            placeholder="Τίτλος"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <select
            className="input-field"
            value={form.icon}
            onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))}
          >
            <option value="voltage">Lightning</option>
            <option value="smarthome">Smart Home</option>
            <option value="cctv">CCTV</option>
            <option value="blueprint">Blueprint</option>
          </select>
        </div>
        <textarea
          className="input-field"
          placeholder="Περιγραφή"
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          required
        />
        <div className="grid gap-4 md:grid-cols-[1fr_auto_120px]">
          <input
            className="input-field"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
            required
          />
          <label className="btn-outline cursor-pointer">
            Upload
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
            />
          </label>
          <input
            type="number"
            className="input-field"
            value={form.sortOrder}
            onChange={(e) => setForm((f) => ({ ...f, sortOrder: Number(e.target.value) }))}
          />
        </div>
        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Αποθήκευση..." : editingId ? "Ενημέρωση" : "Προσθήκη"}
        </button>
      </form>

      <div className="space-y-3">
        {loading ? (
          <p className="text-muted">Φόρτωση...</p>
        ) : (
          services.map((service) => (
            <div
              key={service.id}
              className="glass flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-ink">{service.title}</p>
                <p className="text-xs text-muted">
                  Icon: {service.icon} · Order: {service.sortOrder}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn-outline min-h-10 px-4 text-sm"
                  onClick={() => {
                    setEditingId(service.id);
                    setForm({
                      title: service.title,
                      description: service.description,
                      imageUrl: service.imageUrl,
                      icon: service.icon,
                      sortOrder: service.sortOrder,
                    });
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn-outline min-h-10 px-4 text-sm text-red-300"
                  onClick={() => onDelete(service.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
