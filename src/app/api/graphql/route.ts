import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export { handleRequest as GET, handleRequest as POST };
