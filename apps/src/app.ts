import express, { Express } from "express";
import { createServer } from "@graphql-yoga/node";
import cors from "cors";

const setupCors = (e: Express): Express => {
  return e.use(cors());
};

const setupGqlServer = (e: Express): Express => {
  // create server
  const graphQLServer = createServer();

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
