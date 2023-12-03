var mongoose = require('mongoose');

var Event = new mongoose.Schema({
    Name: String,
    Description: String,
    Type: String,
    Videos: [String],
    Images: [String]
});

module.exports = mongoose.model('Event', Event);