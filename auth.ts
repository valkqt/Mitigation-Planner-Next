import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { signInSchema } from "@/lib/zod";
import { randomBytes, randomUUID } from "crypto";

type SecureAccount = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  createdAt: Date;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user, token }) {
      session.userId = token.sub || "";

      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const res = await fetch(process.env.AUTH_URL + "/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        return await user;
      },
    }),
  ],
});
