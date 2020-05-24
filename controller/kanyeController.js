const axios = require('axios');

module.exports = {
    getQuote: function(req, res) {
        // return axios.get('http://api.kanye.rest/')
        return axios.get(process.env.KANYE)
    }
}