import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/encounters/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "GET":
      const encounter = await prisma.encounter.findFirst({
        where: {
          id: 1,
        },
        include: {
          mechanics: { include: { mechanic: true } },
        },
      });
      await res.json(encounter);
      break;

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}
