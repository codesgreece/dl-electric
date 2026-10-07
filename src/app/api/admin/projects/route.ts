import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";
import { projectSchema } from "@/lib/validations";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const projects = await prisma.project.findMany({ orderBy: { sortOrder: "asc" } });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const parsed = projectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const project = await prisma.project.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      category: parsed.data.category,
      imageUrl: parsed.data.imageUrl,
      featured: parsed.data.featured ?? false,
      sortOrder: parsed.data.sortOrder ?? 0,
    },
  });

  return NextResponse.json(project, { status: 201 });
}

export async function PUT(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const { id, ...rest } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = projectSchema.safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const project = await prisma.project.update({
    where: { id },
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      category: parsed.data.category,
      imageUrl: parsed.data.imageUrl,
      featured: parsed.data.featured ?? false,
      sortOrder: parsed.data.sortOrder ?? 0,
    },
  });

  return NextResponse.json(project);
}

export async function DELETE(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
