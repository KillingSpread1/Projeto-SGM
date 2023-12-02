const express = require('express');
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const router = express.Router();

router.get('/', function (req,res){ 
    res.render('login.ejs')
});

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    try {
      const admin = await Admin.findOne({ Username: username });
  
      if (admin && bcryptjs.compareSync(password, admin.Password)) {
        res.redirect('/suggestions');
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;