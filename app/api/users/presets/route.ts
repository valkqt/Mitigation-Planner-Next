import { savePreset } from "@/repositories/Users/savePreset";
import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, name, encounter, filters, nodes } = await req.json();

  const pepe = filters as Prisma.JsonObject;
  const plofi = nodes as Prisma.JsonObject;

  try {
    const preset = await savePreset(name, encounter, userId, pepe, plofi);
    return Response.json(preset);
  } catch {
    return Response.json("bro");
  }
}
