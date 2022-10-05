const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooks(),
    book: async (parent, { id }, { mongoDataMethods }) => await mongoDataMethods.getBookById(id),
    authors: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllAuthor(),
    author: async (parent, { id }, { mongoDataMethods }) => await mongoDataMethods.getAuthorById(id),
  },
  // bất cứ khi nào nhìn thấy type query Book vào trường author ->
  Book : {
    author: async ({ authorId }, args, { mongoDataMethods }) => 
      await mongoDataMethods.getAuthorById(authorId),
  },
  Author : {
    books: async ({ id }, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooks({ authorId: id }),
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>  mongoDataMethods.createAuthor(args),
    createBook: (parent, args, { mongoDataMethods }) => mongoDataMethods.createBook(args)
  }
};

module.exports = resolvers;
