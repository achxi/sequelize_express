var models  = require('../models');
var express = require('express');
var router  = express.Router();
var app = express();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
});

router.get('/postgres', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('postgres', {
      title: 'Postgres is here'
      // users: users
    });
  });
});

router.get('/jasmine', function(req, res) {
  res.send('hello jasmine');
});


router.post('/jasmine', function(req, res) {
  res.send("You posted!");

// if __filename == process.argv[1]
//   app.listen(6789);
});

/*router.get('/leaflet', function(req, res) {
  res.render('leaflet', {
    pageTitle: 'Leaflet is here'
  });
});*/

router.get('/leaflet', function(req, res) {
  res.render('leaflet', {
    pageTitle: 'Leaflet and ejs are here'
  });
});

module.exports = router;
