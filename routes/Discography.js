const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Discography = mongoose.model('Discography');

router.get('/', async function (req, res) {
    try {
        const albums = await Discography.find({});
        res.render('discography', { albums });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});


module.exports = router;