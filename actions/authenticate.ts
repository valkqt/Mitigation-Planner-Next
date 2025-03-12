"use server";

import { signIn } from "@/auth";

export async function authenticate(
  provider: string,
  credentials?: {
    email: string;
    password: string;
  }
) {
  await signIn(
    provider,
    credentials && {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    }
  );
}
