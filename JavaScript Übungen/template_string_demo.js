const base_string = 'This is a boring string!';
const numbers = {1: 'einen', 2: 'zwei', 3: 'drei', 4: 'vier', 5: 'fünf', 6: 'sechs', 7: 'sieben', 8: 'acht', 9: 'neun', 10: 'zehn', 11: 'elf', 12: 'zwölf'};

function main() {
  if (process.argv.length >= 2) {
    if (process.argv[2] === 'quote') {
      console.log(`The base string is "${base_string}".`);
    }
    else if (process.argv[2] === 'append') {
      console.log(`${base_string} ${process.argv[3]}`);
    }
    else if (process.argv[2] === 'brackets') {
      console.log(`${base_string} (${process.argv[3]})`);
    }
    else if (process.argv[2] === 'fill') {
      let words = base_string.split(' ');
      let newString = words[0];
      for (let i = 1; i < words.length; i++)
        newString += `${process.argv[3]}${words[i]}`;
      console.log(newString);
    }
    else if (process.argv[2] === 'count') {
      let words = base_string.replace('!', '').split(' ');
      for (let i = 0; i < words.length; i++)
        console.log(`${words[i]} hat ${numbers[words[i].length]} Buchstaben.`);
    }
  } else {
    console.log(base_string);
  }
}


main();
