import getJobsAsync from "@/repositories/Jobs/getJobsAsync";

// GET /api/encounters/:id
export async function GET() {
  const jobs = await getJobsAsync();
  return await Response.json(jobs);
}
