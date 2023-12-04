const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Express instance
const app = express();

var album = require ('./models/Album');
var history = require ('./models/History');
var member = require ('./models/Members');
var event = require ('./models/Event');
var influence = require ('./models/Influences');
var disco = require ('./models/Discography');
var admin = require ('./models/Admin');
var suggestion = require ('./models/Suggestions');

async function createDefaultAdmin() {
  try {
    const adminCount = await admin.countDocuments();

    if (adminCount === 0) {
      const defaultAdmin = new admin({
        Username: 'admin',
        Password: bcryptjs.hashSync('123456', 10),
      });

      await defaultAdmin.save();
      console.log('Admin padrão criado com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao criar o admin padrão:', error);
  }
}

// Configurar express-session
app.use(session({
  secret: 'qwertyuiopasdfghjklçzxcvbnm',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://diogo02gouveia:kMUd8BVOzpduYQQl@cluster0.dgkpjo4.mongodb.net/',
  }),
}));

const home = require ('./routes/Home');
const about = require ('./routes/About');
const albums = require ('./routes/Albums');
const events = require ('./routes/Events');
const gallery = require ('./routes/Gallery');
const suggestions = require ('./routes/Suggestions');
const login = require ('./routes/Login');
const histories = require ('./routes/History');
const members = require ('./routes/Members');
const influences = require ('./routes/Influences');
const discography = require ('./routes/Discography');
const logout = require ('./routes/Logout');

// Connect to db
mongoose.connect('mongodb+srv://diogo02gouveia:kMUd8BVOzpduYQQl@cluster0.dgkpjo4.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar à base de dados'));
db.once('open', function() {
  console.log('Conectou-se à base de dados com sucesso!');
  createDefaultAdmin();
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
app.use ('/about/history', histories);
app.use ('/about/members', members);
app.use ('/about/influences', influences);
app.use ('/about/discography', discography);
app.use ('/logout', logout);

app.get("/", async (req, res) => {
    res.render('index') ;
});

// Listening on port 3000
var serverListenCallback = function () {
  console.log('Listening on port 3000');
}

app.listen(3000, serverListenCallback);
