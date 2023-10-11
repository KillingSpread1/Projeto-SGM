const express = require('express');
const mongoose = require('mongoose')

/*
const User = require('./models/user');
const TeamMember = require('./models/teamMember');
const { PublicationCategory, Publication } = require('./models/publications');
const Contact = require('./models/contacts');
const Game = require('./models/games');
const Project = require('./models/projects');*/

// Express instance
const app = express();

// Connect to db
/*
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))*/

// Set up view engine
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get("/", async (req, res) => {
    res.render('index') ;
});


// Listening on port 3000
var serverListenCallback = function () {
  console.log('Listening on port 3000');
}

app.listen(3000, serverListenCallback);