const express = require('express');
const logger = require("../logger/logger");
const helper = require("../util/helper");
const formatter = require("../validator/formatter");
const lodash= require('lodash');
const router = express.Router();

router.get('/hello', function (req, res) {
    const arr =['january', 'february', 'march', 'april','may','june','july','august','september','octomber','november','december']
const odd =([1,3,5,7,9,11,13,15,17,19])
     console.log(lodash.chunk(arr,3));
    var a =lodash.tail(odd)
    console.log(a);
});
router.get('/test-me', function (req, res) {
     res.send('My first ever api!  ')
   
});
router.get('/test-me1', function (req, res) {
    res.send('My first ever api! ')
    logger.wel()
    helper.printD()
    formatter.tr()


    formatter.UC() 
    
});

module.exports = router;
// adding this comment for no reason