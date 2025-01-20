import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

const authHandler = (req, res) => NextAuth(req, res, authOptions);
export default authHandler;
