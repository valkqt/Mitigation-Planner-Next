import prisma from "@/lib/prisma";

export async function POST() {
  try {
    await prisma.$executeRaw`INSERT INTO "Ability" (name, duration, cooldown, level, target, type, "jobId") VALUES ('Kerachole', 15, 30, 50, 'RAID', 'MITIGATION', 1), ('Holos', 20, 120, 76, 'RAID', 'MITIGATION', 1)`;
  } catch (e) {
    console.log(e);
  }
  return await Response.json("mrow");
}
