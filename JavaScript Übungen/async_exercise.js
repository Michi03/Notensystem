const db_lib = require('./database_connection.js');

function printData_callback() {
  // Schreibe eine Funktion, die über die Funktion db_lib.createDatabaseConnection
  // eine Datenbankverbindung herstellt und dann über die Funktion db_lib.printData
  // eine Ausgabe auf der Konsole macht.
  // TIPP: Die db_lib.createDatabaseConnection Funktion kann mit einer Funktion
  // als Parameter aufgerufen werden

  db_lib.createDatabaseConnection(callback = db_lib.printData)
}

function createDatabaseConnection() {
  // Schreibe eine Funktion, die über die Funktion db_lib.createDatabaseConnection
  // eine Datenbankverbindung herstellt. Die Funktion soll dabei warten, bis die
  // Datenbankverbindung erfolreich hergestellt wurde. Verwende dafür ein Promise.
  // TIPP: Die db_lib.createDatabaseConnection braucht genau 2000 Millisekunden,
  // bis die Datenverbindung hergestellt ist.

  return new Promise((resolve) => {
    db_lib.createDatabaseConnection()
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
      let x = await createDatabaseConnection();
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
