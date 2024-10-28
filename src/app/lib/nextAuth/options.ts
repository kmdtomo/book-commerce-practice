import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "../prisma";
import GoogleProvider from "next-auth/providers/google";

export const nextAuthOptions: NextAuthOptions = {
  debug: false,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      console.log("Session user:", user);
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id, // user.id をセッションに追加
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // JWTトークンにユーザーIDを追加
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
