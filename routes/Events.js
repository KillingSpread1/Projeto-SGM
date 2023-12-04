const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Events = mongoose.model('Event');

router.get('/', async function (req, res) {
    const isAuthenticated = !!req.session.userId;

    try {
        const events = await Events.find({}).select('Name Description Type Videos Images');    
        res.render('events', { events, isAuthenticated });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});

module.exports = router;