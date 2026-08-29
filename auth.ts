import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toString() }
        });

        if (!user) {
          return null;
        }
        
        const isValid = await bcrypt.compare(
          credentials.password.toString(),
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
          role: user.role
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.last_name = user.last_name;
        token.phone = user.phone;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.last_name = token.last_name as string;
        session.user.phone = token.phone as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  }
});