const express = require("express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");

// Load schema & resolvers
const typeDefs = require("./schema/shema");
const resolvers = require("./resolver/resolver");

let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app });
}

const app = express();

startServer();

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
