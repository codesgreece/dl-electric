"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type GalleryPhotoItem = {
  id: string;
};

export function Gallery({ photos }: { photos: GalleryPhotoItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="Φωτογραφίες"
          subtitle="Στιγμές από εγκαταστάσεις και έργα στον χώρο."
        />

        {photos.length === 0 ? (
          <p className="text-muted">Οι φωτογραφίες των έργων θα εμφανίζονται εδώ.</p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <li key={photo.id}>
                <button
                  type="button"
                  className="glass glow-hover group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
                  onClick={() => setActive(photo.id)}
                >
                  <Image
                    src={`/api/photos/${photo.id}`}
                    alt="Φωτογραφία έργου DL Electric"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="img-zoom object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(1,7,15,0.86)] p-4"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full border border-[rgba(70,170,255,0.35)] px-4 py-2 text-sm text-ink"
            onClick={() => setActive(null)}
          >
            Κλείσιμο
          </button>
          <div
            className="relative h-[88vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={`/api/photos/${active}`}
              alt="Φωτογραφία έργου DL Electric"
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
