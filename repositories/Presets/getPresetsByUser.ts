import prisma from "@/lib/prisma";
import { Preset } from "@prisma/client";

export default async function getPresetsByUser(
  userId: string
): Promise<Preset[]> {
  try {
    const presets = await prisma.preset.findMany({
      where: {
        userId: userId,
      },
    });

    return presets;
  } catch {
    return [];
  }
}
