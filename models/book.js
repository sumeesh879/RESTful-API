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
    page: {
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

// Update Book

module.exports.updateBook = (id, book, options, callback) => {
	var query = { _id : id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url
	}
    Book.findOneAndUpdate(query, update, options, callback);
}