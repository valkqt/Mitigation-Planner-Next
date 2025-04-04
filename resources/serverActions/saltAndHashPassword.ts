"use server";

import { scryptSync } from "node:crypto";
export default async function saltAndHashPassword(
  password: string,
  salt: Uint8Array
) {
  return {
    hash: scryptSync(password, salt, 64, {
      N: 16384,
      p: 1,
      r: 8,
      maxmem: 32 * 1024 * 1024,
    }),
    salt,
  };
}
