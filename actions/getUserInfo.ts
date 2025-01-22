"use server";

import { auth } from "@/auth";
import { Session } from "next-auth";

export default async function getUserInfo(): Promise<Session | null> {
  const session: Session | null = await auth();

  return await session;
}
