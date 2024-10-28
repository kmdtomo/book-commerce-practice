import { nextAuthOptions } from "@/app/lib/nextAuth/options";
import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
