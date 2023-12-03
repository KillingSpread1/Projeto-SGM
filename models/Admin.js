var mongoose = require('mongoose');

var Admin = new mongoose.Schema({
    Username: String,
    Password: String
});

module.exports = mongoose.model('Admin', Admin);