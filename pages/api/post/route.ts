import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handler(req, res) {
  const { title, content } = req.body;
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session?.user?.email) {
      return;
    }

    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session.user.email } },
      },
    });
    return await res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
