import { getSession } from "next-auth/react";

export async function requestHasUser(req) {
  const session = await getSession(req);
  if (!session?.user) {
    return
  }


}
