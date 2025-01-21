// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../lib/prisma";

// export async function handleDelete(req, res) {
//   const postId = req.query.id;
//   await prisma.post.delete({
//     where: { id: postId },
//   });
//   res.json(res.status);
// }

// export async function handlePut(req, res) {
//   const postId = req.query.id;
//   const post = await prisma.post.update({
//     where: { id: postId },
//     data: { published: true },
//   });
//   res.json(res.status);
// }
