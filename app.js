var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./models/genre');
var Book = require('./models/book');

// Connecting to mongoose

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Please use /api/books or /api/genres');
});

app.post('/', (req, res) => {
    res.send(200);
});

// Get All Genres

app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err) {
            throw err;
        } else {
            res.json(genres);
        }
    });
});

// Post Genre Data

app.post('/api/genres', (req, res) => {
    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err) {
            throw err;
        } else {
            res.json(genre);
        }
    });
});

// Get All Books

app.get('/api/books', (req, res) => {
    Book.getBooks((err, Books) => {
        if(err) {
            throw err;
        } else {
            res.json(Books);
        }
    });
});

// Post Book Data

app.post('/api/books', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if(err) {
            throw err;
        } else {
            res.json(book);
        }
    });
});

// Get particular book

app.get('/api/book/:id', (req, res) => {
    Book.getBookById(req.params.id, (err, selectedBook) => {
        if(err) {
            throw err;
        } else {
            res.json(selectedBook);
        }
    })
});

app.listen(3000);
console.log('Running on port 3000!!!');