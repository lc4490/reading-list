import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { hashToken, verifySession, COOKIE_NAME } from "@/lib/auth";

export async function GET() {
  const ok = await verifySession();
  return NextResponse.json({ ok });
}

export async function POST(req: Request) {
  const { password } = await req.json();

  const adminPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.COOKIE_SECRET;

  if (!adminPassword || !secret || password !== adminPassword) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = hashToken(password, secret);
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
  return NextResponse.json({ ok: true });
}
