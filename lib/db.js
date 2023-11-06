const sqlite3 = require('sqlite3').verbose();
var db;

function createTable(tbl) {
  for (let i = 0; tbl.args.length; i++){
    console.log(tbl.args[i]);

  }
  db.run(`CREATE TABLE ${tbl.name} (id int NOT NULL AUTO_INCREMENT, )`, (err) => {
    if (err) {
      console.log(`Error creating table ${tbl.name}.`);
      console.error(err.message);
    }
    console.log(`Created table ${tbl.name}`);
    for (let i = 0; i < 10; i++) {
      db.run(`INSERT INTO lorem (info) VALUES (?)`, [`Lorem Ipsum ${i}`], (err) => {
        if (err) {
          console.log('Error while populating table.');
          console.error(err.message);
        }
      });
    }
    console.log(`Populated table ${tbl.name}`);
    callback();
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

      ]
    })
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
