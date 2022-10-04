const Book = require('../models/Book');
const Author = require('../models/Author');

// Tạo ra file kết nối mongo
const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
  createAuthor: async args => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async args => {
    const newBook = new Book(args);
    return newBook.save();
  },
}

module.exports = mongoDataMethods;
