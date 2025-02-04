"use server";

import { signIn } from "@/auth";

export async function credentialSignIn(credentials: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }
}
