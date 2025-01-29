import prisma from "@/lib/prisma";

export default async function createUser(
  email: string,
  password: Buffer,
  salt: Buffer
) {
  await prisma.user.create({
    data: {
      email,
      password,
      salt,
    },
  });
}
