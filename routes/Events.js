const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Events = mongoose.model('Event');

router.get('/', async function (req, res) { 
    try {
        const event = await Events.create({
            Name: 'Live in Birmingham 2017',
            Description: "The last Linkin Park concert with Chester Bennington. After this, the band didn't perform anymore up to this date.",
            Type: 'Popular',
            Videos: [],
            Images: []
        });
        res.render('events.ejs');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating event');
    }
});

module.exports = router;