"use server";

import { signOut } from "@/auth";

export default async function serverSignOut() {
  await signOut();
}
