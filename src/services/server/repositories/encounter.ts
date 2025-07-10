import prisma from "@/src/lib/prisma";
import { Encounter } from "@prisma/client";

export default async function getEncounterById(
  encounterId: number
): Promise<Encounter | null> {
  const encounter = await prisma.encounter.findFirst({
    where: {
      id: encounterId,
    },
    include: {
      mechanics: { include: { mechanic: true } },
    },
  });

  return encounter;
}
