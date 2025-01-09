import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return;
  }
  try {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email } },
      },
    });
    res.status(200).json(result);
  } catch {
    throw Error("pepeplofi123");
  }
}
