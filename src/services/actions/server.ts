"use server";
import { cookies } from "next/headers";

export async function setServerCookie(token: string) {
  const cookieStore = cookies();
  (await cookieStore).set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 дней
  });
}