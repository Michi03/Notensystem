const db_lib = require('./database_connection.js');

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

async function insertData_callback() {
  // Schreibe eine Funktion, die über die Funktion db_lib.createDatabaseConnection
  // eine Datenbankverbindung herstellt und dann über die Funktion db_lib.insertData
  // einen Datenpunkt hinzufügt. Anschließend sollen die neuen Daten auf der Konsole
  // ausgegeben werden.
  // TIPP: Der Funktion db_lib.insertData kann eine Funktion als callback übergeben
  // werden, welche auf dem neuen Datenset ausgeführt wird.
  await db_lib.createDatabaseConnection()

  db_lib.insertData('Insertion', 'Works' ,console.log);


}

function insertData_promise() {
  // Schreibe eine Funktion, die über die Funktion db_lib.createDatabaseConnection
  // eine Datenbankverbindung herstellt und dann über die Funktion db_lib.insertData
  // einen Datenpunkt hinzufügt. Anschließend sollen die neuen Daten als Rückgabewert
  // zurückgegeben werden. Verwende dafür die Funktion db_lib.getData.
  // TIPP: Die Funktion db_lib.insertData braucht exakt 500 Millisekunden, um einen
  // neuen Datenpunkt hinzuzufügen.

  return new Promise((resolve) => {
    db_lib.insertData('Insertion', 'Works');
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
