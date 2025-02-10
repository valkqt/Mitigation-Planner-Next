"use server";

import { signIn } from "@/auth";

export async function credentialSignIn(credentials: {
  email: string;
  password: string;
}) {
  await signIn("credentials", {
    email: credentials.email,
    password: credentials.password,
    redirect: false,
  });
}
