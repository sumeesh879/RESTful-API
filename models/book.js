var mongoose = require('mongoose');

// Book Schema

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    img_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema, 'Books');

// Get Books

module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit);
}

// Getting Book by ID

module.exports.getBookById = (bookId, callback) => {
    Book.findById(bookId, callback);
}

// Add Book

module.exports.addBook = (newBook, callback) => {
    Book.create(newBook, callback);
}

// Delete Book

module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}