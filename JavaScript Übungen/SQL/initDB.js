const sqlite3 = require('sqlite3').verbose();

function initDB(callback=null) {
  return new Promise((resolve) => {
    let connection = new sqlite3.Database(':memory:', (err) => {
      if (err) {
        console.log('Database connection failed.');
        console.error(err.message);
        return;
      }
      console.log('Database connection established.');
      if (callback != null)
        callback(connection);
      resolve(connection);
    });
  });
}


module.exports = {
  initDB
};
