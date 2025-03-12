import prisma from "@/lib/prisma";
import { Preset } from "@prisma/client";

export default async function getPresetById(
  presetId: number
): Promise<Preset | null> {
  const preset = await prisma.preset.findFirst({
    where: {
      id: presetId,
    },
  });

  return preset;
}
