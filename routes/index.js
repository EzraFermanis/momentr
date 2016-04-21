var express = require('express');
var router = express.Router();
// var quote = require('../quote')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Momentr' });
});

// Get the 'before' moments page //
router.get('/beforegame', function(req, res, next){
  res.render('beforegame', {title: "Momentr thinks this is what you need before your moment"} );
  // res.render('quote', {theQuote: quote});
});

router.get('/beforedate', function(req, res, next){
  res.render('beforedate', {title: "Momentr thinks this is what you need before your moment"} );
});

router.get('/beforespeech', function(req, res, next){
  res.render('beforespeech', {title: "Momentr thinks this is what you need before your moment"} );
});


router.get('/afterhardday', function(req, res, next){
  res.render('afterhardday', {title: "Momentr thinks this is what you need after your moment"} );
});

router.get('/afterbreakup', function(req, res, next){
  res.render('afterbreakup', {title: "Momentr thinks this is what you need after your moment"} );
});

router.get('/afterdrinks', function(req, res, next){
  res.render('afterdrinks', {title: "Momentr thinks this is what you need after your moment"} );
});

module.exports = router;
