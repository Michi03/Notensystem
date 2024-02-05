const util = require('./util.js');

function addOneToNumber(number, callback=null) {
  return new Promise((resolve) => {
    let newNumber = util.addOne(number);
    if (callback != null)
      callback(newNumber);
    resolve(newNumber);
  });
}

async function main() {
  let number = 100;
  if (process.argv.length >= 2) {
    if (process.argv[2] === 'normal') {
      console.log(`Created new number: ${number}`);
      console.log(`Adding 1 to new number.`);
      let newNumber = addOneToNumber(number);
      console.log(`Number after adding 1: ${newNumber}`);
      return;
    }
    if (process.argv[2] === 'callback') {
      console.log(`Created new number: ${number}`);
      console.log(`Adding 1 to new number`);
      addOneToNumber(number, callback=function(newNumber) {
        console.log(`Number after adding 1: ${newNumber}`);
      });
      return;
    }
    if (process.argv[2] === 'await') {
      console.log(`Created new number: ${number}`);
      console.log(`Adding 1 to new number.`);
      let newNumber = await addOneToNumber(number);
      console.log(`Number after adding 1: ${newNumber}`);
      return;
    }
  }
  console.log(`Created new number: ${number}`);
  console.log(`Adding 1 to new number`);
  addOneToNumber(number);
  console.log(`Number after adding 1: ${number}`);
  return;
}


main();

// console.log('========= Synchronous loop (for (let i = 0; i < ...)) =========');
// let list = [];
// for (let i = 0; i < 100; i++) {
//   list.push(i);
// }
// console.log(list);
//
// console.log('================= Asynchronous loop (foreach) =================');
// let newList = [];
// list.forEach((item) => { newList.push(item) });
// console.log(newList);

// SOURCES
// https://www.w3resource.com/javascript-exercises/asynchronous/index.php
