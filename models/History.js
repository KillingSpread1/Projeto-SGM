var mongoose = require('mongoose');

var History = new mongoose.Schema({
    Title: String,
    Description: String,
    Image: String
});

module.exports = mongoose.model('History', History);