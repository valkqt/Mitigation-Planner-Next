import getPresetById from "@/repositories/Presets/getPresetById";
import { notFound } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { presetId: string } }
) {
  const { presetId } = await params;

  try {
    console.log(presetId, "mrow");
    const encounter = await getPresetById(presetId);
    return await Response.json(encounter);
  } catch {
    return notFound();
  }
}
