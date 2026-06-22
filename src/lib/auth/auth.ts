import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import connectDB from "@/lib/db";
import dns from "node:dns/promises";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const mongooseInstance = await connectDB();
const client = mongooseInstance.connection.getClient();
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export async function getSession() {
  const result = await auth.api.getSession({
    headers: await headers(),
  });
  return result;
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if (result.success) {
    redirect("/sign-in");
  }
}
