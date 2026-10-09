"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Project, ProjectCategory } from "@prisma/client";
import { PROJECT_CATEGORY_LABELS } from "@/types";

const empty = {
  title: "",
  description: "",
  category: "HIGH_VOLTAGE" as ProjectCategory,
  imageUrl: "",
  featured: false,
  sortOrder: 0,
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/projects");
    const data = await res.json();
    setProjects(data);
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
    setError("");
    const res = await fetch("/api/admin/projects", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingId ? { id: editingId, ...form } : form),
    });
    setSaving(false);
    if (!res.ok) {
      setError("Αποτυχία αποθήκευσης");
      return;
    }
    setForm(empty);
    setEditingId(null);
    await load();
  }

  async function onDelete(id: string) {
    if (!confirm("Διαγραφή έργου;")) return;
    await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
    await load();
  }

  function startEdit(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      category: project.category,
      imageUrl: project.imageUrl,
      featured: project.featured,
      sortOrder: project.sortOrder,
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Projects</h1>
        <p className="mt-2 text-muted">Δημιουργία, επεξεργασία και διαγραφή έργων.</p>
      </div>

      <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
        <h2 className="font-display text-xl text-ink">
          {editingId ? "Επεξεργασία έργου" : "Νέο έργο"}
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
            value={form.category}
            onChange={(e) =>
              setForm((f) => ({ ...f, category: e.target.value as ProjectCategory }))
            }
          >
            {Object.entries(PROJECT_CATEGORY_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="input-field"
          placeholder="Περιγραφή"
          value={form.description}
          onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
          required
        />
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
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
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
            />
            Featured
          </label>
          <input
            type="number"
            className="input-field max-w-[120px]"
            value={form.sortOrder}
            onChange={(e) => setForm((f) => ({ ...f, sortOrder: Number(e.target.value) }))}
          />
        </div>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? "Αποθήκευση..." : editingId ? "Ενημέρωση" : "Δημιουργία"}
          </button>
          {editingId ? (
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setEditingId(null);
                setForm(empty);
              }}
            >
              Ακύρωση
            </button>
          ) : null}
        </div>
      </form>

      <div className="space-y-3">
        {loading ? (
          <p className="text-muted">Φόρτωση...</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="glass flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-ink">{project.title}</p>
                <p className="text-xs text-muted">
                  {PROJECT_CATEGORY_LABELS[project.category]}
                  {project.featured ? " · Featured" : ""}
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" className="btn-outline min-h-10 px-4 text-sm" onClick={() => startEdit(project)}>
                  Edit
                </button>
                <button
                  type="button"
                  className="btn-outline min-h-10 px-4 text-sm text-red-300"
                  onClick={() => onDelete(project.id)}
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
