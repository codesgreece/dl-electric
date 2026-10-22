"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = {
  id: string;
  filename: string;
  mimeType: string;
  createdAt: string;
};

const MAX_BYTES = 4 * 1024 * 1024;

async function prepareImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") {
    if (file.size > MAX_BYTES) {
      throw new Error("Η φωτογραφία είναι μεγαλύτερη από 4MB.");
    }
    return file;
  }

  const bitmap = await createImageBitmap(file);
  const maxEdge = 2000;
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    return file;
  }
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/jpeg", 0.82);
  });
  if (!blob) throw new Error("Αποτυχία επεξεργασίας φωτογραφίας.");
  if (blob.size > MAX_BYTES) throw new Error("Η φωτογραφία είναι μεγαλύτερη από 4MB.");

  const name = file.name.replace(/\.[^.]+$/, "") || "photo";
  return new File([blob], `${name}.jpg`, { type: "image/jpeg" });
}

export function PhotoManager({ initialPhotos }: { initialPhotos: Photo[] }) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [pending, setPending] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [dragging, setDragging] = useState(false);

  function addFiles(list: FileList | File[]) {
    const next = Array.from(list).filter((file) => file.type.startsWith("image/"));
    if (next.length === 0) {
      setError("Επίλεξε αρχεία εικόνας.");
      return;
    }
    setError("");
    setNotice("");
    setPending((current) => [...current, ...next].slice(0, 20));
  }

  async function upload() {
    if (pending.length === 0) return;
    setUploading(true);
    setError("");
    setNotice("");

    const uploaded: Photo[] = [];
    const failures: string[] = [];

    for (const file of pending) {
      try {
        const prepared = await prepareImage(file);
        const body = new FormData();
        body.append("file", prepared);
        const response = await fetch("/api/admin/photos", { method: "POST", body });
        const data = await response.json();
        if (!response.ok) {
          failures.push(data.error || file.name);
          continue;
        }
        uploaded.push(data);
      } catch (err) {
        failures.push(err instanceof Error ? err.message : file.name);
      }
    }

    setPhotos((current) => [...uploaded.reverse(), ...current]);
    setPending([]);
    setUploading(false);

    if (uploaded.length > 0) {
      setNotice(
        uploaded.length === 1
          ? "Η φωτογραφία ανέβηκε και φαίνεται στην αρχική."
          : `Ανέβηκαν ${uploaded.length} φωτογραφίες.`,
      );
    }
    if (failures.length > 0) {
      setError(failures[0]);
    }
  }

  async function remove(id: string) {
    if (!confirm("Διαγραφή αυτής της φωτογραφίας;")) return;
    const response = await fetch(`/api/admin/photos?id=${id}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Αποτυχία διαγραφής.");
      return;
    }
    setPhotos((current) => current.filter((photo) => photo.id !== id));
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Φωτογραφίες</h1>
        <p className="mt-2 text-muted">
          Ανέβασε φωτογραφίες έργων. Εμφανίζονται στην ενότητα Φωτογραφίες της αρχικής σελίδας.
        </p>
      </div>

      <div className="glass rounded-2xl p-6">
        <label
          htmlFor="photo-input"
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            addFiles(event.dataTransfer.files);
          }}
          className={
            dragging
              ? "flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border border-electric bg-[rgba(22,155,255,0.12)] px-6 py-8 text-center"
              : "flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[rgba(70,170,255,0.35)] px-6 py-8 text-center transition hover:border-electric hover:bg-[rgba(22,155,255,0.06)]"
          }
        >
          <p className="text-ink">Σύρε φωτογραφίες εδώ ή επίλεξε αρχεία</p>
          <p className="mt-2 text-sm text-muted">JPG, PNG, WEBP ή GIF. Οι μεγάλες φωτογραφίες μικραίνουν αυτόματα.</p>
          <input
            id="photo-input"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="sr-only"
            onChange={(event) => {
              if (event.target.files) addFiles(event.target.files);
              event.target.value = "";
            }}
          />
        </label>

        {pending.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {pending.map((file, index) => (
              <li
                key={`${file.name}-${file.lastModified}-${index}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-[rgba(70,170,255,0.12)] px-4 py-2"
              >
                <span className="truncate text-sm text-ink">{file.name}</span>
                <button
                  type="button"
                  className="text-sm text-muted hover:text-ink"
                  onClick={() => setPending((current) => current.filter((_, item) => item !== index))}
                >
                  Αφαίρεση
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
        {notice ? <p className="mt-4 text-sm text-electric-bright">{notice}</p> : null}

        <button
          type="button"
          className="btn-primary mt-5 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={uploading || pending.length === 0}
          onClick={() => void upload()}
        >
          {uploading ? "Ανέβασμα..." : "Ανέβασμα"}
        </button>
      </div>

      <div>
        <h2 className="font-display text-xl text-ink">Ανεβασμένες φωτογραφίες</h2>
        {photos.length === 0 ? (
          <p className="mt-4 text-muted">Δεν υπάρχουν φωτογραφίες ακόμα.</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <li key={photo.id} className="glass overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/api/photos/${photo.id}`}
                    alt={photo.filename}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-3">
                  <p className="truncate text-xs text-muted">{photo.filename}</p>
                  <button
                    type="button"
                    className="shrink-0 text-sm text-red-300"
                    onClick={() => void remove(photo.id)}
                  >
                    Διαγραφή
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
