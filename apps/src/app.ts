import express, { Express } from "express";
import { createServer } from "@graphql-yoga/node";
import cors from "cors";
import { schema } from "./graphql/schema";
import { PrismaClient } from ".prisma/client";

const setupCors = (e: Express): Express => {
  return e.use(cors());
};

const setupGqlServer = (e: Express): Express => {
  // create server
  const graphQLServer = createServer({
    context: async () => ({
      // add prisma into gql context
      prisma: new PrismaClient(),
    }),
    schema: {
      typeDefs: schema,
      resolvers: {
        Query: {
          artists: (_, _args, context) => {
            return context.prisma.artist.findMany();
          },
        },
      },
    },
  });

  // register middleware
  e.use("/graphql", graphQLServer);

  return e;
};

const app = [setupCors, setupGqlServer].reduce(
  (ex, middleware) => middleware(ex),
  express()
);

export default app;
export { app };
