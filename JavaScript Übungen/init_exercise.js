const db = require('./initDB.js');

function initDB_callback() {
  // Schreibe eine Funktion, die eine Datenverbindung aufbaut und diese über eine
  // Callback Funktion direkt wieder schließt (über die close() Funktion) und
  // eine entsprechende Nachricht auf der Konsole ausgibt.
}

async function initDB_async() {
  // Schreibe eine Funktion, die eine Datenverbindung aufbaut und diese in einer
  // Variable speichert. Die Verbindung soll dann (über die close() Funktion)
  // direkt wieder geschlossen werden und eine entsprechende Nachricht soll auf
  // der Konsole ausgegeben werden.
}

initDB_callback();
initDB_async();
