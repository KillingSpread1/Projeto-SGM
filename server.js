const express = require('express');
const mongoose = require('mongoose')

// Express instance
const app = express();

const home = require ('./routes/Home');
const about = require ('./routes/About');
const albums = require ('./routes/Albums');
const events = require ('./routes/Events');
const gallery = require ('./routes/Gallery');
const suggestions = require ('./routes/Suggestions');
const login = require ('./routes/Login');


// Connect to db
mongoose.connect('mongodb+srv://diogo02gouveia:kMUd8BVOzpduYQQl@cluster0.dgkpjo4.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar à base de dados'));
db.once('open', function() {
  console.log('Conectou-se à base de dados com sucesso!');
});


// Set up view engine
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use ('/', home);
app.use ('/about', about);
app.use ('/albums', albums);
app.use ('/events', events);
app.use ('/gallery', gallery);
app.use ('/suggestions', suggestions);
app.use ('/login', login);

app.get("/", async (req, res) => {
    res.render('index') ;
});


// Listening on port 3000
var serverListenCallback = function () {
  console.log('Listening on port 3000');
}

app.listen(3000, serverListenCallback);