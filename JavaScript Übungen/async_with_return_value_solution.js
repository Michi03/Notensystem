const db_lib = require('./database_connection.js');

function createDatabaseConnection() {
  return new Promise((resolve) => {
    db_lib.createDatabaseConnection();
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function insertData_callback() {
  db_lib.createDatabaseConnection(function() {
    db_lib.insertData('Insertion', 'Works', function(data) {
      console.log(data);
    });
  });
}

function insertData_promise(key, value) {
  return new Promise((resolve) => {
    db_lib.insertData(key, value);
    setTimeout(() => {
      resolve(db_lib.getData());
    }, 500);
  });
}

async function main() {
  if (process.argv.length >= 2) {
    if (process.argv[2] === 'callback') {
      console.log(`Trying to establish database connection`);
      insertData_callback();
      return;
    }
    if (process.argv[2] === 'await') {
      console.log(`Trying to establish database connection`);
      await createDatabaseConnection();
      let data = await insertData_promise('Insertion', 'Works');
      console.log(data);
      return;
    }
  }
  console.log(`Trying to establish database connection`);
  db_lib.createDatabaseConnection();
  db_lib.insertData('Insertion', 'Works');
  console.log(db_lib.getData());
  return;
}


main();
