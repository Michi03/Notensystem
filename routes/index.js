var express = require('express');
var router = express.Router();
var db;

function setDB(dbConnection) {
  db = dbConnection;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getStudents( (students) => {
    console.log(students);
    db.getTeachers( (teachers) => {
      console.log(teachers);
      res.render('index', {'students': students, 'teachers': teachers});
    });
  });
});

/* GET admin panel. */
router.get('/admin', function(req, res, next) {
  db.selectAllRows('User', (users) => {
    console.log(users);
    db.selectAllRows('Class', (classes) => {
      console.log(classes);
      res.render('admin', {'users': users, 'classes': classes});
    });
  });
});

/* GET admin settings for user. */
router.get('/user', function(req, res, next) {
  db.getUser(req.query.id, (user) => {
    return 'TODO';
  });
});

/* GET student page. */
router.get('/student', function(req, res, next) {
  db.getUser(req.query.id, (user) => {
    console.log(user);
    db.getStudentGrades(req.query.id, (subjects) => {
      console.log(subjects);
      res.render('student', {'user': user, 'subjects': subjects});
    });
  });
});

/* GET teacher page. */
router.get('/teacher', function(req, res, next) {
  res.render('teacher');
});

module.exports = { router, setDB };
