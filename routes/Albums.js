const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Album = mongoose.model('Album');

router.get('/', async function (req, res) {
    try {
        const albums = await Album.find({}).select('Name Songs Cover Description Year');
        res.render('albums', { albums });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});

module.exports = router;