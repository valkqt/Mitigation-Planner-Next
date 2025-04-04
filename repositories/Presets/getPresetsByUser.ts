import prisma from "@/lib/prisma";
import { Preset } from "@prisma/client";

export default async function getPresetsByUser(
  userId: string
): Promise<Preset[]> {
  const preset = await prisma.preset.findMany({
    where: {
      userId: userId,
    },
  });

  return preset;
}
