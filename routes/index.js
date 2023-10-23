var express = require('express');
var router = express.Router();
var db;

function setDB(dbConnection) {
  db = dbConnection;
}

function printGrade(grade) {
  wholePart = Math.floor(grade);
  decimalPart = Math.ceil((grade - wholePart) * 10);
  console.log(wholePart, decimalPart);
  if (decimalPart < 3)
    return wholePart;
  if (decimalPart < 7)
    return String(wholePart) + '-';
  else
    return String(wholePart + 1) + '+';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  db.selectAllRows((rows) => {
    console.log(rows);
    db.insertRow('Lorem Ipsum 10', () => {
      db.insertRow('Lorem Ipsum 11', () => {
        db.insertRow('Lorem Ipsum 12', () => {
          db.selectAllRows((rows) => {
            console.log(rows);
          });
        });
      });
    });
  });
  user = {'name': 'Troy Bolton', 'class': '10b'};
  subjects = [{'name': 'Mathe', 'average': printGrade(2.3), 'grades': [{'title': 'Erste Klassenarbeit', 'grade': printGrade(2.3)}]}, {'name': 'Englisch', 'average': printGrade(3.0), 'grades': [{'title': 'Erste Klassenarbeit', 'grade': printGrade(3.0)}]}];
  res.render('index', {'user': user, 'subjects': subjects});
});

module.exports = { router, setDB };
