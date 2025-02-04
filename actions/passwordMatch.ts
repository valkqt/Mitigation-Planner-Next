"use server";

import { timingSafeEqual } from "node:crypto";

export default async function passwordMatch(hash, password): Promise<boolean> {
  if (!timingSafeEqual(hash, password)) {
    return false;
  }

  return true;
}
