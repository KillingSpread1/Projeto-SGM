const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const History = mongoose.model('History');

router.get('/', async function (req, res) {
    const isAuthenticated = !!req.session.userId;

    try {
        const histories = await History.find({});
        res.render('history', { histories, isAuthenticated });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});


module.exports = router;