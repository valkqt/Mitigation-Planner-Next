import getPresetById from "@/repositories/Presets/getPresetById";
import { deletePreset, editPreset } from "@/repositories/Users/savePreset";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { presetId: string } }
) {
  const { presetId } = await params;

  try {
    const encounter = await getPresetById(presetId);
    return await Response.json(encounter);
  } catch {
    return notFound();
  }
}

export async function PUT(req: NextRequest) {
  const { id, name, flags, segments, encounterId, userId } = await req.json();

  const filters = flags as Prisma.JsonObject;
  const nodes = segments as Prisma.JsonObject;

  const preset = await editPreset(
    id,
    name,
    filters,
    nodes,
    encounterId,
    userId
  );

  return Response.json(preset);
}

export async function DELETE(
  request: Request,
  { params }: { params: { presetId: string } }
) {
  await deletePreset(params.presetId);
  return Response.json({ status: 204, message: "" });
}
