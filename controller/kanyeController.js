const axios = require('axios');

module.exports = {
    getQuote: function(req, res) {
        return axios.get('http://api.kanye.rest/')
    }
}