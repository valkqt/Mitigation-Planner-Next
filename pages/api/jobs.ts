import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/encounters/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "GET":
      const jobs = await prisma.job.findMany({
        include: {
          skills: true,
        },
      });
      await res.json(jobs);
      break;

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}
