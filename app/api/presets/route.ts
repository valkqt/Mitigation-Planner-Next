import { savePreset } from "@/repositories/Users/savePreset";
import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, flags, segments, encounterId, userId } = await req.json();

  const filters = flags as Prisma.JsonObject;
  const nodes = segments as Prisma.JsonObject;

  const preset = await savePreset(name, filters, nodes, encounterId, userId);

  return Response.json(preset);
}
