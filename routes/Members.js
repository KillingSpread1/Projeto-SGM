const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Members = mongoose.model('Members');

router.get('/', async function (req, res) {
    try {
        const members = await Members.find({});
        res.render('members', { members });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error ocurred');
    }
});


module.exports = router;