const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// no api routes send react app build file
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;