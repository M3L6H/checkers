import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { setupLivereload } from "./middleware";
import { HelloResolver } from "./resolvers";

const main = async () => {
  const app = express();
  const port = process.env.PORT || 8080;

  // Use livereload if in development
  if (process.env.NODE_ENV !== "production") setupLivereload(app);
  
  // Set up apollo server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false
    })
  });

  apolloServer.applyMiddleware({ app });
  
  // Exit when SIGINT is received
  process.on("SIGINT", () => process.exit());
  
  app.listen(port, () => {
    // eslint-disable-next-line
    console.log(`Server started on ${ port }`);
  });
};

main();
