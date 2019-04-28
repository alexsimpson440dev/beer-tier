const express = require('express');
const router = express.Router();
const data = require('../beer.json')

var ipa = data['beer'][0]

router.get('/', function (req, res) {
    res.render('beer', {title: 'Home', message: 'Welcome the Beer Page'});
})
// todo: Put a for loop here to look through all json data and make a route/page for it.
router.get('/ipa', function (req, res) {
    res.render('beer', {title: ipa['type'], message: `The ${ipa['type']} has a ${ipa['flavor']} flavor.`})
})

module.exports = router