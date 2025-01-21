import prisma from "../../../lib/prisma";

// GET /api/encounters/:id
export async function GET() {
  // const httpMethod = req.method;

  const jobs = await prisma.job.findMany({
    include: {
      skills: true,
    },
  });
  return await Response.json(jobs);
}
