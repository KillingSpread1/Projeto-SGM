var mongoose = require('mongoose');

var Suggestions = new mongoose.Schema({
    Title: String,
    Body: String
});

module.exports = mongoose.model('Suggestions', Suggestions);