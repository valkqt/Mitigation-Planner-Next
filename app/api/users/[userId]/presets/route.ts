import getPresetsByUser from "@/repositories/Presets/getPresetsByUser";
import { savePreset } from "@/repositories/Users/savePreset";
import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;
  const presets = await getPresetsByUser(userId);

  return Response.json(presets);
}

