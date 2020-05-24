// dependencies
const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const kanyeController = require('./controller/kanyeController');
// const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

// app.use(routes);

// router.route('/api/kanye')
//     .get(function(req, res) {
//         console.log('kanye route hit')
//         return kanyeController.getQuote
//     }
//     );
app.get('/api/kanye', (req, res) => {
    console.log('kanye route hit');
    kanyeController.getQuote().then(response => {
        console.log('kanyecontroller get quote response')
        console.log(JSON.stringify(response.data, null, 2))
        res.json(response.data.quote)
    })
})

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/umbrella");

app.listen(PORT, () => {
    console.log(`app started check http://localhost:${PORT}/`);
})
