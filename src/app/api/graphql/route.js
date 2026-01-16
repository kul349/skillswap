export const runtime = "nodejs"; 

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "@/graphql/typeDefs";
import resolvers from "@/graphql/resolvers";
import dbConnect from "@/lib/db";

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    await dbConnect();
    return {};
  },
});

export const GET = handler;
export const POST = handler;
