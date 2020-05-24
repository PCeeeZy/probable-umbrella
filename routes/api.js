const router = require('express').Router();
const kanyeController = require('../controller/kanyeController');

router.route('/kanye')
    .get(function(req, res) {
        console.log('kanye route hit')
        kanyeController.getQuote
    }
    );

module.exports = router;