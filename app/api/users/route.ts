import saltAndHashPassword from "@/actions/saltAndHashPassword";
import createUser from "@/repositories/Users/createUser";
import { NextRequest } from "next/server";
import crypto from "node:crypto";

type Credentials = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  const { email, password }: Credentials = await req.json();

  const salt = crypto.randomBytes(16);
  const hashedPassword = saltAndHashPassword(password, salt);

  try {
    await createUser(email, hashedPassword.hash, salt);
  } catch {
    return Response.json("bro");
  }

  return Response.json("pepe");
}
