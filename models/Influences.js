var mongoose = require('mongoose');

var Influence = new mongoose.Schema({
    Name: String,
    Description: String
});

module.exports = mongoose.model('Influences', Influence);