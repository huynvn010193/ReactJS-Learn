const { books, authors } = require('../data/static');
const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  // QUERY
  Query: {
    books: () => books,
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
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      return newAuthor.save();
    },
    createBook: (parent, args) => {
      const newBook = new Book(args);
      return newBook.save();
    },
  }
};

module.exports = resolvers;
