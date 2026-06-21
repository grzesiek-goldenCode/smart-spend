import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src";
import * as schema from "../src/db/schema";
{
}
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      veryfication: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },

  // ***************************Sprawdzić jak to działa i dopiero wtedy dodać **************************************
  // socialProviders: {
  //   google: {
  //     clientId:  process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   }
  // }
});

export type Session = typeof auth.$Infer.Session;
