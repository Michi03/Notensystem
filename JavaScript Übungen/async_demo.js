const util = require('./util.js');
let list = [5, 4, 3, 2];

function addOneToList() {
  return new Promise((resolve) => {
    util.addOne(list);
    resolve();
  });
}

function addOneWithDelay(callback=null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      util.addOne(list);
      if (callback != null)
        callback();
      resolve();
    }, 5000);
  });
}

async function main() {
  if (process.argv.length >= 2) {
    if (process.argv[2] === 'delay') {
      console.log(`Created new list: ${list}`);
      console.log(`Adding 1 to new list with delay`);
      addOneWithDelay();
      console.log(`List after adding 1: ${list}`);
      return;
    }
    if (process.argv[2] === 'callback') {
      console.log(`Created new list: ${list}`);
      console.log(`Adding 1 to new list with delay`);
      addOneWithDelay(callback=function() {
        console.log(`List after adding 1: ${list}`);
      });
      return;
    }
    if (process.argv[2] === 'await') {
      console.log(`Created new list: ${list}`);
      console.log(`Adding 1 to new list with delay`);
      await addOneWithDelay();
      console.log(`List after adding 1: ${list}`);
      return;
    }
  }
  console.log(`Created new list: ${list}`);
  console.log(`Adding 1 to new list without delay`);
  addOneToList();
  console.log(`List after adding 1: ${list}`);
  return;
}


main();

// SOURCES
// https://www.w3resource.com/javascript-exercises/asynchronous/index.php
