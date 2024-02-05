function concat(string1, string2) {
  console.log(`${string1} ${string2}`);
}

function enquote(string) {
  console.log(`"${string}"`);
}

function print_row(language, compiled, typed, asynchron, quality) {
  console.log(`| ${language} | ${compiled} | ${typed} |  ${asynchron} | ${quality} |`);
}

function print_list(list) {
  string = '';
  for (let i = 0; i < list.length; i++) {
    if (i > 0)
      string += ', ';
    string += `"${list[i]}"`;
  }
  console.log(string);
}

function print_object(attributes, object) {
  for (let i = 0; i < attributes.length; i++) {
    console.log(`${attributes[i]}: ${object[attributes[i]]}`);
  }
}

function print_table(attributes, objects) {
  string = '|';
  for (let i = 0; i < attributes.length; i++)
    string += ` ${attributes[i]} |`;
  console.log(string);
  for (let i = 0; i < objects.length; i++) {
    string = '|';
    for (let j = 0; j < attributes.length; j++)
      string += ` ${objects[i][attributes[j]]} |`;
    console.log(string);
  }
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
