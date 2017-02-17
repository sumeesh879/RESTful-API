var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema, 'Genres');

// Get Genres

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
}

// Add Genre

module.exports.addGenre = (newGenre, callback) => {
    Genre.create(newGenre, callback);
}

// Update Genre

module.exports.updateGenre = (id, newGenre, options, callback) => {
    var query = { _id : id };
    var update = {
        name : newGenre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre

module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}