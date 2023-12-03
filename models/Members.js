var mongoose = require('mongoose');

var Member = new mongoose.Schema({
    Name: String,
    Description: String
});

module.exports = mongoose.model('Members', Member);