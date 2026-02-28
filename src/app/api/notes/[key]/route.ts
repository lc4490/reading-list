import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

type Params = { params: Promise<{ key: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { key } = await params;

  // Try Vercel Blob first (dynamic import so a failure doesn't break the route)
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: `notes/${key}` });
    const blob = blobs.find((b) => b.pathname === `notes/${key}`);
    if (blob) {
      const res = await fetch(blob.downloadUrl);
      const text = await res.text();
      if (text.trim()) {
        return new Response(text, { headers: { "Content-Type": "text/plain" } });
      }
    }
  } catch {
    // Blob not available or not supported — fall through to static file
  }

  // Fallback: read static file from /public/notes/
  try {
    const filePath = join(process.cwd(), "public", "notes", key);
    const text = await readFile(filePath, "utf-8");
    return new Response(text, { headers: { "Content-Type": "text/plain" } });
  } catch {
    return new Response("", { status: 404 });
  }
}

export async function PUT(req: Request, { params }: Params) {
  const ok = await verifySession();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { key } = await params;
  const body = await req.text();

  const { put } = await import("@vercel/blob");
  await put(`notes/${key}`, body, {
    access: "public",
    contentType: "text/plain",
    allowOverwrite: true,
  });

  return NextResponse.json({ ok: true });
}
