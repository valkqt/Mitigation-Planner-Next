import { NextApiRequest, NextApiResponse } from "next";
import { handlePut, handleDelete } from "../../../api/postsHelper";

// DELETE /api/post/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "DELETE":
      await handleDelete(req, res);
      break;
    case "PUT":
      await handlePut(req, res);
      break;
    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}
