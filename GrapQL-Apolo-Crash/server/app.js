const express = require("express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// Load schema & resolvers
const typeDefs = require("./schema/shema");
const resolvers = require("./resolver/resolver");

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://huynvn:admin123@tutorialgraphql.ebmqwmb.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority', {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    console.log("Mongo Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

connectDB();

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
