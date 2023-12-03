const express = require('express');
const mongoose = require('mongoose');
const Suggestion = mongoose.model('Suggestions');
const router = express.Router();

router.get('/', function (req,res){ 
    res.render('suggestions.ejs')
});

router.post('/', async (req, res) => {
    try {
        const newSuggestion = new Suggestion({
            Title: req.body.title,
            Body: req.body.suggestion
        });

        await newSuggestion.save();
        console.log(req.body.suggestion);

        res.redirect('/suggestions');
    } catch (error) {
        res.status(500).send('Erro ao processar a sugestão.');
    }
});


module.exports = router;