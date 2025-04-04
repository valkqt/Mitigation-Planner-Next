"use server";

import { signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

export default async function serverSignOut() {
  await signOut({ redirect: false });
}
