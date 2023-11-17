var mongoose = require('mongoose');

var Album = new mongoose.Schema({
    Name: String,
    Songs: [String],
    Cover: String,
    Description: String,
    Year: Number
});

module.exports = mongoose.model('Album', Album);