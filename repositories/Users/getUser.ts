import prisma from "@/lib/prisma";

export default async function findUserAsync(email: string, password: string) {
  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (password != user?.password) {
    return null;
  }

  return user;
}
