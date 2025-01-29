import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function savePreset(
  userId: string,
  filters: Prisma.JsonObject,
  nodes: Prisma.JsonObject
) {
  const preset = prisma.preset.create({
    data: { userId: userId, segments: nodes, flags: filters },
  });
  return preset;
}
