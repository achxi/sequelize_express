var models  = require('../models');
var express = require('express');
var router  = express.Router();

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

module.exports = router;
