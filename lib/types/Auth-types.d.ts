import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    last_name: string;
    phone: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      last_name: string;
      phone: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    last_name: string;
    phone: string;
  }
}
