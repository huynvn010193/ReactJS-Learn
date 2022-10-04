const { books, authors } = require('../data/static');
const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooks(),
    book: (parent, args) => books.find(book => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find(author => author.id == args.id),
  },
  // bất cứ khi nào nhìn thấy type query Book vào trường author ->
  Book : {
    author: (parent, args) => authors.find(author => author.id == parent.authorId)
  },
  Author : {
    books: (parent, args) => books.filter(book => book.authorId == parent.id)
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>  mongoDataMethods.createAuthor(args),
    createBook: (parent, args, { mongoDataMethods }) => mongoDataMethods.createBook(args)
  }
};

module.exports = resolvers;
