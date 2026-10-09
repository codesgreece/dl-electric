import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Μη έγκυρα δεδομένα" },
        { status: 400 },
      );
    }

    const message = await prisma.message.create({
      data: {
        name: parsed.data.name.trim(),
        email: parsed.data.email.trim().toLowerCase(),
        phone: parsed.data.phone.trim(),
        message: parsed.data.message.trim(),
      },
    });

    return NextResponse.json({ ok: true, id: message.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Αδυναμία αποστολής. Δοκιμάστε ξανά αργότερα." },
      { status: 500 },
    );
  }
}
