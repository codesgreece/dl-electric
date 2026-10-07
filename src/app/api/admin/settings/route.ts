import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";
import { settingsSchema } from "@/lib/validations";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const settings = await prisma.siteSettings.findUnique({ where: { id: "default" } });
  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const { error } = await requireAdmin();
  if (error) return error;

  const body = await request.json();
  const parsed = settingsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const settings = await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: parsed.data,
    create: { id: "default", ...parsed.data },
  });

  return NextResponse.json(settings);
}
