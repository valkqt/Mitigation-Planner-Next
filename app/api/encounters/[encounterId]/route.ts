import prisma from "../../../../lib/prisma";

// GET /api/encounters/:id
export async function GET() {
  // const httpMethod = req.method;

  const encounter = await prisma.encounter.findFirst({
    where: {
      id: 1,
    },
    include: {
      mechanics: { include: { mechanic: true } },
    },
  });
  return await Response.json(encounter);
}
