"use server";

import { signIn } from "@/auth";

export const authenticate = async () => {
  const res = await signIn("google");
  console.log(res);

  return {
    success: true,
    message: "Sign in successfully",
  };
};
