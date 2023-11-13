const sqlite3 = require('sqlite3').verbose();
var db;

function createTable(tbl) {
  for (let i = 0; i < tbl.args.length; i++){
    console.log(tbl.args[i]);
  }
  db.run(`CREATE TABLE ${tbl.name} (id INTEGER PRIMARY KEY, info TEXT NOT NULL)`, (err) => {
    if (err) {
      console.log(`Error creating table ${tbl.name}.`);
      console.error(err.message);
      return;
    }
    console.log(`Created table ${tbl.name}`);
    //for (let i = 0; i < 10; i++) {
      //db.run(`INSERT INTO ${tbl.name} (info) VALUES (?)`, [`Lorem Ipsum ${i}`], (err) => {
        //if (err) {
          //console.log('Error while populating table.');
          //console.error(err.message);
        //}
      //});
    //}
    console.log(`Populated table ${tbl.name}`);
    //callback();
  });
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
    })
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
    })

    createTable({
      "name": "class",
      "args": [
          "year INTEGER NOT NULL",
          "kind char NOT NULL"
      ]
    })

    // Todo
    // Create SQL Database for:
    // - Leistung/Note
    // - Subject (Fach)
    // First UI Changes
  });
}

// TODO: adapt for project
function insertRow(info, callback) {
  // const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  // for (let i = 0; i < 10; i++) {
  //   stmt.run('Ipsum ' + i);
  // }
  // stmt.finalize();
  db.run(`INSERT INTO lorem (info) VALUES (?)`, [info], (err) => {
    if (err) {
      console.log('Error inserting row.');
      console.error(err.message);
    }
    console.log(`Inserted a row with the ID: ${this.lastID}`);
    callback();
  });
}

// TODO: adapt for project
function selectAllRows(callback) {
  db.all(`SELECT * FROM lorem`, (err, rows) => {
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

function close(callback) {
  db.close();
  callback();
}

module.exports = {
  init,
  insertRow,
  selectAllRows,
  selectRow,
  updateRow,
  deleteRow,
  close
};

// References:
// https://www.digitalocean.com/community/tutorials/how-to-use-sqlite-with-node-js-on-ubuntu-22-04
// https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4
