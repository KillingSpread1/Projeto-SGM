const express = require('express');
const mongoose = require('mongoose');
const Suggestion = mongoose.model('Suggestions');
const router = express.Router();

router.get('/', async function (req,res){
    const isAuthenticated = !!req.session.userId;
    const suggestions = await Suggestion.find({});
    res.render('suggestions.ejs', { isAuthenticated, suggestions });
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