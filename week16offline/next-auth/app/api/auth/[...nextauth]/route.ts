import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
        otp: { label: "otp", type: "otp", placeholder: "enter you otn" },
      },
      async authorize(credentials: any) {
        //you will get data from db
        console.log(credentials);
        //you shoudl validation
        //you should return valid format

        return {
          id: "user1",
          username: "praivn38",
          password: "pravis",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
