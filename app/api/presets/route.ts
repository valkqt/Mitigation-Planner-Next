import { savePreset } from "@/repositories/Users/savePreset";
import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, filters, nodes, encounterId, userId } = await req.json();

  const flags = filters as Prisma.JsonObject;
  const segments = nodes as Prisma.JsonObject;

  try {
    const preset = await savePreset(name, flags, segments, encounterId, userId);
    console.log(preset);

    return Response.json(preset);
  } catch {
    console.log("brother");
    return Response.json("bro");
  }
}
