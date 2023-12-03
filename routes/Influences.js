const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Influences = mongoose.model('Influences');

router.get('/', async function (req, res) {
    try {
        const influences = await Influences.find({});
        res.render('influences', { influences });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});


module.exports = router;