import prisma from "@/lib/prisma";
import { Preset, Prisma } from "@prisma/client";

export async function savePreset(
  name: string,
  filters: Prisma.JsonObject,
  nodes: Prisma.JsonObject,
  encounterId: number,
  userId: string
): Promise<Preset> {
  const preset = await prisma.preset.create({
    data: {
      name: name,
      flags: filters,
      segments: nodes,
      encounterId: encounterId,
      userId: userId,
    },
  });
  return preset;
}
