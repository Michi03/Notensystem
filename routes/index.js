const express = require('express');
const router = express.Router();
const util = require('../lib/util');
var db;

function setDB(dbConnection) {
  db = dbConnection;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/* GET DB table. */
router.get('/users', function(req, res, next) {
  db.selectAllRows('Users', (rows) => {
    console.log(rows);
    res.render('table', {'table': 'Users', 'keys': Object.keys(rows[0]), 'rows': rows});
  });
});

/* GET admin panel. */
router.get('/admin', function(req, res, next) {
  db.selectAllRows('Users', (rows) => {
    console.log(rows);
    res.render('admin', {'admin': 'Users', 'keys': Object.keys(rows[0]), 'rows': rows});
  });
});



/* GET admin settings for user. */
// router.get('/user', function(req, res, next) {
//   res.render('user', {});
// });

/* GET student page. */
router.get('/student', function(req, res, next) {
  res.render('student', {});
});

/* GET teacher page. */
router.get('/teacher', function(req, res, next) {
  res.render('teacher', {});
});

module.exports = { router, setDB };
