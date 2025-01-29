import crypto from "node:crypto";

export default function saltAndHashPassword(
  password: string,
  salt: Uint8Array
) {
  return {
    hash: crypto.scryptSync(password, salt, 64, {
      N: 16384,
      p: 1,
      r: 8,
      maxmem: 32 * 1024 * 1024,
    }),
    salt,
  };
}
