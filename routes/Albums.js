const express = require('express');
const router = express.Router();

router.get('/', function (req,res){ 
    res.render('albums.ejs')
});

module.exports = router;