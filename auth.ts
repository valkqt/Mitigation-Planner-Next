import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { signInSchema } from "@/lib/zod";
import findUserAsync from "@/repositories/Users/getUser";
import { User } from "@prisma/client";

type UserCredentials = {
  email: string;
  password: string;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials: UserCredentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const user: User | null = await findUserAsync(email, password);

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        const passwordMatch = user.password == password;

        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
});
