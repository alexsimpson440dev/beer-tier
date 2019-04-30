const express = require('express');
const router = express.Router();
const data = require('../tier.json')


beer = data['beer']
console.log(beer)

router.get('/', function (req, res) {
    res.render('beer', {title: 'Home', message: 'Welcome the Beer Page', data: beer});
})

router.get('/ipa', function (req, res) {
    res.render('beer', {title: `${beer[0]['type']}`, message: `The ${beer[0]['type']} has a ${beer[0]['flavor']} flavor`, data: beer})
})

router.get('/stout', function (req, res) {
    res.render('beer', {title: `${beer[1]['type']}`, message: `The ${beer[1]['type']} has a ${beer[1]['flavor']} flavor`, data: beer})
})

router.get('/sour', function (req, res) {
    res.render('beer', {title: `${beer[2]['type']}`, message: `The ${beer[2]['type']} has a ${beer[2]['flavor']} flavor`, data: beer})
})

module.exports = router