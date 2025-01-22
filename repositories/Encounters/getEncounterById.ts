import prisma from "@/lib/prisma";
import { Encounter } from "@prisma/client";

export default async function getEncounterById(): Promise<Encounter | null> {
  const encounter = await prisma.encounter.findFirst({
    where: {
      id: 1,
    },
    include: {
      mechanics: { include: { mechanic: true } },
    },
  });

  return encounter;
}
