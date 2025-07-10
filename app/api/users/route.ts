import saltAndHashPassword from "@/src/services/server/auth/saltAndHashPassword";
import createUser from "@/src/services/server/repositories/user";
import { NextRequest } from "next/server";
import crypto from "node:crypto";

type Credentials = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const { email, password }: Credentials = await req.json();

  const salt = crypto.randomBytes(16);
  const hashedPassword = await saltAndHashPassword(password, salt);

  try {
    await createUser(email, hashedPassword.hash, salt);
  } catch {
    return Response.json("bro");
  }

  return Response.json("pepe");
}
