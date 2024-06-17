const sqlite3 = require('sqlite3').verbose();
var db;

function createTable(tbl, callback) {
  sql_query = `CREATE TABLE ${tbl.name} (`;
  for (let i = 0; i < tbl.args.length; i++){
    if (i == tbl.args.length - 1)
      sql_query += `${tbl.args[i]}`;
    else
      sql_query += `${tbl.args[i]}, `;
  }
  sql_query += ');';
  console.log(sql_query);
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

function populateUsers() {
  db.run("INSERT INTO Users (firstname, surname, email, isTeacher, isAdmin, classBelonging) VALUES ('Jeff', 'Winger', 'winger@community.comm', 'FALSE', 'FALSE', 1);", (err) => {
    if (err) {
      console.log(`Error inserting row`);
      console.error(err.message);
      return;
    }
    db.run("INSERT INTO Users (firstname, surname, email, isTeacher, isAdmin) VALUES ('Ben', 'Chang', 'chang@community.com', 'TRUE', 'FALSE');", (err) => {
      if (err) {
        console.log(`Error inserting row`);
        console.error(err.message);
        return;
      }
      db.run("INSERT INTO Users (firstname, surname, email, isTeacher, isAdmin) VALUES ('Craig', 'Pelton', 'pelton@community.com', 'FALSE', 'TRUE');", (err) => {
        if (err) {
          console.log(`Error inserting row`);
          console.error(err.message);
          return;
        }
      });
    });
    console.log(`Populated table Users`);
  });
}

function populateClasses() {
  db.run("INSERT INTO CLASSES (year, kind) VALUES (11, 'a');", (err) => {
    if (err) {
      console.log(`Error inserting row`);
      console.error(err.message);
      return;
    }
    console.log(`Populated table Classes`);
  });
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
      "name": "Classes",
      "args": [
        "classID INTEGER PRIMARY KEY AUTOINCREMENT",
        "year INTEGER NOT NULL",
        "kind char NOT NULL"
      ]
    }, populateClasses);

    createTable({
      "name": "Subjects",
      "args": [
        "subjectID INTEGER PRIMARY KEY AUTOINCREMENT",
        "name VARCHAR(100) NOT NULL"
      ]
    }, populateSubjects);

    createTable({
      "name": "Users",
      "args": [
        "userID INTEGER PRIMARY KEY AUTOINCREMENT",
        "firstname VARCHAR(100) NOT NULL",
        "surname VARCHAR(100) NOT NULL",
        "email VARCHAR(100) NOT NULL",
        "isTeacher BOOLEAN NOT NULL",
        "isAdmin BOOLEAN NOT NULL",
        "classBelonging INTEGER",
        "FOREIGN KEY (classBelonging) REFERENCES Classes (classID)"
      ]
    }, populateUsers)

    createTable({
      "name": "Grades",
      "args": [
        "gradeID INTEGER PRIMARY KEY AUTOINCREMENT",
        "studentID INTEGER NOT NULL",
        "grade INTEGER NOT NULL",
        "title VARCHAR(100)",
        "description TEXT",
        "teacherID INTEGER NOT NULL",
        "subjectID INTEGER NOT NULL",
        "FOREIGN KEY (studentID) REFERENCES USERS (userID)",
        "FOREIGN KEY (teacherID) REFERENCES USERS (userID)",
        "FOREIGN KEY (subjectID) REFERENCES Subjects (subjectID)"
      ]
    }, populateGrades);
  });
}

function close(callback) {
  db.close();
  callback();
}

function insertRow(table, values, callback) {
  sql_query = `INSERT INTO ${table} (`;
  keys = Object.keys(values);
  for (let i = 0; i < keys.length; i++){
    if (i == keys.length - 1)
      sql_query += keys[i];
    else
      sql_query += `${keys[i]}, `;
  }
  sql_query += ') VALUES (';
  for (let i = 0; i < keys.length; i++){
    if (i == keys.length - 1)
      sql_query += values[keys[i]];
    else
      sql_query += `${values[keys[i]]}, `;
  }
  sql_query += ');';
  console.log(sql_query);
  db.run(sql_query, (err) => {
    if (err) {
      console.log(`Error adding row to table ${table}.`);
      console.error(err.message);
      return;
    }
    console.log(`Added row to table ${table}`);
    callback();
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

function updateRow( /* TODO */ ) {
  return 'TODO';
}

function deleteRow( /* TODO */ ) {
  return 'TODO';
}

function getStudents( /* TODO */ ) {
  return 'TODO';
}

function getTeachers( /* TODO */) {
  return 'TODO';
}

function getStudentGrades( /* TODO */) {
  return 'TODO';
}

module.exports = {
  init,
  insertRow,
  selectAllRows,
  updateRow,
  deleteRow,
  close,
  getStudents,
  getTeachers,
  getStudentGrades
};

// References:
// https://www.digitalocean.com/community/tutorials/how-to-use-sqlite-with-node-js-on-ubuntu-22-04
// https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
// https://www.sqlite.org/datatype3.html
