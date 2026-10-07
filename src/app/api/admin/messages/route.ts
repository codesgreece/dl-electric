import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(messages);
}

export async function PATCH(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const { id, status } = body;
  if (!id || !["NEW", "READ"].includes(status)) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const message = await prisma.message.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await prisma.message.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
