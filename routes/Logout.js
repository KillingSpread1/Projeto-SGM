const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao encerrar a sessão:', err);
            res.status(500).send('Erro interno do servidor ao encerrar a sessão');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;