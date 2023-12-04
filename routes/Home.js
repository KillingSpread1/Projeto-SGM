const express = require('express');
const router = express.Router();

router.get('/', function (req,res){
    const isAuthenticated = !!req.session.userId;
    res.render('index.ejs', {isAuthenticated})
});

module.exports = router;