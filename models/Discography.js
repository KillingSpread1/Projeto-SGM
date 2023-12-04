var mongoose = require('mongoose');

var Discography = new mongoose.Schema({
    Title: String,
    Description: String,
    Image: String
});

module.exports = mongoose.model('Discography', Discography);