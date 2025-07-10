import getJobsAsync from "@/src/services/server/repositories/jobs";

// GET /api/encounters/:id
export async function GET() {
  const jobs = await getJobsAsync();
  return await Response.json(jobs);
}
