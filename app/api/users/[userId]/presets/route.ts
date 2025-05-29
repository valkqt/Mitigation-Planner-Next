import getPresetsByUser from "@/repositories/Presets/getPresetsByUser";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;
  const presets = await getPresetsByUser(userId);

  return Response.json(presets);
}
