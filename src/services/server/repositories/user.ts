import prisma from "@/src/lib/prisma";
import { Preset, Prisma } from "@prisma/client";

export default async function createUser(
  email: string,
  password: Buffer,
  salt: Buffer
) {
  await prisma.user.create({
    data: {
      email,
      password,
      salt,
    },
  });
}

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

export async function editPreset(
  id: string,
  name: string,
  filters: Prisma.JsonObject,
  nodes: Prisma.JsonObject,
  encounterId: number,
  userId: string
): Promise<Preset> {
  const preset = await prisma.preset.update({
    where: { id: id },
    data: {
      name,
      flags: filters,
      segments: nodes,
      encounterId: encounterId,
      userId,
    },
  });

  return preset;
}

export async function deletePreset(presetId: string): Promise<void> {
  await prisma.preset.delete({ where: { id: presetId } });
}
