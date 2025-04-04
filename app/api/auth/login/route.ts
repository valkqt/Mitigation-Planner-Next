import saltAndHashPassword from "@/resources/serverActions/saltAndHashPassword";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type SecureAccount = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  createdAt: Date;
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    return NextResponse.json({
      status: 404,
      message: "User does not exist",
    });
  }

  if (!user.password || !user.salt) {
    return NextResponse.json({
      status: 403,
      message: "Invalid email or password",
    });
  }

  const hashedPassword = await saltAndHashPassword(password, user.salt);

  if (!crypto.timingSafeEqual(hashedPassword.hash, user.password)) {
    return NextResponse.json({
      status: 403,
      message: "Invalid email or password",
    });
  }

  const secureAccount: SecureAccount = {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    createdAt: user.createdAt,
  };

  return Response.json(user);
}
