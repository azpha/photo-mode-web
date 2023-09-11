import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';

export default NextAuth({
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({token, account}) {
        if (token.sub !== "288101780074528768") throw new Error("User not whitelisted")
        else return token
    },
    async session({session, token}) {
      session.user!.email = token.sub
      return session
    }
  }
});
