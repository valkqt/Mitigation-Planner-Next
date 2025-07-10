import { getPresetsByUser } from "@/src/services/server/repositories/preset";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const presets = await getPresetsByUser(userId);

  return Response.json(presets);
}
