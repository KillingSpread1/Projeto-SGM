const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Album = mongoose.model('Album');

router.get('/', async function (req, res) {
    const isAuthenticated = !!req.session.userId;

    try {
        const albums = await Album.find({}).select('Name Album Cover Description Year');    
        res.render('albums', { albums, isAuthenticated });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});

module.exports = router;