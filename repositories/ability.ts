import prisma from "@/lib/prisma";
import { Ability } from "@prisma/client";

export default async function getAbilities(): Promise<Ability[] | null> {
  const abilities = await prisma.ability.findMany();
  return abilities;
}
