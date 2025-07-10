import prisma from "@/src/lib/prisma";
import { Preset } from "@prisma/client";

export async function getPresetById(presetId: string): Promise<Preset | null> {
  const preset = await prisma.preset.findFirst({
    where: {
      id: presetId,
    },
  });

  return preset;
}

export async function getPresetsByUser(userId: string): Promise<Preset[]> {
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
