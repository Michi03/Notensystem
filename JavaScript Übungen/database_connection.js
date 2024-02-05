var connectionEstablished = false;
var data = {'Test': 'Fehlgeschlagen!'};

function createDatabaseConnection(callback=null) {
  setTimeout(function() {
    console.log('Database Connection established!');
    connectionEstablished = true;
    data['Test'] = 'Erfolgreich!';
    if (callback != null) {
      callback();
    }
  }, 2000);
}

function getData() {
  if (connectionEstablished)
    return data;
  console.log('Cannot get data! Database connection not established!');
}

function printData() {
  if (connectionEstablished)
    console.log(data);
  else
    console.log('Cannot get data! Database connection not established!');
}

function insertData(key, value, callback=null) {
  setTimeout(function() {
    if (connectionEstablished)
    {
      console.log('Inserted data!');
      data[key] = value;
      if (callback != null) {
        callback(data);
      }
    } else {
      console.log('Cannot insert data! Database connection not established!');
    }
  }, 500);
}

module.exports = {
  createDatabaseConnection,
  getData,
  printData,
  insertData
};
