import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function savePreset(
  userId: string,
  name: string,
  encounterId: number,
  filters: Prisma.JsonObject,
  nodes: Prisma.JsonObject
) {
  const preset = await prisma.preset.create({
    data: {
      name: name,
      encounterId: encounterId,
      userId: userId,
      flags: filters,
      segments: nodes,
    },
  });
  return preset;
}
