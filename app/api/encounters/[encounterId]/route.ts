import getEncounterById from "@/src/services/server/repositories/encounter";
import { notFound } from "next/navigation";

// GET /api/encounters/:id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ encounterId: string }> }
) {
  const { encounterId } = await params;

  if (!encounterId) {
    return notFound();
  }
  try {
    const id = parseInt(encounterId);
    const encounter = await getEncounterById(id);
    return await Response.json(encounter);
  } catch {
    return notFound();
  }
}
