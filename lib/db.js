const sqlite3 = require('sqlite3').verbose();
var db;

function createTable(tbl, callback) {
  sql_query = `CREATE TABLE ${tbl.name} (`;
  for (let i = 0; i < tbl.args.length; i++){
    if (i == tbl.args.length)
      sql_query += `${tbl.args[i]}`;
    else
      sql_query += `${tbl.args[i]}, `;
  }
  sql_query += ');';
  db.run(sql_query, (err) => {
    if (err) {
      console.log(`Error creating table ${tbl.name}.`);
      console.error(err.message);
      return;
    }
    console.log(`Created table ${tbl.name}`);
    callback();
  });
}

// TODO: adapt for project
function populateUsers() {
  // let data = 'TODO';
  // data.forEach(entry => insertRow('User', entry));
}

// TODO: adapt for project
function populateClasses() {
  // let data = 'TODO';
  // data.forEach(entry => insertRow('User', entry));
}

// TODO: adapt for project
function populateSubjects() {
  // let data = 'TODO';
  // data.forEach(entry => insertRow('User', entry));
}

// TODO: adapt for project
function populateGrades() {
  // let data = 'TODO';
  // data.forEach(entry => insertRow('User', entry));
}

// TODO: adapt for project
function populateMarks() {
  // let data = 'TODO';
  // data.forEach(entry => insertRow('User', entry));
}

function init(callback) {
  // create connection
  db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      console.log('Database connection failed.');
      console.error(err.message);
      return;
    }
    console.log('Database connection established.');
    // create tables
    createTable({
      "name": "Grades",
      "args": [
        "info TEXT NOT NULL",
        "daniel TEXT NOT NULL"
      ]
    }, populateGrades)
    createTable({
      "name": "User",
      "args": [
        "firstname TEXT NOT NULL",
        "surname TEXT NOT NULL",
        "email TEXT NOT NULL",
        "isTeacher BOOLEAN NOT NULL",
        "isAdmin BOOLEAN NOT NULL",
        "classBelonging INTEGER NOT NULL FOREIGN KEY"
      ]
    }, populateUsers)

    createTable({
      "name": "Class",
      "args": [
        "year INTEGER NOT NULL",
        "kind char NOT NULL"
      ]
    }, populateClasses)

    // Todo
    // Create SQL Database for:
    // - Leistung/Note
    // - Subject (Fach)
    // First UI Changes
  });
}

function close(callback) {
  db.close();
  callback();
}

// TODO: adapt for project
function insertRow(info) {
  db.run(`INSERT INTO lorem (info) VALUES (?)`, [info], (err) => {
    if (err) {
      console.log('Error inserting row.');
      console.error(err.message);
    }
    console.log(`Inserted a row with the ID: ${this.lastID}`);
  });
}

function selectAllRows(table, callback) {
  db.all(`SELECT * FROM ${table}`, (err, rows) => {
    if (err) {
      throw new Error(err.message);
    }
    callback(rows);
  });
}

function selectRow( /* TODO */ ) {
  return 'TODO';
}

// TODO: adapt for project
function updateRow(id, newInfo, callback) {
  db.run(
    `UPDATE lorem SET info = ? WHERE id = ?`,
    [newInfo, id],
    (err) => {
      if (err) {
        console.log('Updating row failed.');
        console.error(err.message);
      }
      console.log(`Row ${id} has been updated`);
      callback();
    }
  );
}

function deleteRow( /* TODO */ ) {
  return 'TODO';
}

function getStudent( /* TODO */ id, callback) {
  let result = {'name': 'Troy Bolton', 'class': '10A'};
  callback(result);
}

// TODO: adapt for project
function getStudents( /* TODO */ callback) {
  let result = [
    {'id': 1, 'firstname': 'Troy', 'surname': 'Bolton', 'email': 'troy.bolton@wildcats.edu', 'isTeacher': false, 'isAdmin': false, 'classBelonging': 1},
    {'id': 2, 'firstname': 'Gabriella', 'surname': 'Montez', 'email': 'gabriella.montez@wildcats.edu', 'isTeacher': false, 'isAdmin': false, 'classBelonging': 1}
  ];
  callback(result);
}

// TODO: adapt for project
function getTeachers( /* TODO */ callback) {
  let result = [
    {'id': 3, 'firstname': 'Ms.', 'surname': 'Darbus', 'email': 'darbus@wildcats.edu', 'isTeacher': true, 'isAdmin': false, 'classBelonging': null}
  ];
  callback(result);
}

// TODO: adapt for project
function getStudentGrades( /* TODO */ id, callback) {
  let result = [
    {
      'name': 'Musik',
      'grades': [
        {'title': 'Erstes Halbjahr', 'grade': 2.3}
      ]
    },
    {
      'name': 'Mathe',
      'grades': [
        {'title': 'Erste Klassenarbeit', 'grade': 3.3},
        {'title': 'Zweite Klassenarbeit', 'grade': 3.0},
        {'title': 'Dritte Klassenarbeit', 'grade': 3.0},
      ]
    }
  ];
  callback(result);
}

module.exports = {
  init,
  insertRow,
  selectAllRows,
  selectRow,
  updateRow,
  deleteRow,
  close,
  getStudent,
  getStudents,
  getTeachers,
  getStudentGrades
};

// References:
// https://www.digitalocean.com/community/tutorials/how-to-use-sqlite-with-node-js-on-ubuntu-22-04
// https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
// https://www.sqlite.org/datatype3.html
