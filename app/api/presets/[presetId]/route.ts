import getPresetById from "@/repositories/Presets/getPresetById";
import { notFound } from "next/navigation";

export async function GET({ params }: { params: { presetId: string } }) {
  const { presetId } = await params;

  try {
    const id = parseInt(presetId);
    const encounter = await getPresetById(id);
    return await Response.json(encounter);
  } catch {
    return notFound();
  }
}
