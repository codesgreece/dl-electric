import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyAdminCode } from "@/lib/admin-code";
import { loginSchema } from "@/lib/validations";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Admin code",
      credentials: {
        code: { label: "Code", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;
        if (!verifyAdminCode(parsed.data.code)) return null;

        return {
          id: "admin",
          name: "Admin",
          email: "admin@dlelectric.gr",
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  trustHost: true,
});
