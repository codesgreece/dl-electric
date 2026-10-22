import { PhotoManager } from "@/components/admin/PhotoManager";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPhotosPage() {
  const photos = await prisma.galleryPhoto.findMany({
    select: { id: true, filename: true, mimeType: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <PhotoManager
      initialPhotos={photos.map((photo) => ({
        ...photo,
        createdAt: photo.createdAt.toISOString(),
      }))}
    />
  );
}
