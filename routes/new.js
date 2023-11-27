const express = require('express');
const router = express.Router();
var db;

function setDB(dbConnection) {
  db = dbConnection;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  return 'TODO';
});

/* POST create new user. */
router.post('/user', function(req, res, next) {
  return 'TODO';
});

/* POST create new school class. */
router.post('/class', function(req, res, next) {
  return 'TODO';
});

/* POST create new grade. */
router.post('/grade', function(req, res, next) {
  return 'TODO';
});

module.exports = { router, setDB };
