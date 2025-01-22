import getEncounterById from "@/repositories/Encounters/getEncounterById";

// GET /api/encounters/:id
export async function GET() {
  const encounter = await getEncounterById();
  return await Response.json(encounter);
}
