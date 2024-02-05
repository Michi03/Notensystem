const db_lib = require('./database_connection.js');

function getData_callback() {
  db_lib.createDatabaseConnection(db_lib.printData);
}

function createDatabaseConnection() {
  return new Promise((resolve) => {
    db_lib.createDatabaseConnection();
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function main() {
  if (process.argv.length >= 2) {
    if (process.argv[2] === 'callback') {
      console.log(`Trying to establish database connection`);
      printData_callback();
      return;
    }
    if (process.argv[2] === 'await') {
      console.log(`Trying to establish database connection`);
      await createDatabaseConnection();
      db_lib.printData();
      return;
    }
  }
  console.log(`Trying to establish database connection`);
  db_lib.createDatabaseConnection();
  db_lib.printData();
  return;
}


main();
