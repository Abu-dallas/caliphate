import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import AdminRegister from "@/models/AdminRegister";
import { ConnectToDb } from "@/database/connectToDb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials || {};
        try {
          await ConnectToDb();
          const findAdmin = await AdminRegister.findOne({ email });

          if (!findAdmin) {
            return null;
          }
          const checkPassword = await bcrypt.compare(
            password,
            findAdmin.password
          );
          if (!checkPassword) {
            return null;
          }

          return {
            email: findAdmin.email,
            name: findAdmin.name,
          };
        } catch (error) {
          console.log("[CREDENTIAL_PROVIDER_ERROR]", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.email = user.email), (token.name = user.name);
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user.name = token.name), (session.user.email = token.email);
      }
      return session;
    },
  },
});
//const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
