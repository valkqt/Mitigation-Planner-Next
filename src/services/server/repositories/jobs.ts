import prisma from "@/src/lib/prisma";
import { Job } from "@prisma/client";

export default async function getJobsAsync(): Promise<Job[] | null> {
  const jobs = await prisma.job.findMany({
    include: {
      skills: { include: { ability: true, job: true } },
    },
  });
  return jobs;
}
