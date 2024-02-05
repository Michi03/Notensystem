function concat(string1, string2) {
  // Schreibe eine Funktion, die beide übergebenen Strings in einer Zeile ausgibt.
}

function enquote(string) {
  // Schreibe eine Funktion, die den gegebenen String in Anführungszeichen ausgibt.
}

function print_row(language, compiled, typed, asynchron, quality) {
  // Schreibe eine Funktion, die die gegebenen Variablen als eine Tabellenzeile ausgibt.
  // Beispiel: | Pseudocode | nein | nein | nein | situationsabhängig |
}

function print_list(list) {
  // Schreibe eine Funktion, die die gegebenen Liste mit Anführungszeichen und Kommas getrennt ausgibt.
  // Beispiel: "1", "2", "3", "4"
}

function print_object(attributes, object) {
  // Schreibe eine Funktion, die das gegebene Objekt ausgibt.
  // Beispiel:
    // Sprache: Pseudocode
    // Kompiliert: nein
    // Typisiert: nein
    // Asynchron: nein
    // Qualität: situationsabhängig
}

function print_table(attributes, objects) {
  // Schreibe eine Funktion, die die gegebenen Variablen als eine Tabelle (mit Kopfzeile) ausgibt.
  // Beispiel:
    // | Sprache | Kompiliert | Typisiert | Asynchron | Qualität |
    // | Pseudocode | nein | nein | nein | situationsabhängig |
}

function main() {
  console.log('=========== Verbinden ===========');
  concat('Das ist', 'ein Test');
  console.log();

  console.log('=========== Zitieren ===========');
  enquote('Dieser Text ist ein Zitat');
  console.log();

  console.log('=========== Zeile ===========');
  print_row('JavaScript', 'nein', 'schwach', 'ja', 'okay');
  console.log();

  console.log('=========== Liste ===========');
  print_list(['JavaScript', 'C', 'Python', 'Prolog']);
  console.log();

  console.log('=========== Objekt ===========');
  print_object(['Sprache', 'Kompiliert', 'Typisiert', 'Asynchron', 'Qualität'], {'Sprache': 'JavaScript', 'Kompiliert': 'nein', 'Typisiert': 'schwach', 'Asynchron': 'ja', 'Qualität': 'okay'});
  console.log();

  console.log('=========== Tabelle ===========');
  print_table(['Sprache', 'Kompiliert', 'Typisiert', 'Asynchron', 'Qualität'], [{'Sprache': 'JavaScript', 'Kompiliert': 'nein', 'Typisiert': 'schwach', 'Asynchron': 'ja', 'Qualität': 'okay'}, {'Sprache': 'C', 'Kompiliert': 'ja', 'Typisiert': 'ja', 'Asynchron': 'nein', 'Qualität': 'super'}, {'Sprache': 'Python', 'Kompiliert': 'nein', 'Typisiert': 'schwach', 'Asynchron': 'nein', 'Qualität': 'gut'}, {'Sprache': 'Prolog', 'Kompiliert': 'nein', 'Typisiert': 'nein', 'Asynchron': 'nein', 'Qualität': 'verwirrend'}]);  console.log();
}

main();
