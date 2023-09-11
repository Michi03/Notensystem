var express = require('express');
var router = express.Router();

function print_grade(grade) {
  whole_part = Math.floor(grade);
  decimal_part = Math.ceil((grade - whole_part) * 10);
  console.log(whole_part, decimal_part);
  if (decimal_part < 3)
    return whole_part;
  if (decimal_part < 7)
    return String(whole_part) + '-';
  else
    return String(whole_part + 1) + '+';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  user = {'name': 'Troy Bolton', 'class': '10b'};
  subjects = [{'name': 'Mathe', 'average': print_grade(2.3), 'grades': [{'title': 'Erste Klassenarbeit', 'grade': print_grade(2.3)}]}, {'name': 'Englisch', 'average': print_grade(3.0), 'grades': [{'title': 'Erste Klassenarbeit', 'grade': print_grade(3.0)}]}];
  res.render('index', {'user': user, 'subjects': subjects});
});

module.exports = router;
