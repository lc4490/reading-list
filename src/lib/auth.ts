import { createHash } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

export function hashToken(password: string, secret: string): string {
  return createHash("sha256").update(password + secret).digest("hex");
}

export async function verifySession(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.COOKIE_SECRET;
  if (!password || !secret) return false;

  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;

  return token === hashToken(password, secret);
}

export { COOKIE_NAME };
