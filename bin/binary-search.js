#!/usr/bin/env node
// Task 1: write a recursive factorial method

(function startProcess() {
  const binarySearch = (list, item) => {
    let min = 0;
    let max = list.length - 1;
    let guess;

    while (min <= max) {
      guess = Math.floor((min + max) / 2);

      if (list[guess] === item) {
        return guess;
      }
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
    return -1;
  };

  console.log(binarySearch([2, 6, 7, 90, 103], 90));
})();
