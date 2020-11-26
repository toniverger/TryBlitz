import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //await prisma.post.create({
  //  data: { title: "My third post title", body: "This is my amazing third post!" },
  //
//});

  const posts = await prisma.post.findMany();

  res.status(200).json(posts);
}
