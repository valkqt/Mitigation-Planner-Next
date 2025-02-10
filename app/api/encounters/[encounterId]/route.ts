import getEncounterById from "@/repositories/Encounters/getEncounterById";
import { enc } from "crypto-js";
import { NextApiRequest } from "next";
import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

// GET /api/encounters/:id
export async function GET(
  request: Request,
  { params }: { params: { encounterId: string } }
) {
  const { encounterId } = await params;
  try {
    const id = parseInt(encounterId);
    const encounter = await getEncounterById(id);
    return await Response.json(encounter);
  } catch {
    return notFound();
  }
}
