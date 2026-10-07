import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";
import { serviceSchema } from "@/lib/validations";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const services = await prisma.service.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const service = await prisma.service.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      imageUrl: parsed.data.imageUrl,
      icon: parsed.data.icon,
      sortOrder: parsed.data.sortOrder ?? 0,
    },
  });

  return NextResponse.json(service, { status: 201 });
}

export async function PUT(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const { id, ...rest } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = serviceSchema.safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const service = await prisma.service.update({
    where: { id },
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      imageUrl: parsed.data.imageUrl,
      icon: parsed.data.icon,
      sortOrder: parsed.data.sortOrder ?? 0,
    },
  });

  return NextResponse.json(service);
}

export async function DELETE(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
