import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { detectImageMime, safeImageName } from "@/lib/images";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const photoSelect = {
  id: true,
  filename: true,
  mimeType: true,
  createdAt: true,
} as const;

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const photos = await prisma.galleryPhoto.findMany({
    select: photoSelect,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(photos);
}

export async function POST(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Δεν επιλέχθηκε φωτογραφία." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const mimeType = detectImageMime(buffer);
  if (!mimeType) {
    return NextResponse.json(
      { error: "Μόνο JPG, PNG, WEBP ή GIF έως 4MB." },
      { status: 400 },
    );
  }

  const photo = await prisma.galleryPhoto.create({
    data: {
      data: buffer,
      mimeType,
      filename: safeImageName(file.name),
    },
    select: photoSelect,
  });

  return NextResponse.json(photo);
}

export async function DELETE(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const id = new URL(request.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Λείπει η φωτογραφία." }, { status: 400 });
  }

  try {
    await prisma.galleryPhoto.delete({ where: { id } });
  } catch {
    return NextResponse.json({ error: "Η φωτογραφία δεν βρέθηκε." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
