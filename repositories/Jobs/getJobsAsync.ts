import prisma from "@/lib/prisma";
import { Job } from "@prisma/client";

export default async function getJobsAsync(): Promise<Job[] | null> {
  const jobs = await prisma.job.findMany({
    include: {
      skills: true,
    },
  });
  return jobs;
}
